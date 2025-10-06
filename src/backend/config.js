import conf from "../conf/conf";
import { Client, Databases, ID, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client.setEndpoint(conf.appwriteURL).setProject(conf.projectID);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  // 📝 Create a Post
  async createPost({ slug, title, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.databaseID,
        conf.collectionId,
        slug ?? ID.unique(),
        {
          slug, // ✅ ensure slug is saved in document
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.error("Appwrite service :: createPost :: error", error);
      throw error;
    }
  }

  // ✏️ Update a Post
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.databaseID,
        conf.collectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.error("Appwrite service :: updatePost :: error", error);
      throw error;
    }
  }

  // ❌ Delete a Post
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.databaseID,
        conf.collectionId,
        slug
      );
      return true;
    } catch (error) {
      console.error("Appwrite service :: deletePost :: error", error);
      return false;
    }
  }

  // 📄 Get a Single Post
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.databaseID,
        conf.collectionId,
        slug
      );
    } catch (error) {
      console.error("Appwrite service :: getPost :: error", error);
      return false;
    }
  }

  // 🗂️ Get All Posts
  async getPosts(
    queries = [Query.equal("status", "active"), Query.orderDesc("$createdAt")]
  ) {
    try {
      return await this.databases.listDocuments(
        conf.databaseID,
        conf.collectionId,
        queries
      );
    } catch (error) {
      console.error("Appwrite service :: getPosts :: error", error);
      return false;
    }
  }

  // 📤 Upload File
  async uploadFile(file) {
    try {
      const uploadedFile = await this.bucket.createFile(
        conf.bucketID,
        ID.unique(),
        file
      );
      return uploadedFile;
    } catch (error) {
      console.error("Appwrite service :: uploadFile :: error", error);
      return false;
    }
  }

  // 🗑️ Delete File
  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.bucketID, fileId);
      return true;
    } catch (error) {
      console.error("Appwrite service :: deleteFile :: error", error);
      return false;
    }
  }

  // 🖼️ Get File Preview
  getFileView(fileId) {
    try {
      return this.bucket.getFileView(conf.bucketID, fileId);
    } catch (error) {
      console.error("Appwrite service :: getFilePreview :: error", error);
      return null;
    }
  }
}

const service = new Service();
export default service;
