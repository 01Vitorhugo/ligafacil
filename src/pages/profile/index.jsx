import img from '../../assets/default.png';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../database';
import { useEffect, useState, useContext } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Button from '../../components/button';
import { Contextapi } from "../../contexApi";
import CardGame from '../../components/cardgame';

export default function Profile() {
    const [infoUser, setInfoUser] = useState(null);
    const auth = getAuth();

   const { gamesDatas = [] } = useContext(Contextapi);

    const gameUser = (gamesDatas && infoUser)
        ? gamesDatas.filter(game => infoUser && game.nomeTime === infoUser.nameTime)
        : [];




    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user && !infoUser) { // Só busca se infoUser ainda for null
            fetchUserData(user.uid);
        }
    });

    return () => unsubscribe();
}, [infoUser]); // Só chama a API se infoUser for undefined
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
                <img src={img} alt="escudo do time" className='w-[150px] h-[150px]' />
            </figure>

            <section className='w-full h-auto justify-center flex mt-10'>
                <div className='w-[319px] h-[85px] rounded-bl-[50px] rounded-tr-[50px] border-1 border-colorText bg-colorInput flex justify-center items-center'>

                    {infoUser ? (
                        <p className='text-[24px] text-colorText'>{infoUser.nameTime ? infoUser.nameTime : "Nome não disponível"}</p>
                    ) : (
                        <p className='text-[24px] text-colorText'>Carregando dados...</p>
                    )}

                </div>
            </section>

            <section className='w-full h-auto justify-around flex mt-10  pt-6 pb-6'>
                <Button label="Editar Perfil" />
                <Button label="Publicar jogo" to="/profile/publicgame" />
            </section>

            <section className='w-full h-auto flex flex-col justify-center items-center mt-10  pt-6 pb-6 gap-8'>

                {infoUser ? (
                    <>
                        <div className='w-[90%] h-[78px] flex justify-center items-center  border-1 border-colorPrinOpacity rounded-lg'>
                            <p className='text-colorInput'>Presidente: {infoUser.nameOwner}</p>
                        </div>

                        <div className='w-[90%] h-[78px] flex flex-col justify-center items-center  border-1 border-colorPrinOpacity rounded-lg'>
                            <p className='text-colorInput'>Local: {infoUser.logradouroCep}, {infoUser.number}</p>
                            <p className='text-colorInput'>{infoUser.bairroCep}, {infoUser.locationCep} - {infoUser.ufCep}</p>
                        </div>
                    </>

                ) : (
                    <>
                        <div className='w-[90%] h-[78px] flex justify-center items-center  border-1 border-colorPrinOpacity rounded-lg'>
                            <p className='text-colorInput'>Carregando dados...</p>
                        </div>

                        <div className='w-[90%] h-[78px] flex justify-center items-center  border-1 border-colorPrinOpacity rounded-lg'>
                            <p className='text-colorInput'>Carregando dados...</p>
                        </div>
                    </>

                )}

            </section>

            <section className='h-auto p-3'>
                <div>
                    <h2 className='text-2xl'>Meus jogos</h2>
                </div>

                <div className='h-auto mt-7'>

                    {gameUser && gameUser.length > 0 ? (
                        gameUser.map((game, index) => (
                            <CardGame
                                key={index}
                                endereco={game.bairro}
                                data={game.data}
                                horario={game.horario}
                                nomeTime={game.nomeTime}
                                rua={game.rua}
                                numero={game.numeroEndereco}
                                statusGame={game.status}
                                cep={game.cep}
                              teste='Excluir jogo'
                            />
                        ))
                    ) : (
                        <p className='text-colorText text-center'>0 jogos disponíveis</p>
                    )}
                </div>

            </section>
        </div>
    );
}
