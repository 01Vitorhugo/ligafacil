import logo from '../../assets/logo_site.png';
import { Card, CardContent } from '@/components/ui/card';
import { Info, Target, Users, Heart } from 'lucide-react';

export default function About() {
    return (
        <div className="relative min-h-screen w-full bg-[#050505] text-white pb-20">
            {/* Background Glows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 right-0 w-80 h-80 bg-[#EB8729]/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-[#EB8729]/5 rounded-full blur-[150px]" />
            </div>

            {/* Grid Pattern */}
            <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                }}
            />

            <div className="relative z-10 w-full max-w-4xl mx-auto px-4 pt-8">
                
                {/* Header */}
                <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-8">
                    <Info className="h-7 w-7 text-[#EB8729]" />
                    <h1 className="text-2xl font-bold tracking-wider uppercase" style={{ fontFamily: '"Inter", sans-serif' }}>
                        Sobre Nós
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    
                    {/* Text / Info Section */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-extrabold text-white leading-tight" style={{ fontFamily: '"Inter", sans-serif', WebkitTextStroke: '0px' }}>
                                Conectando a paixão pelo futebol amador
                            </h2>
                            <p className="text-sm text-white/70 leading-relaxed" style={{ fontFamily: '"Inter", sans-serif' }}>
                                Somos uma plataforma criada para facilitar a conexão entre times de futebol amador que buscam marcar amistosos com praticidade e agilidade. Nosso objetivo é unir equipes, promover o espírito esportivo e simplificar o agendamento de jogos, eliminando as dificuldades de comunicação e organização.
                            </p>
                            <p className="text-sm text-white/70 leading-relaxed" style={{ fontFamily: '"Inter", sans-serif' }}>
                                Aqui, você encontra outros times disponíveis, combina partidas com poucos cliques e fortalece o vínculo entre atletas apaixonados pelo jogo. Acreditamos que o futebol vai muito além das quatro linhas — é sobre comunidade, amizade e competição saudável.
                            </p>
                        </div>

                        {/* Pillars Cards Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                            
                            <Card className="border-0 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                                <CardContent className="p-4 flex flex-col items-center text-center space-y-2">
                                    <div className="p-2 rounded-md bg-[#EB8729]/10 text-[#EB8729]">
                                        <Users className="h-5 w-5" />
                                    </div>
                                    <h3 className="text-xs font-bold text-white uppercase tracking-wider" style={{ fontFamily: '"Inter", sans-serif' }}>União</h3>
                                    <p className="text-[10px] text-white/40" style={{ fontFamily: '"Inter", sans-serif' }}>Conectando equipes de todas as regiões.</p>
                                </CardContent>
                            </Card>

                            <Card className="border-0 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                                <CardContent className="p-4 flex flex-col items-center text-center space-y-2">
                                    <div className="p-2 rounded-md bg-[#EB8729]/10 text-[#EB8729]">
                                        <Target className="h-5 w-5" />
                                    </div>
                                    <h3 className="text-xs font-bold text-white uppercase tracking-wider" style={{ fontFamily: '"Inter", sans-serif' }}>Praticidade</h3>
                                    <p className="text-[10px] text-white/40" style={{ fontFamily: '"Inter", sans-serif' }}>Agende seus amistosos em segundos.</p>
                                </CardContent>
                            </Card>

                            <Card className="border-0 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                                <CardContent className="p-4 flex flex-col items-center text-center space-y-2">
                                    <div className="p-2 rounded-md bg-[#EB8729]/10 text-[#EB8729]">
                                        <Heart className="h-5 w-5" />
                                    </div>
                                    <h3 className="text-xs font-bold text-white uppercase tracking-wider" style={{ fontFamily: '"Inter", sans-serif' }}>Paixão</h3>
                                    <p className="text-[10px] text-white/40" style={{ fontFamily: '"Inter", sans-serif' }}>Fomentando o futebol raiz com respeito.</p>
                                </CardContent>
                            </Card>

                        </div>
                    </div>

                    {/* Logo / Image Section */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="relative">
                            {/* Glow aura around logo */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#EB8729]/20 to-amber-500/10 blur-3xl opacity-70 scale-110" />
                            
                            <figure className="relative z-10 bg-white/[0.02] border border-white/10 rounded-2xl p-8 shadow-2xl shadow-black/60 backdrop-blur-md">
                                <img 
                                    src={logo} 
                                    alt="Liga Fácil Logo" 
                                    className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-[0_0_30px_rgba(235,135,41,0.2)] hover:scale-105 transition-transform duration-500"
                                />
                            </figure>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}