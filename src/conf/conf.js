const conf = {
  appwriteURL: String(import.meta.env.VITE_APPWRITE_URL),
  projectName: String(import.meta.env.VITE_APPWRITE_PROJECT_NAME),
  projectID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  databaseID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  collectionId: String(import.meta.env.VITE_APPWRITE_TABLE_NAME),
  bucketID: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
  RTEKey: String(import.meta.env.VITE_RTE_API_KEY),
};

export default conf;
