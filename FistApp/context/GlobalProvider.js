import { createContext,useContext,useState,useEffect } from "react";
import { GetCurrentUser } from "../lib/Appwrite";


const GlobalContext = createContext();

export function useGlobaContext(){
    return useContext(GlobalContext);
} 

function GlobalProvider({children}) {
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const [User,setUser] = useState(null);
    const [isLoading,setIsLoading] = useState(true);
    
    async function handleLogin() {
        try {
            const LoggedInUser = await GetCurrentUser();
            setUser(LoggedInUser);
            setIsLoggedIn(true);
        } catch (error) {
            console.log(error.message);
        }
        finally{
            setIsLoading(false);
        }
    }
    useEffect(
        ()=> {
            handleLogin();
        }
    ,[]
    );
    
    return (
        <GlobalContext.Provider>
            {children}
        </GlobalContext.Provider>
    )
}











