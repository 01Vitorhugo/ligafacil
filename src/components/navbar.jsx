import logo from '../assets/logo_site.png';
import logo2 from '../assets/logo_icon.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from "../database";
import { toast } from "react-toastify";
import { useState } from 'react';
import { 
    Menu, 
    X, 
    LogOut, 
    User, 
    CalendarRange, 
    Trophy, 
    PhoneCall, 
    Info 
} from 'lucide-react';

export default function Navbar() {
    const [isAberto, setIsAberto] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const isMenu = () => {
        setIsAberto(!isAberto);
    };

    async function logout() {
        try {
            await signOut(auth);
            toast.success("Usuário deslogado com sucesso!");
            navigate('/login');
        } catch (error) {
            toast.error("Erro ao deslogar!");
        }
    }

    const navItems = [
        { path: "/", label: "Perfil", icon: User },
        { path: "/games", label: "Jogos", icon: CalendarRange },
        { path: "/championship", label: "Campeonatos", icon: Trophy },
        { path: "/contact", label: "Contato", icon: PhoneCall },
        { path: "/about", label: "Sobre nós", icon: Info },
    ];

    return (
        <>
            {/* Main Navbar */}
            <nav className="sticky top-0 z-50 w-full h-[78px] bg-[#09090b]/80 backdrop-blur-xl border-b border-white/[0.08] flex items-center justify-between px-6 transition-all duration-300">
                
                {/* Logo Section */}
                <div className="flex items-center">
                    <Link to="/" className="flex items-center gap-3 group">
                        <img 
                            src={logo} 
                            alt="Liga Fácil" 
                            className="w-[50px] h-[50px] object-contain drop-shadow-[0_0_8px_rgba(235,135,41,0.2)] group-hover:scale-105 transition-transform duration-300" 
                        />
                        <span className="hidden sm:block text-lg font-bold tracking-wider text-white uppercase group-hover:text-[#EB8729] transition-colors" style={{ fontFamily: '"Inter", sans-serif' }}>
                            Liga Fácil
                        </span>
                    </Link>
                </div>

                {/* Desktop Navigation Links */}
                <ul className="hidden md:flex items-center gap-6" style={{ fontFamily: '"Inter", sans-serif' }}>
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = location.pathname === item.path;
                        return (
                            <li key={item.path}>
                                <Link 
                                    to={item.path} 
                                    className={`relative py-2 px-3 text-sm font-medium transition-colors duration-300 flex items-center gap-2 rounded-md ${
                                        isActive 
                                            ? 'text-[#EB8729] bg-[#EB8729]/10' 
                                            : 'text-white/70 hover:text-white hover:bg-white/[0.04]'
                                    }`}
                                >
                                    <Icon className="h-4 w-4" />
                                    <span>{item.label}</span>
                                    {isActive && (
                                        <span className="absolute bottom-0 inset-x-3 h-0.5 bg-[#EB8729] rounded-full" />
                                    )}
                                </Link>
                            </li>
                        );
                    })}
                    
                    <SeparatorVertical />

                    <li>
                        <button 
                            onClick={logout}
                            className="text-white/60 hover:text-red-400 py-2 px-3 text-sm font-medium flex items-center gap-2 cursor-pointer transition-colors duration-300 hover:bg-red-500/10 rounded-md"
                        >
                            <LogOut className="h-4 w-4" />
                            <span>Sair</span>
                        </button>
                    </li>
                </ul>

                {/* Mobile Menu Trigger */}
                <div className="flex md:hidden items-center">
                    <button 
                        onClick={isMenu} 
                        className="p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/[0.05] cursor-pointer transition-all duration-300"
                        aria-label="Toggle Menu"
                    >
                        {isAberto ? <X className="h-6 w-6 text-[#EB8729]" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

            </nav>

            {/* Mobile Menu Panel */}
            {isAberto && (
                <div className="fixed inset-0 z-40 top-[78px] w-full h-[calc(100vh-78px)] bg-[#09090b]/98 backdrop-blur-2xl flex flex-col justify-between p-6 animate-[fadeIn_0.3s_ease-out] md:hidden">
                    
                    {/* Menu Links */}
                    <ul className="flex flex-col gap-3 pt-6" style={{ fontFamily: '"Inter", sans-serif' }}>
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = location.pathname === item.path;
                            return (
                                <li key={item.path}>
                                    <Link 
                                        to={item.path}
                                        onClick={isMenu}
                                        className={`flex items-center gap-4 py-3.5 px-4 rounded-xl text-lg font-medium transition-all duration-200 ${
                                            isActive 
                                                ? 'bg-[#EB8729] text-white shadow-lg shadow-[#EB8729]/20' 
                                                : 'text-white/80 hover:text-white hover:bg-white/[0.05]'
                                        }`}
                                    >
                                        <Icon className="h-5 w-5" />
                                        <span>{item.label}</span>
                                    </Link>
                                </li>
                            );
                        })}

                        <div className="my-2 border-t border-white/5" />

                        <li>
                            <button 
                                className="w-full flex items-center gap-4 py-3.5 px-4 rounded-xl text-lg font-medium text-red-400 hover:bg-red-500/10 cursor-pointer transition-all duration-200" 
                                onClick={() => {
                                    isMenu();
                                    logout();
                                }}
                            >
                                <LogOut className="h-5 w-5" />
                                <span>Sair da Conta</span>
                            </button>
                        </li>
                    </ul>

                    {/* Logo footer inside mobile menu */}
                    <div className="flex flex-col items-center justify-center gap-2 pb-10">
                        <img 
                            src={logo2} 
                            alt="Liga Fácil Icon" 
                            className="w-24 h-24 object-contain opacity-25 drop-shadow-[0_0_15px_rgba(235,135,41,0.1)]" 
                        />
                        <p className="text-[10px] text-white/20 uppercase tracking-widest" style={{ fontFamily: '"Inter", sans-serif' }}>
                            Liga Fácil v1.0
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}

// Small helper component for desktop navbar divider
function SeparatorVertical() {
    return <div className="h-5 w-px bg-white/10" />;
}