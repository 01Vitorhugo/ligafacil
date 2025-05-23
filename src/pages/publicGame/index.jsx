import { useState } from "react";
import Button from "../../components/button";
import { db, auth } from "../../database";
import { doc, setDoc } from "firebase/firestore";


export default function PublicGame() {
    const [data, setData] = useState("");
    const [horario, setHorario] = useState("");

    const user = auth.currentUser;




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



        const gameRef = doc(db, "games", user.uid);

        await setDoc(gameRef, {
            data: data,
            horario: horario,
            status: "Disponível",
        });

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

                    <div className='w-full h-auto flex justify-center mt-6 mb-30'>
                        <Button label="Publicar jogo" onClick={publicGame} />

                    </div>

                </form>
            </section>

        </div>
    )
}