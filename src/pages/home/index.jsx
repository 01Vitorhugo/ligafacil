import { useContext } from "react";
import banner from "../../assets/banner_home.png";
import CardGame from "../../components/cardgame";
import { Contextapi } from "../../contexApi";

export default function Home() {

  const { gamesDatas } = useContext(Contextapi);


  return (
    <div className="w-full h-auto">
      <figure className="h-[252px]">
        <img src={banner} alt="banner home" />
      </figure>


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
        />
      ))}


    </div>
  );
}
