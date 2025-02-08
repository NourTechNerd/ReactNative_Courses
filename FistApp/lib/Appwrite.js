import { Account,Client,ID,Avatars,Databases } from 'react-native-appwrite';

export const appwriteConfig ={
    endpoint: "https://cloud.appwrite.io/v1",
    platform : "com.namo.aora",
    projectId : "67a5326b00070ecbf827",
    databaseId :"67a53ad7000d124a4d30",
    usersCollectionId : "67a53b98001d45938c11",
    videosCollectionId : "67a53bd300095afb8618",
    storageId : "67a542460025a7440f03",
}


// Init your React Native SDK (The Client is our App)
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.
;

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export async function  CreateUser(username_,email_,password_)
{
   try {
    // Authenticate of the new user
    const newAccount = await account.create(ID.unique(),email_,password_,username_);
    if(!newAccount) throw Error;
    const avatarURL =  avatars.getInitials(username_);

    // Sign In the new user
    await SignIn(email_,password_);

    // Add the New User the Database
    const NewUser = await databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.usersCollectionId,
        ID.unique(),
        {
            username:username_,
            email:email_,
            accountId : newAccount.$id, // $id is just a convention used by Appwrite to denote an object's unique identifier.
            avatar : avatarURL,

        }
    );
    return NewUser;
   } 
   catch (error) {
    console.log(error);
    throw new Error(error);
   }
}

export async function SignIn(email,password)
{
    try {
        // Create a New Session for the User
        const NewSession = account.createEmailPasswordSession(email,password);
        if(!NewSession) throw Error;
        return NewSession;
        
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

