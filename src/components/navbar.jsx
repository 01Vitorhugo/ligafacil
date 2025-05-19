import logo from '../assets/logo_site.png'
import logo2 from '../assets/logo_icon.png'
import iconAberto from '../assets/icon_x.png'
import iconFechado from '../assets/icon_menu.png'

import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isAberto, setIsAberto] = useState(false);

    useEffect(() => {
        console.log(isAberto);
    }, [isAberto]);

    const isMenu = () => {
        setIsAberto(!isAberto);
    };



    return (
        <>
            <nav className="navbar w-full h-[78px] bg-colorPrin flex">

                <div className="w-[50%] h-full flex items-center pl-5">
                    <img src={logo} alt="logo" className='w-[55px] h-[55px]' />

                </div>

                <div className="w-[50%] h-full flex justify-end items-center pr-5 ">
                    <button onClick={isMenu} className='cursor-pointer'>
                        <img src={isAberto ? iconAberto : iconFechado} alt="menu-icon" className='w-[25px] h-[25px]' />
                    </button>

                </div>


            </nav>

            {isAberto === true ? (
                <div className="w-full h-[100vh] bg-colorSec flex flex-col items-center  bg-colorPrinOpacity">

                    <ul className="flex flex-col h-[60%] pt-10 w-full pl-5 gap-2 ">
                        <li className="text-colorText text-[20px] mb-4">Perfil</li>
                        <li className="text-colorText text-[20px] mb-4">Início</li>
                        <li className="text-colorText text-[20px] mb-4">Jogos</li>
                        <li className="text-colorText text-[20px] mb-4">Campeonatos</li>
                        <li className="text-colorText text-[20px] mb-4">Contato</li>
                        <li className="text-TextBlack text-[20px] mb-4">Sair</li>
                    </ul>

                    <div className='w-full h-[40%] flex justify-center  '>
                        <img src={logo2} alt="logo" className='w-[150px] h-[150px]' />

                    </div>
                </div>
            ) : null}



        </>

    )
}