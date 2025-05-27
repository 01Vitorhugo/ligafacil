import { useContext, useState, useEffect } from "react";
import { Contextapi } from "../../contexApi";
import CardGame from "../../components/cardgame";
import Button from "../../components/button";
import bannerCamp from "../../assets/breveCamp.png"

export default function GamePage() {
    const { gamesDatas, user } = useContext(Contextapi);
    const [phone, setPhone] = useState(null);

    useEffect(() => {
        if (user && user.nameTime && gamesDatas.length > 0) {
            const jogoDoUsuario = gamesDatas.find(game => game.nomeTime.trim() === user.nameTime.trim());

            if (jogoDoUsuario) {
                // console.log('Tem algo');
                setPhone(user.phone);
            } else {
                // console.log('Não tem');
            }
        }
    }, [gamesDatas, user]);

    console.log(phone)


    return (
        <section className="w-full h-auto">
            <section className="w-full h-20 flex items-center p-3 border-b-1 border-colorPrinOpacity ">
                <h1 className='text-[24px]'>Jogos disponíveis</h1>
            </section>

            {gamesDatas.map((game, index) => (
                <>
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

                    />

                    <div className='h-auto flex items-center justify-center p-6'>
                       <Button 
    label="Aceitar Jogo" 
    onClick={() => window.open(
        `https://wa.me/5511995216604?text=🔥 Olá! Encontrei seu time no site Liga Fácil e quero jogar. Vamos nessa?%0A
        🏆 Time: ${game.nomeTime}%0A
        🕒 Horário: ${game.horario}%0A
        📍 Local: ${game.rua}, ${game.numeroEndereco} - ${game.bairro}, CEP: ${game.cep}`, "_blank")}
 />
                    </div>
                </>

            ))}

            <figure className="h-[200px] mt-10">
                <img src={bannerCamp} alt="Banner breve campeonato" />
            </figure>
        </section>


    )
}