import React, { createContext, useState } from "react";
import { db } from "../database";
import { getDocs, collection } from "firebase/firestore";
// import { getAuth } from "firebase/auth";




export const Contextapi = createContext();

export const MyProvider = ({ children }) => {
    const [gamesDatas, setGamesDatas] = useState([])


    const SearchGames = async () => {
        const querySnapshot = await getDocs(collection(db, "games"));
        const gamesData = querySnapshot.docs.map(doc => doc.data());

   
        setGamesDatas(gamesData);
    };

    SearchGames();

    return (
        <Contextapi.Provider value={{  gamesDatas }}>
            {children}
        </Contextapi.Provider>
    );


}




