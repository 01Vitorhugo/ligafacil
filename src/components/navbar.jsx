import logo from '../assets/logo_site.png'
import logo2 from '../assets/logo_icon.png'
import iconAberto from '../assets/icon_x.png'
import iconFechado from '../assets/icon_menu.png'
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from "../database"

import { useState } from 'react';

export default function Navbar() {
    const [isAberto, setIsAberto] = useState(false);
    const navigate = useNavigate();

    const isMenu = () => {
        setIsAberto(!isAberto);
    };

    async function logout() {

        await signOut(auth);
        // alert("Usuário deslogado com sucesso!");
        toast.success("Usuário deslogado com sucesso!");

        navigate('/login');
    }



    return (
        <>
            <nav className="navbar w-full h-[78px] bg-colorPrin flex">

                <div className="w-[50%] h-full flex items-center pl-5">
                    <Link to="/">
                        <img src={logo} alt="logo" className='w-[55px] h-[55px]' />
                    </Link>
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

                        <li className="text-colorText text-[20px] mb-4">
                            <button onClick={isMenu} className='cursor-pointer'>
                                <Link to="/profile">Perfil</Link>
                            </button>

                        </li>

                        <li className="text-colorText text-[20px] mb-4">
                            <button onClick={isMenu} className='cursor-pointer'>
                                <Link to="/">Início</Link>
                            </button>
                        </li>

                        <li className="text-colorText text-[20px] mb-4">Jogos</li>

                        <li className="text-colorText text-[20px] mb-4">
                            <button onClick={isMenu} className='cursor-pointer'>
                                <Link to="/championship">Campeonatos</Link>
                            </button>
                        </li>

                        <li className="text-colorText text-[20px] mb-4">
                            <button onClick={isMenu} className='cursor-pointer'>
                                <Link to="/contact">Contato</Link>
                            </button>
                        </li>

                        <li className="text-TextBlack text-[20px] mb-4 w-auto">
                            <button className='text-left cursor-pointer w-auto' onClick={logout}>Sair</button>
                        </li>
                    </ul>

                    <div className='w-full h-[40%] flex justify-center  '>
                        <img src={logo2} alt="logo" className='w-[150px] h-[150px]' />
                    </div>
                </div>
            ) : null}



        </>

    )
}