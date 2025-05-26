import { useContext } from "react";
import { Contextapi } from "../../contexApi";
import CardGame from "../../components/cardgame";

export default function GamePage() {
    const { gamesDatas } = useContext(Contextapi);

    return (
        <section className="w-full h-auto">
            <section className="w-full h-20 flex items-center p-3 border-b-1 border-colorPrinOpacity ">
                <h1 className='text-[24px]'>Jogos disponíveis</h1>
            </section>

            {gamesDatas.map((game, index) => (
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
                teste='Disponível'
                />
            ))}
        </section>
    )
}