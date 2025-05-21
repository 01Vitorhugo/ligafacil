import React from "react";
import logoFooter from "../assets/logo_icon.png";
import iconInsta from "../assets/icon_instagram.png";
import iconYoutube from "../assets/icon_youtube.png";

const Footer = () => (
    <footer className=" h-[81px] bg-colorFooter text-colorTextBlack flex items-center justify-evenly z-[100] mt-10">
        <img src={logoFooter} alt="Imagem da logo" className="w-[67px] h-[67px]"/>
        <span className="text-[9px]">© {new Date().getFullYear()} LigaFacil. Todos os direitos reservados.</span>
        <div className="h-full w-[35px] flex flex-col justify-evenly items-center">
            <img src={iconYoutube} alt="Youtube" className="h-[25px] w-[25px]"/>
            <img src={iconInsta} alt="Instagram" className="h-[25px] w-[25px]"/>
            
        </div>
    </footer>
);

export default Footer;
