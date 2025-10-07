import conf from "../conf/conf";
import { Client, Databases, ID, Storage, Query } from "appwrite";

class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client.setEndpoint(conf.appwriteURL).setProject(conf.projectID);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  makeSafeSlug(slug) {
    if (!slug) return undefined;

    let safeSlug = slug.trim().toLowerCase();
    safeSlug = safeSlug.replace(/[^a-z0-9\-_\.]/g, "-");
    safeSlug = safeSlug.replace(/^[^a-z0-9]+/, "");
    safeSlug = safeSlug.substring(0, 36);
    return safeSlug || undefined;
  }

  async createPost({ slug, title, content, featuredImage, status, userId }) {
    try {
      const safeId = this.makeSafeSlug(slug);
      return await this.databases.createDocument(
        conf.databaseID,
        conf.collectionId,
        safeId ?? ID.unique(),
        { slug, title, content, featuredImage, status, userId }
      );
    } catch (error) {
      console.error("Appwrite service :: createPost :: error", error);
      throw error;
    }
  }

  async updatePost(documentId, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.databaseID,
        conf.collectionId,
        documentId,
        { title, content, featuredImage, status }
      );
    } catch (error) {
      console.error("Appwrite service :: updatePost :: error", error);
      throw error;
    }
  }

  async deletePost(documentId) {
    try {
      await this.databases.deleteDocument(
        conf.databaseID,
        conf.collectionId,
        documentId
      );
      return true;
    } catch (error) {
      console.error("Appwrite service :: deletePost :: error", error);
      return false;
    }
  }

  async getPost(documentId) {
    try {
      return await this.databases.getDocument(
        conf.databaseID,
        conf.collectionId,
        documentId
      );
    } catch (error) {
      console.error("Appwrite service :: getPost :: error", error);
      return null;
    }
  }

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
      return [];
    }
  }

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
      return null;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.bucketID, fileId);
      return true;
    } catch (error) {
      console.error("Appwrite service :: deleteFile :: error", error);
      return false;
    }
  }

  getFileView(fileId) {
    try {
      return this.bucket.getFileView(conf.bucketID, fileId);
    } catch (error) {
      console.error("Appwrite service :: getFileView :: error", error);
      return null;
    }
  }
}

const service = new Service();
export default service;
