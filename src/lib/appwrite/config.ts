import { Client, Account, Databases, Storage, Avatars } from 'appwrite'

export const appwriteConfig = {
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    url: import.meta.env.VITE_APPWRITE_URL,
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
    userCollectionId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
    savesId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
    postsId: import.meta.env.VITE_APPWRITE_POSTS_COLLECITON,
}

export const client = new Client();

client.setProject(appwriteConfig.projectId)
client.setEndpoint(appwriteConfig.url)

export const account = new Account(client)
export const database = new Databases(client)
export const sorage = new Storage(client)
export const avatars = new Avatars(client)