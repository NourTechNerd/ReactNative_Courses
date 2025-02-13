import { Account,Client,ID,Avatars,Databases,Query } from 'react-native-appwrite';

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

export async function LogIn(email,password)
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

export async function GetCurrentUser()
{
try {
    
    // Get the User Account
    const CurrentAccount = await account.get(); // Get the current logged in user account
    if(!CurrentAccount) throw new Error("No Account Found");
    //console.log(CurrentAccount);
    // Get the User Informations from the Database
    const results = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.usersCollectionId,
       [Query.equal('accountId',CurrentAccount.$id)]
    )

    if (results.total === 0) throw new Error("No User Found");
    const CurrentUser = results.documents[0];
    return CurrentUser;
    
} catch (error) {
    console.log(error.message);
    return null;
}
}

export async function GetVideos()
{
    try {
        const videos = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.videosCollectionId,
        )
    
        if (videos.total === 0) throw new Error("No Videos Found");
        //console.log("videos found",videos);
        return videos.documents;
    } catch (error) {
        console.log(error.message);
        
    }

}

export async function GetLatestVideos()
{
    try {
        const videos = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.videosCollectionId,
            [Query.orderDesc('$createdAt'),Query.limit(2)]
        )
    
        if (videos.total === 0) throw new Error("No Videos Found");
        //console.log("videos found",videos);
        return videos.documents;
    } catch (error) {
        console.log(error.message);
        
    }

}







