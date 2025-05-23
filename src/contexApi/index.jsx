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

        // setHoursgame(gamesData.map(game => game.horario));
        // setDateGame(gamesData.map(game => game.data));
        // setStatusGame(gamesData.map(game => game.status));

        // console.log(gamesData);
        setGamesDatas(gamesData)
    };

    SearchGames();

    // const searchUser = async () => {
    //     const auth = getAuth();
    //     const usuarioLogado = auth.currentUser;

    //     if (usuarioLogado) {
    //         try {
    //             const docRef = doc(db, "users", usuarioLogado.uid); // Busca pelo ID do usuário logado
    //             const docSnap = await getDoc(docRef);

    //             if (docSnap.exists()) {
    //                 // console.log("Dados do usuário:", docSnap.data().cep);
    //                 setNameTime(docSnap.data().nameTime);
    //                 setEmail(docSnap.data().email);
    //                 setPhone(docSnap.data().phone);
    //                 setNameOwner(docSnap.data().nameOwner);
    //                 setStreetLocation(docSnap.data().cep);
    //                 setLocationGame(docSnap.data().location);
    //                 setNumberLocation(docSnap.data().number);


    //             } else {
    //                 console.log("Usuário não encontrado no banco!");
    //             }
    //         } catch (error) {
    //             console.error("Erro ao buscar usuário:", error);
    //         }
    //     } else {
    //         console.log("Nenhum usuário logado.");
    //     }
    // };

    // searchUser();



    return (
        <Contextapi.Provider value={{  gamesDatas }}>
            {children}
        </Contextapi.Provider>
    );


}




