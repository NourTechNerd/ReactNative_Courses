import { createContext,useContext,useState,useEffect } from "react";

const GlobalContext = createContext();

export function useGlobaContext(){
    return useContext(GlobalContext);
} 

function GlobalProvider({children}) {
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const [User,setUser] = useState(null);
    const [isLoading,setIsLoading] = useState(true);

    useEffect(
        ()=>{

        }
    ,[]
    );
    
    return (
        <GlobalContext.Provider>
            {children}
        </GlobalContext.Provider>
    )
}











