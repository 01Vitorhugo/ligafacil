import trofeu from '../../assets/trofeu.png';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Trophy, CalendarCheck, ShieldAlert, Sparkles, Star, Award, Zap } from 'lucide-react';

export default function Championship() {
    return (
        <div className="relative min-h-screen w-full bg-[#050505] text-white pb-20">
            {/* Background Glows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#EB8729]/10 rounded-full blur-[150px] animate-pulse" />
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#EB8729]/5 rounded-full blur-[120px]" />
            </div>

            {/* Subtle grid pattern */}
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
                    <Trophy className="h-7 w-7 text-[#EB8729]" />
                    <h1 className="text-2xl font-bold tracking-wider uppercase" style={{ fontFamily: '"Inter", sans-serif' }}>
                        Campeonatos
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-6">
                    
                    {/* Left side: Animated Trophy Graphic */}
                    <div className="flex flex-col items-center justify-center text-center space-y-6">
                        <div className="relative">
                            {/* Gold Aura behind the trophy */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#EB8729]/30 to-amber-500/20 blur-3xl opacity-80 animate-pulse scale-110" />
                            
                            <figure className="relative z-10 p-6 flex justify-center items-center">
                                <img 
                                    src={trofeu} 
                                    alt="Troféu do Campeonato" 
                                    className="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-[0_0_50px_rgba(235,135,41,0.5)] animate-[float_4s_ease-in-out_infinite]"
                                />
                            </figure>

                            {/* Floating particles/stars effect */}
                            <Sparkles className="absolute top-4 left-8 text-[#EB8729] h-6 w-6 opacity-60 animate-bounce" />
                            <Star className="absolute bottom-10 right-6 text-amber-400 h-5 w-5 opacity-75 animate-pulse" />
                        </div>

                        <div className="space-y-2">
                            <span 
                                className="inline-block bg-[#EB8729]/20 text-[#EB8729] border border-[#EB8729]/30 px-3 py-1 rounded-full text-xs uppercase tracking-widest font-semibold" 
                                style={{ fontFamily: '"Inter", sans-serif' }}
                            >
                                Em Breve
                            </span>
                            <h2 className="text-3xl font-extrabold tracking-tight" style={{ fontFamily: '"Inter", sans-serif', WebkitTextStroke: '0px' }}>
                                A Grande Arena
                            </h2>
                            <p className="text-sm text-white/50 max-w-sm mx-auto" style={{ fontFamily: '"Inter", sans-serif' }}>
                                Prepare o seu time. O maior campeonato de futebol amador da região está sendo desenhado.
                            </p>
                        </div>
                    </div>

                    {/* Right side: Future Features Preview Card */}
                    <Card className="border-0 bg-white/[0.03] backdrop-blur-md relative overflow-hidden">
                        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#EB8729] to-[#f5a623]" />
                        
                        <CardHeader className="pb-4">
                            <CardTitle className="text-xl font-bold flex items-center gap-2" style={{ fontFamily: '"Inter", sans-serif' }}>
                                <Zap className="h-5 w-5 text-[#EB8729]" />
                                O que vem por aí?
                            </CardTitle>
                            <CardDescription className="text-white/40" style={{ fontFamily: '"Inter", sans-serif' }}>
                                Recursos exclusivos que estarão disponíveis para o seu clube:
                            </CardDescription>
                        </CardHeader>
                        
                        <CardContent className="space-y-4">
                            
                            <div className="flex gap-4 items-start">
                                <div className="p-2 rounded-md bg-[#EB8729]/10 text-[#EB8729] shrink-0 mt-0.5">
                                    <Award className="h-5 w-5" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-sm font-semibold text-white/90" style={{ fontFamily: '"Inter", sans-serif' }}>Premiações Exclusivas</h4>
                                    <p className="text-xs text-white/50" style={{ fontFamily: '"Inter", sans-serif' }}>Troféus, medalhas e prêmios para os melhores times da temporada.</p>
                                </div>
                            </div>

                            <Separator className="bg-white/5" />

                            <div className="flex gap-4 items-start">
                                <div className="p-2 rounded-md bg-[#EB8729]/10 text-[#EB8729] shrink-0 mt-0.5">
                                    <Trophy className="h-5 w-5" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-sm font-semibold text-white/90" style={{ fontFamily: '"Inter", sans-serif' }}>Tabela Dinâmica</h4>
                                    <p className="text-xs text-white/50" style={{ fontFamily: '"Inter", sans-serif' }}>Acompanhamento de pontuação, gols, vitórias e classificação em tempo real.</p>
                                </div>
                            </div>

                            <Separator className="bg-white/5" />

                            <div className="flex gap-4 items-start">
                                <div className="p-2 rounded-md bg-[#EB8729]/10 text-[#EB8729] shrink-0 mt-0.5">
                                    <CalendarCheck className="h-5 w-5" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-sm font-semibold text-white/90" style={{ fontFamily: '"Inter", sans-serif' }}>Calendário de Rodadas</h4>
                                    <p className="text-xs text-white/50" style={{ fontFamily: '"Inter", sans-serif' }}>Agendamento oficial automatizado com notificações para os times.</p>
                                </div>
                            </div>

                            <Separator className="bg-white/5" />

                            <div className="flex gap-4 items-start">
                                <div className="p-2 rounded-md bg-[#EB8729]/10 text-[#EB8729] shrink-0 mt-0.5">
                                    <ShieldAlert className="h-5 w-5" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-sm font-semibold text-white/90" style={{ fontFamily: '"Inter", sans-serif' }}>Regulamento Oficial</h4>
                                    <p className="text-xs text-white/50" style={{ fontFamily: '"Inter", sans-serif' }}>Garantia de fair play, arbitragem qualificada e suporte de ponta.</p>
                                </div>
                            </div>

                        </CardContent>
                    </Card>

                </div>

            </div>

            {/* Custom animations style */}
            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-10px) rotate(2deg); }
                }
            `}</style>
        </div>
    );
}