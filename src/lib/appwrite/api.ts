import { INewUser } from "@/types";
import { account, appwriteConfig, avatars, database } from "./config";
import { ID } from "appwrite";

export async function createUserAccount(user: INewUser) {
    try {
        const newAccount = await account.create(
            ID.unique(),
            user.email,
            user.password,
            user.name
        )

        if(!newAccount) throw Error;
        const avatarUrl = avatars.getInitials(user.name)
        const newUser = await saveUserToDb({
            accountId: newAccount.$id,
            name: newAccount.name,
            email: newAccount.email,
            username: user.username,
            imageUrl: avatarUrl
        })

        return newUser
    } catch (error) {
        return error
    }
}

// SAVE USERS TO DB
export async function saveUserToDb(user: {
    accountId: string,
    email: string,
    name: string,
    imageUrl: URL,
    username?: string;
}) {
    try {
        const newUser = await database.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            user
        )
        return newUser
    } catch (error) {
        return error
    }
}