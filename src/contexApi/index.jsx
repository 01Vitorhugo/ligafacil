import React, { createContext, useState } from "react";
import { db } from "../database";
import { doc, getDocs, getDoc, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";




export const Contextapi = createContext();

export const MyProvider = ({ children }) => {
    const [hoursGame, setHoursgame] = useState('');
    const [locationGame, setLocationGame] = useState('');
    const [streetLocation, setStreetLocation] = useState('');
    const [numberLocation, setNumberLocation] = useState('');
    const [dateGame, setDateGame] = useState('');
    const [statusGame, setStatusGame] = useState('');
    const [nameTime, setNameTime] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [nameOwner, setNameOwner] = useState('');


    const SearchGames = async () => {
        const querySnapshot = await getDocs(collection(db, "games")); // Obtendo todos os documentos da coleção
        setHoursgame(querySnapshot.docs[0].data().horario);
        setDateGame(querySnapshot.docs[0].data().data);
        setStatusGame(querySnapshot.docs[0].data().status);

    };
    SearchGames();

    const searchUser = async () => {
        const auth = getAuth();
        const usuarioLogado = auth.currentUser;

        if (usuarioLogado) {
            try {
                const docRef = doc(db, "users", usuarioLogado.uid); // Busca pelo ID do usuário logado
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    // console.log("Dados do usuário:", docSnap.data().cep);
                    setNameTime(docSnap.data().nameTime);
                    setEmail(docSnap.data().email);
                    setPhone(docSnap.data().phone);
                    setNameOwner(docSnap.data().nameOwner);
                    setStreetLocation(docSnap.data().cep);
                    setLocationGame(docSnap.data().location);
                    setNumberLocation(docSnap.data().number);
                    

                } else {
                    console.log("Usuário não encontrado no banco!");
                }
            } catch (error) {
                console.error("Erro ao buscar usuário:", error);
            }
        } else {
            console.log("Nenhum usuário logado.");
        }
    };

    searchUser();

    

    return (
        <Contextapi.Provider value={{ hoursGame, locationGame, numberLocation, dateGame, statusGame, nameTime, email, phone, nameOwner, streetLocation }}>
            {children}
        </Contextapi.Provider>
    );


}




