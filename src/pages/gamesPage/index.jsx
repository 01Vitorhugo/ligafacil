import { useContext, useState, useEffect } from "react";
import { Contextapi } from "../../contexApi";
import CardGame from "../../components/cardgame";
import bannerCamp from "../../assets/breveCamp.png";

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MessageSquare, CalendarRange } from 'lucide-react';

export default function GamePage() {
    const { gamesDatas = [], user } = useContext(Contextapi);
    const [phone, setPhone] = useState(null);

    useEffect(() => {
        if (user && user.nameTime && gamesDatas.length > 0) {
            const jogoDoUsuario = gamesDatas.find(game => game.nomeTime.trim() === user.nameTime.trim());

            if (jogoDoUsuario) {
                setPhone(user.phone);
            }
        }
    }, [gamesDatas, user]);

    return (
        <section className="relative min-h-screen w-full bg-[#050505] text-white pb-20">
            {/* Background Glows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 right-0 w-80 h-80 bg-[#EB8729]/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-[#EB8729]/5 rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 w-full max-w-4xl mx-auto px-4 pt-8">
                
                {/* Header */}
                <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-8">
                    <CalendarRange className="h-7 w-7 text-[#EB8729]" />
                    <h1 className="text-2xl font-bold tracking-wider uppercase" style={{ fontFamily: '"Inter", sans-serif' }}>
                        Jogos Disponíveis
                    </h1>
                </div>

                {/* Match Cards List */}
                <div className="space-y-8">
                    {gamesDatas && gamesDatas.length > 0 ? (
                        gamesDatas.map((game, index) => (
                            <Card key={index} className="border border-white/10 bg-white/[0.02] overflow-hidden group hover:border-[#EB8729]/30 transition-all duration-300">
                                <div className="relative">
                                    <CardGame
                                        endereco={game.bairro}
                                        data={game.data}
                                        horario={game.horario}
                                        nomeTime={game.nomeTime}
                                        rua={game.rua}
                                        numero={game.numeroEndereco}
                                        statusGame={game.status}
                                        cep={game.cep}
                                    />
                                    
                                    {/* Action Bar for Accepting Game */}
                                    <div className="flex items-center justify-center p-4 border-t border-white/5 bg-white/[0.02]">
                                        <Button
                                            onClick={() => window.open(
                                                `https://wa.me/5511995216604?text=🔥 Olá! Encontrei seu time no site *[Liga Fácil](https://ligafacil.vercel.app/)* e quero jogar. Vamos nessa?%0A%0A🏆 Time: ${game.nomeTime}%0A🕒 Horário: ${game.horario}%0A📍 Local: ${game.rua}, ${game.numeroEndereco} - ${game.bairro}, CEP: ${game.cep}`, 
                                                "_blank"
                                            )}
                                            className="w-full max-w-xs h-11 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-semibold shadow-md shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer rounded-lg"
                                            style={{ fontFamily: '"Inter", sans-serif' }}
                                        >
                                            <MessageSquare className="h-5 w-5" />
                                            <span>Desafiar no WhatsApp</span>
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        ))
                    ) : (
                        <div className="flex flex-col items-center justify-center p-12 rounded-xl border border-dashed border-white/10 bg-white/[0.01]">
                            <p className="text-sm text-white/35 text-center">Nenhum jogo disponível cadastrado no momento.</p>
                        </div>
                    )}
                </div>

                {/* Banner Section */}
                <div className="mt-14 flex justify-center w-full px-2 animate-[fadeInUp_0.8s_ease-out]">
                    <figure className="relative max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/80 border border-white/10 hover:border-[#EB8729]/30 transition-all duration-500 group">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none" />
                        <img 
                            src={bannerCamp} 
                            alt="Banner breve campeonato" 
                            className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
                        />
                    </figure>
                </div>

            </div>
        </section>
    );
}
