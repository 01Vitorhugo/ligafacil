import { useState, useEffect, useContext } from "react";
import banner from "../../assets/banner_home.png";
import CardGame from "../../components/cardgame";
import { Contextapi } from "../../contexApi";

export default function Home() {
    
    const {nameTime, streetLocation, dateGame, hoursGame, statusGame, locationGame, numberLocation } = useContext(Contextapi);


    return (
        <div className="w-full h-auto">
              <figure className="h-[252px]">
                <img src={banner} alt="banner home" />
                
              </figure>

              <CardGame endereco={locationGame} data={dateGame} horario={hoursGame} nomeTime={nameTime}  rua={streetLocation} numero={numberLocation}/>

        </div>
    );
}
