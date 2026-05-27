import img from '../../assets/default.png';
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from '../../database';
import { useEffect, useState, useContext } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Contextapi } from "../../contexApi";
import CardGame from '../../components/cardgame';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { 
    User, 
    MapPin, 
    Trash2, 
    PlusCircle, 
    UserPen, 
    Trophy,
    Calendar,
    Clock
} from 'lucide-react';

export default function Profile() {
    const [infoUser, setInfoUser] = useState(null);
    const [gameDelete, setGameDelete] = useState(null);
    const [loadingDelete, setLoadingDelete] = useState(false);
    const auth = getAuth();

    const { gamesDatas = [] } = useContext(Contextapi);

    const gameUser = (gamesDatas && infoUser)
        ? gamesDatas.filter(game => infoUser && game.nomeTime === infoUser.nameTime)
        : [];

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user && !infoUser) {
                fetchUserData(user.uid);
                setGameDelete(user.uid);
            }
        });

        return () => unsubscribe();
    }, [infoUser]);

    async function fetchUserData(uid) {
        try {
            const userRef = doc(db, "users", uid);
            const snapshot = await getDoc(userRef);

            if (snapshot.exists()) {
                setInfoUser(snapshot.data());
            } else {
                console.error("Usuário não encontrado no Firestore");
            }
        } catch (error) {
            console.error("Erro ao buscar dados do usuário:", error);
        }
    }

    async function deleteGame() {
        if (!gameDelete) {
            toast.error("ID do jogo não encontrado!");
            return;
        }

        setLoadingDelete(true);
        try {
            const gameRef = doc(db, "games", gameDelete);
            await deleteDoc(gameRef);
            toast.success("Jogo excluído com sucesso!");
            
            // Reload window to refresh state or wait for ContextApi to sync
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } catch (error) {
            toast.error("Erro ao excluir jogo!");
        } finally {
            setLoadingDelete(false);
        }
    }

    return (
        <div className="relative min-h-screen w-full bg-[#050505] text-white pb-20">
            {/* Background Glows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#EB8729]/10 rounded-full blur-[120px]" />
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#EB8729]/5 rounded-full blur-[150px]" />
            </div>

            {/* Header / Title */}
            <div className="relative z-10 w-full max-w-4xl mx-auto px-4 pt-8">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-8">
                    <Trophy className="h-7 w-7 text-[#EB8729]" />
                    <h1 className="text-2xl font-bold tracking-wider uppercase" style={{ fontFamily: '"Inter", sans-serif' }}>
                        Meu Perfil
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Left Column: Shield and Team Badge */}
                    <div className="lg:col-span-1 flex flex-col items-center gap-6">
                        <Card className="w-full border-0 bg-white/[0.03] backdrop-blur-md py-8 flex flex-col items-center justify-center relative overflow-hidden">
                            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#EB8729] to-[#f5a623]" />
                            
                            <figure className="relative w-40 h-40 rounded-full bg-black/40 border border-white/10 p-4 flex items-center justify-center group shadow-xl shadow-black/40">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#EB8729]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <img 
                                    src={img} 
                                    alt="Escudo do time" 
                                    className="w-28 h-28 object-contain drop-shadow-[0_0_15px_rgba(235,135,41,0.2)] transition-transform duration-500 group-hover:scale-105" 
                                />
                            </figure>

                            <div className="mt-6 text-center px-4">
                                <h2 className="text-xl font-bold tracking-tight text-white mb-1" style={{ fontFamily: '"Inter", sans-serif', WebkitTextStroke: '0px' }}>
                                    {infoUser ? infoUser.nameTime : "Carregando..."}
                                </h2>
                                <p className="text-xs text-white/40 uppercase tracking-widest" style={{ fontFamily: '"Inter", sans-serif' }}>
                                    Clube Registrado
                                </p>
                            </div>
                        </Card>

                        {/* Control buttons */}
                        <div className="w-full flex flex-col gap-3">
                            <Button 
                                asChild
                                variant="outline"
                                className="w-full h-11 border-white/10 bg-white/[0.02] hover:bg-white/[0.06] text-white hover:text-white font-medium transition-all duration-300 cursor-pointer"
                                style={{ fontFamily: '"Inter", sans-serif' }}
                            >
                                <Link to="/editprofile" className="flex items-center justify-center gap-2">
                                    <UserPen className="h-4 w-4 text-[#EB8729]" />
                                    Editar Perfil
                                </Link>
                            </Button>

                            <Button 
                                asChild
                                className="w-full h-11 bg-gradient-to-r from-[#EB8729] to-[#d4781e] hover:from-[#f59832] hover:to-[#EB8729] text-white font-semibold transition-all duration-300 shadow-md shadow-[#EB8729]/10 cursor-pointer"
                                style={{ fontFamily: '"Inter", sans-serif' }}
                            >
                                <Link to="/publicgame" className="flex items-center justify-center gap-2">
                                    <PlusCircle className="h-4 w-4" />
                                    Publicar Jogo
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Right Column: Detailed Info & Games */}
                    <div className="lg:col-span-2 space-y-8">
                        
                        {/* Club Details Card */}
                        <Card className="border-0 bg-white/[0.03] backdrop-blur-md">
                            <CardHeader className="pb-3">
                                <CardTitle className="text-lg font-bold text-white" style={{ fontFamily: '"Inter", sans-serif' }}>
                                    Informações do Clube
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                
                                <div className="flex items-start gap-4 p-3 rounded-lg bg-white/[0.02] border border-white/5">
                                    <div className="p-2 rounded-md bg-[#EB8729]/10 text-[#EB8729] shrink-0 mt-0.5">
                                        <User className="h-5 w-5" />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-xs text-white/40 uppercase tracking-wider" style={{ fontFamily: '"Inter", sans-serif' }}>Presidente / Responsável</p>
                                        <p className="text-sm font-medium text-white/90">
                                            {infoUser ? infoUser.nameOwner : "Carregando..."}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-3 rounded-lg bg-white/[0.02] border border-white/5">
                                    <div className="p-2 rounded-md bg-[#EB8729]/10 text-[#EB8729] shrink-0 mt-0.5">
                                        <MapPin className="h-5 w-5" />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-xs text-white/40 uppercase tracking-wider" style={{ fontFamily: '"Inter", sans-serif' }}>Sede do Clube / Endereço</p>
                                        <p className="text-sm font-medium text-white/90">
                                            {infoUser ? (
                                                <>
                                                    {infoUser.logradouroCep}, {infoUser.number} <br />
                                                    <span className="text-xs text-white/50">
                                                        {infoUser.bairroCep}, {infoUser.locationCep} - {infoUser.ufCep} (CEP: {infoUser.cep})
                                                    </span>
                                                </>
                                            ) : (
                                                "Carregando..."
                                            )}
                                        </p>
                                    </div>
                                </div>

                            </CardContent>
                        </Card>

                        {/* User Games Section */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold text-white flex items-center gap-2" style={{ fontFamily: '"Inter", sans-serif' }}>
                                <span>Meus Jogos Publicados</span>
                                <span className="text-xs bg-[#EB8729]/20 text-[#EB8729] px-2 py-0.5 rounded-full font-semibold">
                                    {gameUser.length}
                                </span>
                            </h3>

                            <div className="space-y-6">
                                {gameUser && gameUser.length > 0 ? (
                                    gameUser.map((game, index) => (
                                        <Card key={index} className="border border-white/10 bg-white/[0.02] overflow-hidden group hover:border-[#EB8729]/30 transition-all duration-300">
                                            <div className="relative">
                                                {/* Re-use CardGame content layout but styled nicer locally */}
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
                                                
                                                {/* Action Bar for Game Card */}
                                                <div className="flex items-center justify-end p-4 border-t border-white/5 bg-white/[0.02] gap-3">
                                                    <Button 
                                                        variant="destructive"
                                                        size="sm"
                                                        disabled={loadingDelete}
                                                        onClick={deleteGame}
                                                        className="h-9 gap-1.5 hover:bg-red-600 transition-colors shadow-sm cursor-pointer"
                                                        style={{ fontFamily: '"Inter", sans-serif' }}
                                                    >
                                                        <Trash2 className="h-4 w-4" />
                                                        {loadingDelete ? "Excluindo..." : "Excluir Jogo"}
                                                    </Button>
                                                </div>
                                            </div>
                                        </Card>
                                    ))
                                ) : (
                                    <div className="flex flex-col items-center justify-center p-8 rounded-xl border border-dashed border-white/10 bg-white/[0.01]">
                                        <p className="text-sm text-white/35 text-center">Nenhum jogo ativo publicado por você.</p>
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}
