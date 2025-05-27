import React, { createContext, useState, useEffect } from "react";
import { db } from "../database";
import { getDocs, collection } from "firebase/firestore";

export const Contextapi = createContext();

export const MyProvider = ({ children }) => {
    const [gamesDatas, setGamesDatas] = useState([]);
    const [user, setUser] = useState(null); // Agora é um único objeto, não uma lista

    useEffect(() => {
        const SearchGames = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "games"));
                const gamesData = querySnapshot.docs.map(doc => doc.data());

                const queryUser = await getDocs(collection(db, "users"));
                const usersData = queryUser.docs.map(doc => doc.data());

                // Supondo que há apenas UM usuário ativo, pegamos o primeiro usuário encontrado
                const userData = usersData.length > 0 ? usersData[0] : null;

                setGamesDatas(gamesData);
                setUser(userData);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        };

        SearchGames();
    }, []); // Agora roda apenas uma vez ao montar o componente

    return (
        <Contextapi.Provider value={{ gamesDatas, user }}>
            {children}
        </Contextapi.Provider>
    );
};