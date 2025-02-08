import { Account,Client,ID,Avatars } from 'react-native-appwrite';

export const appwriteConfig ={
    endpoint: "https://cloud.appwrite.io/v1",
    platform : "com.namo.aora",
    projectId : "67a5326b00070ecbf827",
    databaseId :"67a53ad7000d124a4d30",
    usersCollectionId : "67a53b98001d45938c11",
    videosCollectionId : "67a53bd300095afb8618",
    storageId : "67a542460025a7440f03",
}


// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.
;

const account = new Account(client);
const avatars = new Avatars(client);

export async function  CreateUser(username,email,password)
{
   try {
    const newUser = await account.create(ID.unique(),email,password,username);
    if(!newUser) throw Error;
    const useravatar =  avatars.getInitials(username);
    
   } 
   catch (error) {
    console.log(error);
    throw new Error(error);
   }
}

