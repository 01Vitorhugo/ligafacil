import React from "react";
import logoFooter from "../assets/logo_icon.png";
import { Link } from 'react-router-dom';
import { Flame } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative w-full bg-[#09090b] border-t border-white/[0.08] py-8 text-white/50 z-20 " style={{ fontFamily: '"Inter", sans-serif' }}>
            <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                
                {/* Brand Logo & Info */}
                <div className="flex items-center gap-3">
                    <img 
                        src={logoFooter} 
                        alt="Liga Fácil Logo" 
                        className="w-[45px] h-[45px] object-contain drop-shadow-[0_0_10px_rgba(235,135,41,0.15)] opacity-80" 
                    />
                    <div className="text-left">
                        <span className="block font-bold text-white text-sm tracking-wider uppercase">Liga Fácil</span>
                        <span className="text-[10px] text-white/30 block">Conectando o futebol amador.</span>
                    </div>
                </div>

                {/* Rights Text */}
                <div className="text-center md:text-left text-[11px] text-white/40 space-y-1">
                    <p>© {new Date().getFullYear()} Liga Fácil Esportes. Todos os direitos reservados.</p>
                    <p className="text-[9px] text-white/20 flex items-center justify-center md:justify-start gap-1">
                        <span>Desenvolvido com paixão</span>
                        <Flame className="h-3 w-3 text-[#EB8729] fill-[#EB8729]" />
                    </p>
                </div>

                {/* Social Icons (Horizontal Alignment with inline SVGs) */}
                <div className="flex items-center gap-4">
                    {/* YouTube inline SVG */}
                    <a 
                        href="https://youtube.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-2.5 rounded-full bg-white/[0.03] border border-white/5 text-white/60 hover:text-[#EB8729] hover:bg-white/[0.06] hover:border-[#EB8729]/20 transition-all duration-300"
                        aria-label="Acessar Youtube"
                    >
                        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="h-4.5 w-4.5">
                            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                        </svg>
                    </a>
                    
                    {/* Instagram inline SVG */}
                    <a 
                        href="https://instagram.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-2.5 rounded-full bg-white/[0.03] border border-white/5 text-white/60 hover:text-[#EB8729] hover:bg-white/[0.06] hover:border-[#EB8729]/20 transition-all duration-300"
                        aria-label="Acessar Instagram"
                    >
                        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="h-4.5 w-4.5">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                    </a>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
