import { useState } from "react";
import Button from "../../components/button";
import { db, auth } from "../../database";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



export default function PublicGame() {
    const [data, setData] = useState("");
    const [horario, setHorario] = useState("");
    const [bairro, setBairro] = useState("");

    const [nomeTime, setNomeTime] = useState("");
    const [numeroRua, setNumeroRua] = useState("");
    const [rua, setRua] = useState("");

      const navigate = useNavigate();



    const publicGame = async () => {


        if (!data || !horario) {
            console.log("Preencha todos os campos!");
            return;
        }

        const user = auth.currentUser;
        if (!user) {
            alert("Usuário não autenticado!");
            return;
        }

        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);

        if (!userSnap.exists()) {
            console.log("Dados do usuário não encontrados!");
            return;
        }

        const userData = userSnap.data();




        const gameRef = doc(db, "games", user.uid);
        await setDoc(gameRef, {
            data: data,
            horario: horario,
            bairro: userData.bairroCep,
            status: "Disponível",
            nomeTime: userData.nameTime,
            rua: userData.logradouroCep,
            numeroEndereco: userData.number,
            cep: userData.cep
        });

        navigate('/');

    }

    return (
        <div className="w-full h-auto">
            <section className=" h-20 flex items-center pl-3 border-b-1 border-colorPrinOpacity">
                <h1 className="text-[24px]">Publicar jogo</h1>
            </section>

            <section className='mt-10 w-full h-auto'>

                <form >
                    <div className='w-full h-auto flex flex-col pl-3 pr-3 gap-1'>
                        <label htmlFor="" className='text-colorPrin'>Data</label>
                        <input
                            className='h-[45px] border border-colorInput rounded-lg text-colorText pl-3'
                            type="date"
                            value={data}
                            onChange={(e) => setData(e.target.value)}
                            required
                        />
                    </div>

                    <div className='w-full h-auto flex flex-col pl-3 pr-3 gap-1 mt-8'>
                        <label htmlFor="" className='text-colorPrin'>Horário</label>
                        <input
                            className='h-[45px] border border-colorInput rounded-lg text-colorText pl-3'
                            type="time"
                            value={horario}
                            onChange={(e) => setHorario(e.target.value)}
                            required

                        />
                    </div>

                    {/* Inputs para pegar valor sem o user ver */}


                    <input
                        className=''
                        type="text"
                        value={nomeTime}
                        onChange={(e) => setNomeTime(e.target.value)}
                        required

                    />

                    <input
                        className=''
                        type="text"
                        value={numeroRua}
                        onChange={(e) => setNumeroRua(e.target.value)}
                        required

                    />

                    <input
                        className=''
                        type="text"
                        value={rua}
                        onChange={(e) => setRua(e.target.value)}
                        required

                    />

                    <input
                        className=''
                        type="text"
                        value={bairro}
                        onChange={(e) => setBairro(e.target.value)}
                        required

                    />



                    <div className='w-full h-auto flex justify-center mt-6 mb-30'>
                        <Button label="Publicar jogo" onClick={publicGame} />

                    </div>

                </form>
            </section>

        </div>
    )
}