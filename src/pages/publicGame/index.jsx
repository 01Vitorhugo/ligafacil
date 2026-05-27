import { useState } from "react";
import { db, auth } from "../../database";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, CalendarPlus, Info } from 'lucide-react';

export default function PublicGame() {
    const [data, setData] = useState("");
    const [horario, setHorario] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const publicGame = async (e) => {
        if (e) e.preventDefault();

        if (!data || !horario) {
            toast.error("Preencha todos os campos!");
            return;
        }

        setLoading(true);

        try {
            const user = auth.currentUser;
            if (!user) {
                toast.error("Usuário não autenticado!");
                setLoading(false);
                return;
            }

            const userRef = doc(db, "users", user.uid);
            const userSnap = await getDoc(userRef);

            if (!userSnap.exists()) {
                toast.error("Dados do seu time não encontrados!");
                setLoading(false);
                return;
            }

            const userData = userSnap.data();

            const gameRef = doc(db, "games", user.uid);
            await setDoc(gameRef, {
                data: data,
                horario: horario,
                bairro: userData.bairroCep || "",
                status: "Disponível",
                nomeTime: userData.nameTime || "Time sem Nome",
                rua: userData.logradouroCep || "",
                numeroEndereco: userData.number || "",
                cep: userData.cep || ""
            });

            toast.success("Jogo publicado com sucesso!");
            navigate('/');
        } catch (error) {
            console.error("Erro ao publicar jogo:", error);
            toast.error("Erro ao publicar jogo!");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-y-auto py-10 bg-[#050505] text-white">
            
            {/* Background Glows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#EB8729]/10 rounded-full blur-[120px]" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#EB8729]/5 rounded-full blur-[150px]" />
            </div>

            {/* Subtle grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                }}
            />

            <div className="relative z-10 w-full max-w-md px-4 animate-[fadeInUp_0.6s_ease-out]">
                
                {/* Header bar with Back button */}
                <div className="flex items-center mb-6">
                    <Link 
                        to="/" 
                        className="group flex items-center gap-2 text-white/50 hover:text-[#EB8729] transition-all duration-300"
                        style={{ fontFamily: '"Inter", sans-serif' }}
                    >
                        <ArrowLeft className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm font-medium">Voltar para o Perfil</span>
                    </Link>
                </div>

                {/* Card with glassmorphism */}
                <Card className="border-0 ring-0 bg-white/[0.04] backdrop-blur-xl shadow-2xl shadow-black/50" style={{ '--tw-ring-opacity': 0 }}>
                    
                    <CardHeader className="pb-4">
                        <CardTitle
                            className="text-2xl font-bold tracking-tight flex items-center gap-2"
                            style={{
                                fontFamily: '"Inter", sans-serif',
                                background: 'linear-gradient(135deg, #EB8729, #f5a623, #EB8729)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                WebkitTextStroke: '0px',
                            }}
                        >
                            <CalendarPlus className="h-6 w-6 text-[#EB8729] stroke-[2.5]" style={{ filter: 'drop-shadow(0 0 1px #EB8729)' }} />
                            Publicar Jogo
                        </CardTitle>
                        <CardDescription className="text-white/50" style={{ fontFamily: '"Inter", sans-serif' }}>
                            Agende um novo amistoso para o seu time
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <form onSubmit={publicGame} className="space-y-6">
                            
                            <div className="space-y-4">
                                
                                {/* Date field */}
                                <div className="space-y-2">
                                    <Label htmlFor="game-date" className="text-white/70 text-xs uppercase tracking-wider" style={{ fontFamily: '"Inter", sans-serif' }}>
                                        Data do Jogo *
                                    </Label>
                                    <Input
                                        id="game-date"
                                        type="date"
                                        value={data}
                                        onChange={(e) => setData(e.target.value)}
                                        required
                                        className="h-11 bg-white/[0.06] border-white/10 text-white placeholder:text-white/25 focus-visible:border-[#EB8729]/50 focus-visible:ring-[#EB8729]/20 transition-all cursor-pointer"
                                        style={{ fontFamily: '"Inter", sans-serif' }}
                                    />
                                </div>

                                {/* Time field */}
                                <div className="space-y-2">
                                    <Label htmlFor="game-time" className="text-white/70 text-xs uppercase tracking-wider" style={{ fontFamily: '"Inter", sans-serif' }}>
                                        Horário do Jogo *
                                    </Label>
                                    <Input
                                        id="game-time"
                                        type="time"
                                        value={horario}
                                        onChange={(e) => setHorario(e.target.value)}
                                        required
                                        className="h-11 bg-white/[0.06] border-white/10 text-white placeholder:text-white/25 focus-visible:border-[#EB8729]/50 focus-visible:ring-[#EB8729]/20 transition-all cursor-pointer"
                                        style={{ fontFamily: '"Inter", sans-serif' }}
                                    />
                                </div>

                            </div>

                            {/* Informative block about location */}
                            <div className="flex gap-3 p-3 rounded-lg bg-[#EB8729]/5 border border-[#EB8729]/10 text-white/70">
                                <Info className="h-5 w-5 text-[#EB8729] shrink-0 mt-0.5" />
                                <p className="text-[11px] leading-relaxed" style={{ fontFamily: '"Inter", sans-serif' }}>
                                    A localização deste amistoso será preenchida automaticamente com o endereço cadastrado no perfil do seu time.
                                </p>
                            </div>

                            {/* Submit button */}
                            <Button
                                type="submit"
                                disabled={loading}
                                className="w-full h-12 mt-4 bg-gradient-to-r from-[#EB8729] to-[#d4781e] hover:from-[#f59832] hover:to-[#EB8729] text-white font-semibold text-base shadow-lg shadow-[#EB8729]/20 hover:shadow-[#EB8729]/40 transition-all duration-300 active:scale-[0.98] cursor-pointer"
                                style={{ fontFamily: '"Inter", sans-serif' }}
                            >
                                {loading ? (
                                    <div className="flex items-center justify-center gap-2">
                                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                        </svg>
                                        <span>Publicando...</span>
                                    </div>
                                ) : (
                                    "Publicar Jogo"
                                )}
                            </Button>

                        </form>
                    </CardContent>

                    <CardFooter className="justify-center border-t-0 bg-transparent pb-6 pt-2">
                        <p className="text-[10px] text-white/30 text-center" style={{ fontFamily: '"Inter", sans-serif' }}>
                            Liga Fácil Esportes © 2025
                        </p>
                    </CardFooter>

                </Card>
            </div>
            
            {/* Custom animations style */}
            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
}