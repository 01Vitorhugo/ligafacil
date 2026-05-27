import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Contextapi } from "../../contexApi";
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
import { UserPen, ArrowLeft, ShieldAlert } from 'lucide-react';

export default function EditProfile() {
    const { user } = useContext(Contextapi);
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [nameTime, setNameTime] = useState("");
    const [nameOwner, setNameOwner] = useState("");
    const [phone, setPhone] = useState("");
    const [cep, setCep] = useState("");
    const [number, setNumber] = useState("");
    const [uf, setUf] = useState("");
    const [localidade, setLocalidade] = useState("");
    const [bairro, setBairro] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [loading, setLoading] = useState(false);

    // Initial load: fill fields once when user context is available
    useEffect(() => {
        if (user) {
            setCep(user.cep || "");
            setNumber(user.number || "");
            setUf(user.ufCep || "");
            setLocalidade(user.locationCep || "");
            setBairro(user.bairroCep || "");
            setLogradouro(user.logradouroCep || "");
            setNameOwner(user.nameOwner || "");
            setNameTime(user.nameTime || "");
            setEmail(user.email || "");
            setPhone(user.phone || "");
        }
    }, [user]); // FIXED: Added dependency array to prevent resetting values on every keystroke

    // Address fetching effect when CEP is updated
    useEffect(() => {
        const cleanCep = cep.replace(/\D/g, "");
        if (cleanCep.length === 8) {
            buscarEndereco(cleanCep);
        }
    }, [cep]);

    async function buscarEndereco(cleanCep) {
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
            const data = await response.json();

            if (data.erro) {
                toast.error("CEP não encontrado!");
                setBairro("");
                setLocalidade("");
                setUf("");
                setLogradouro("");
            } else {
                setBairro(data.bairro || "");
                setLocalidade(data.localidade || "");
                setUf(data.uf || "");
                setLogradouro(data.logradouro || "");
            }
        } catch (error) {
            console.error("Erro ao buscar CEP:", error);
        }
    }

    function handleSave(e) {
        e.preventDefault();
        toast.info("A funcionalidade de edição de perfil está em fase de testes!");
    }

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-y-auto py-10 bg-[#050505] text-white">
            
            {/* Background Glows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#EB8729]/10 rounded-full blur-[120px]" />
                <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#EB8729]/5 rounded-full blur-[150px]" />
            </div>

            {/* Subtle grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                }}
            />

            <div className="relative z-10 w-full max-w-2xl px-4 animate-[fadeInUp_0.6s_ease-out]">
                
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
                            <UserPen className="h-6 w-6 text-[#EB8729] stroke-[2.5]" style={{ filter: 'drop-shadow(0 0 1px #EB8729)' }} />
                            Editar Perfil
                        </CardTitle>
                        <CardDescription className="text-white/50" style={{ fontFamily: '"Inter", sans-serif' }}>
                            Mantenha os dados do seu clube sempre atualizados
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <form onSubmit={handleSave} className="space-y-6">
                            
                            {/* Section: Access info */}
                            <div className="space-y-4">
                                <h3 className="text-sm font-semibold text-[#EB8729] uppercase tracking-wider" style={{ fontFamily: '"Inter", sans-serif' }}>
                                    Acesso
                                </h3>
                                <Separator className="bg-white/10" />

                                <div className="space-y-2">
                                    <Label htmlFor="edit-email" className="text-white/70 text-xs uppercase tracking-wider" style={{ fontFamily: '"Inter", sans-serif' }}>
                                        Email
                                    </Label>
                                    <Input
                                        id="edit-email"
                                        type="email"
                                        placeholder="seu@email.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="h-11 bg-white/[0.06] border-white/10 text-white placeholder:text-white/25 focus-visible:border-[#EB8729]/50 focus-visible:ring-[#EB8729]/20 transition-all"
                                        style={{ fontFamily: '"Inter", sans-serif' }}
                                    />
                                </div>
                            </div>

                            {/* Section: Club info */}
                            <div className="space-y-4 pt-2">
                                <h3 className="text-sm font-semibold text-[#EB8729] uppercase tracking-wider" style={{ fontFamily: '"Inter", sans-serif' }}>
                                    Dados do Time
                                </h3>
                                <Separator className="bg-white/10" />

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="space-y-2 md:col-span-2">
                                        <Label htmlFor="edit-nametime" className="text-white/70 text-xs uppercase tracking-wider" style={{ fontFamily: '"Inter", sans-serif' }}>
                                            Nome do Time
                                        </Label>
                                        <Input
                                            id="edit-nametime"
                                            type="text"
                                            placeholder="Nome do Time"
                                            value={nameTime}
                                            onChange={(e) => setNameTime(e.target.value)}
                                            className="h-11 bg-white/[0.06] border-white/10 text-white placeholder:text-white/25 focus-visible:border-[#EB8729]/50 focus-visible:ring-[#EB8729]/20 transition-all"
                                            style={{ fontFamily: '"Inter", sans-serif' }}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="edit-phone" className="text-white/70 text-xs uppercase tracking-wider" style={{ fontFamily: '"Inter", sans-serif' }}>
                                            Telefone
                                        </Label>
                                        <Input
                                            id="edit-phone"
                                            type="text"
                                            placeholder="(00) 00000-0000"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            className="h-11 bg-white/[0.06] border-white/10 text-white placeholder:text-white/25 focus-visible:border-[#EB8729]/50 focus-visible:ring-[#EB8729]/20 transition-all"
                                            style={{ fontFamily: '"Inter", sans-serif' }}
                                        />
                                    </div>

                                    <div className="space-y-2 md:col-span-3">
                                        <Label htmlFor="edit-owner" className="text-white/70 text-xs uppercase tracking-wider" style={{ fontFamily: '"Inter", sans-serif' }}>
                                            Nome do Responsável
                                        </Label>
                                        <Input
                                            id="edit-owner"
                                            type="text"
                                            placeholder="Nome do responsável"
                                            value={nameOwner}
                                            onChange={(e) => setNameOwner(e.target.value)}
                                            className="h-11 bg-white/[0.06] border-white/10 text-white placeholder:text-white/25 focus-visible:border-[#EB8729]/50 focus-visible:ring-[#EB8729]/20 transition-all"
                                            style={{ fontFamily: '"Inter", sans-serif' }}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Section: Location */}
                            <div className="space-y-4 pt-2">
                                <h3 className="text-sm font-semibold text-[#EB8729] uppercase tracking-wider" style={{ fontFamily: '"Inter", sans-serif' }}>
                                    Localização
                                </h3>
                                <Separator className="bg-white/10" />

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <div className="space-y-2 col-span-1">
                                        <Label htmlFor="edit-cep" className="text-white/70 text-xs uppercase tracking-wider" style={{ fontFamily: '"Inter", sans-serif' }}>
                                            CEP
                                        </Label>
                                        <Input
                                            id="edit-cep"
                                            type="text"
                                            placeholder="00000-000"
                                            value={cep}
                                            onChange={(e) => setCep(e.target.value)}
                                            className="h-11 bg-white/[0.06] border-white/10 text-white placeholder:text-white/25 focus-visible:border-[#EB8729]/50 focus-visible:ring-[#EB8729]/20 transition-all"
                                            style={{ fontFamily: '"Inter", sans-serif' }}
                                        />
                                    </div>

                                    <div className="space-y-2 col-span-1">
                                        <Label htmlFor="edit-number" className="text-white/70 text-xs uppercase tracking-wider" style={{ fontFamily: '"Inter", sans-serif' }}>
                                            Número
                                        </Label>
                                        <Input
                                            id="edit-number"
                                            type="text"
                                            placeholder="Número"
                                            value={number}
                                            onChange={(e) => setNumber(e.target.value)}
                                            className="h-11 bg-white/[0.06] border-white/10 text-white placeholder:text-white/25 focus-visible:border-[#EB8729]/50 focus-visible:ring-[#EB8729]/20 transition-all"
                                            style={{ fontFamily: '"Inter", sans-serif' }}
                                        />
                                    </div>

                                    <div className="space-y-2 col-span-2 md:col-span-2">
                                        <Label htmlFor="edit-logradouro" className="text-white/70 text-xs uppercase tracking-wider" style={{ fontFamily: '"Inter", sans-serif' }}>
                                            Logradouro
                                        </Label>
                                        <Input
                                            id="edit-logradouro"
                                            type="text"
                                            placeholder="Rua / Avenida"
                                            value={logradouro}
                                            readOnly
                                            className="h-11 bg-white/[0.03] border-white/5 text-white/60 focus-visible:ring-0 cursor-not-allowed select-none"
                                            style={{ fontFamily: '"Inter", sans-serif' }}
                                        />
                                    </div>

                                    <div className="space-y-2 col-span-2 md:col-span-2">
                                        <Label htmlFor="edit-bairro" className="text-white/70 text-xs uppercase tracking-wider" style={{ fontFamily: '"Inter", sans-serif' }}>
                                            Bairro
                                        </Label>
                                        <Input
                                            id="edit-bairro"
                                            type="text"
                                            placeholder="Bairro"
                                            value={bairro}
                                            readOnly
                                            className="h-11 bg-white/[0.03] border-white/5 text-white/60 focus-visible:ring-0 cursor-not-allowed select-none"
                                            style={{ fontFamily: '"Inter", sans-serif' }}
                                        />
                                    </div>

                                    <div className="space-y-2 col-span-1 md:col-span-1">
                                        <Label htmlFor="edit-localidade" className="text-white/70 text-xs uppercase tracking-wider" style={{ fontFamily: '"Inter", sans-serif' }}>
                                            Localidade
                                        </Label>
                                        <Input
                                            id="edit-localidade"
                                            type="text"
                                            placeholder="Cidade"
                                            value={localidade}
                                            readOnly
                                            className="h-11 bg-white/[0.03] border-white/5 text-white/60 focus-visible:ring-0 cursor-not-allowed select-none"
                                            style={{ fontFamily: '"Inter", sans-serif' }}
                                        />
                                    </div>

                                    <div className="space-y-2 col-span-1 md:col-span-1">
                                        <Label htmlFor="edit-uf" className="text-white/70 text-xs uppercase tracking-wider" style={{ fontFamily: '"Inter", sans-serif' }}>
                                            UF
                                        </Label>
                                        <Input
                                            id="edit-uf"
                                            type="text"
                                            placeholder="Estado"
                                            value={uf}
                                            readOnly
                                            className="h-11 bg-white/[0.03] border-white/5 text-white/60 focus-visible:ring-0 cursor-not-allowed select-none"
                                            style={{ fontFamily: '"Inter", sans-serif' }}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Submit button */}
                            <Button
                                type="submit"
                                disabled={loading}
                                className="w-full h-12 mt-4 bg-gradient-to-r from-[#EB8729] to-[#d4781e] hover:from-[#f59832] hover:to-[#EB8729] text-white font-semibold text-base shadow-lg shadow-[#EB8729]/20 hover:shadow-[#EB8729]/40 transition-all duration-300 active:scale-[0.98] cursor-pointer"
                                style={{ fontFamily: '"Inter", sans-serif' }}
                            >
                                Salvar Alterações
                            </Button>

                        </form>
                    </CardContent>

                    <CardFooter className="justify-center border-t-0 bg-transparent pb-6 pt-2 text-[10px] text-white/30 flex items-center gap-1.5" style={{ fontFamily: '"Inter", sans-serif' }}>
                        <ShieldAlert className="h-3.5 w-3.5" />
                        <span>Sua conta está sob protocolo de proteção de dados.</span>
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