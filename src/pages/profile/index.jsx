import img from '../../assets/logo_branca.png';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../database';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Button from '../../components/button';

export default function Profile() {
    const [infoUser, setInfoUser] = useState(null);
    const auth = getAuth();

    // console.log(infoUser);
    useEffect(() => {
        // Espera o Firebase carregar completamente o usuário logado
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                fetchUserData(user.uid);
            }
        });

        return () => unsubscribe(); // Limpa a subscrição ao desmontar o componente
    }, []);

    async function fetchUserData(uid) {
        try {
            const userRef = doc(db, "users", uid);
            const snapshot = await getDoc(userRef);

            if (snapshot.exists()) {
                setInfoUser(snapshot.data());
            } else {
                console.error("Usuário não encontrado no Firestore");
            }
        } catch (error) {
            console.error("Erro ao buscar dados do usuário:", error);
        }
    }

    return (
        <div className="w-full h-auto">
            <section className=" h-20 flex items-center pl-3 border-b-1 border-colorPrinOpacity">
                <h1 className="text-[24px]">Meu perfil</h1>
            </section>

            <figure className="w-full h-auto flex justify-center items-center mt-10">
                <img src={img} alt="escudo do time" className='w-[173px] h-[173px]' />
            </figure>

            <section className='w-full h-auto justify-center flex mt-10'>
                <div className='w-[319px] h-[85px] rounded-bl-[50px] rounded-tr-[50px] border-1 border-colorText bg-colorInput flex justify-center items-center'>

                    {infoUser ? (
                        <p className='text-[24px] text-colorText'>{infoUser.nameTime ? infoUser.nameTime : "Nome não disponível"}</p>
                    ) : (
                        <p>Carregando dados...</p>
                    )}

                </div>
            </section>

            <section className='w-full h-auto justify-around flex mt-10  pt-6 pb-6'>
                <Button label="Editar Perfil" />
                <Button label="Publicar jogo"  />
            </section>
        </div>
    );
}