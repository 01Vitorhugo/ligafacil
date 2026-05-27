import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo_site.png";
import { db, auth } from "../../database";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

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

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    // Effect to fetch address details when CEP reaches 8 digits
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

    async function userRegister(e) {
        e.preventDefault();

        if (!email || !password || !nameTime || !nameOwner || !phone || !cep || !number) {
            toast.error("Por favor, preencha todos os campos obrigatórios!");
            return;
        }

        setLoading(true);

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await setDoc(doc(db, "users", user.uid), {
                email: email,
                nameTime: nameTime,
                nameOwner: nameOwner,
                phone: phone,
                cep: cep,
                number: number,
                bairroCep: bairro,
                locationCep: localidade,
                logradouroCep: logradouro,
                ufCep: uf
            });

            toast.success("Usuário cadastrado com sucesso!");
            navigate("/");
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                toast.error("Email já cadastrado!");
            } else if (error.code === "auth/weak-password") {
                toast.error("Senha muito fraca!");
            } else {
                toast.error("Erro ao cadastrar!");
            }

            setCep("");
            setNumber("");
            setEmail("");
            setPassword("");
            setNameTime("");
            setNameOwner("");
            setPhone("");
            setBairro("");
            setLocalidade("");
            setUf("");
            setLogradouro("");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-y-auto py-10 bg-[#050505]">
            
            {/* Animated background glow effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#EB8729]/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#EB8729]/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#EB8729]/5 rounded-full blur-[200px]" />
            </div>

            {/* Subtle grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Main register card */}
            <div className="relative z-10 w-full max-w-2xl px-4 animate-[fadeInUp_0.6s_ease-out]">
                
                {/* Header bar with Back button & Logo */}
                <div className="flex justify-between items-center mb-6">
                    <Link 
                        to="/login" 
                        className="group flex items-center gap-2 text-white/50 hover:text-[#EB8729] transition-all duration-300"
                        style={{ fontFamily: '"Inter", sans-serif' }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:-translate-x-1 transition-transform">
                            <line x1="19" y1="12" x2="5" y2="12" />
                            <polyline points="12 19 5 12 12 5" />
                        </svg>
                        <span className="text-sm font-medium">Voltar para o Login</span>
                    </Link>

                    <img
                        src={logo}
                        alt="Liga Fácil"
                        className="w-16 h-16 object-contain drop-shadow-[0_0_15px_rgba(235,135,41,0.2)]"
                    />
                </div>

                {/* Card with glassmorphism */}
                <Card className="border-0 ring-0 bg-white/[0.04] backdrop-blur-xl shadow-2xl shadow-black/50" style={{ '--tw-ring-opacity': 0 }}>
                    
                    <CardHeader className="pb-4">
                        <CardTitle
                            className="text-3xl font-bold tracking-tight text-center"
                            style={{
                                fontFamily: '"Inter", sans-serif',
                                background: 'linear-gradient(135deg, #EB8729, #f5a623, #EB8729)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                WebkitTextStroke: '0px',
                            }}
                        >
                            Cadastro de Conta
                        </CardTitle>
                        <CardDescription className="text-white/50 text-center" style={{ fontFamily: '"Inter", sans-serif' }}>
                            Crie sua conta para começar a gerenciar sua liga
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <form onSubmit={userRegister} className="space-y-6">
                            
                            {/* Section: Credentials */}
                            <div className="space-y-4">
                                <h3 className="text-sm font-semibold text-[#EB8729] uppercase tracking-wider" style={{ fontFamily: '"Inter", sans-serif' }}>
                                    Acesso
                                </h3>
                                <Separator className="bg-white/10" />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="reg-email" className="text-white/70 text-xs uppercase tracking-wider" style={{ fontFamily: '"Inter", sans-serif' }}>
                                            Email *
                                        </Label>
                                        <Input
                                            id="reg-email"
                                            type="email"
                                            placeholder="seu@email.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            className="h-11 bg-white/[0.06] border-white/10 text-white placeholder:text-white/25 focus-visible:border-[#EB8729]/50 focus-visible:ring-[#EB8729]/20 transition-all"
                                            style={{ fontFamily: '"Inter", sans-serif' }}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="reg-pass" className="text-white/70 text-xs uppercase tracking-wider" style={{ fontFamily: '"Inter", sans-serif' }}>
                                            Senha *
                                        </Label>
                                        <div className="relative">
                                            <Input
                                                id="reg-pass"
                                                type={showPassword ? "text" : "password"}
                                                placeholder="••••••••"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                                className="h-11 bg-white/[0.06] border-white/10 text-white placeholder:text-white/25 focus-visible:border-[#EB8729]/50 focus-visible:ring-[#EB8729]/20 transition-all pr-10"
                                                style={{ fontFamily: '"Inter", sans-serif' }}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-[#EB8729] transition-colors cursor-pointer"
                                            >
                                                {showPassword ? (
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                                                        <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                                                        <line x1="1" y1="1" x2="23" y2="23" />
                                                    </svg>
                                                ) : (
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                        <circle cx="12" cy="12" r="3" />
                                                    </svg>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Section: Club info */}
                            <div className="space-y-4 pt-2">
                                <h3 className="text-sm font-semibold text-[#EB8729] uppercase tracking-wider" style={{ fontFamily: '"Inter", sans-serif' }}>
                                    Informações do Time
                                </h3>
                                <Separator className="bg-white/10" />

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="space-y-2 md:col-span-2">
                                        <Label htmlFor="reg-nametime" className="text-white/70 text-xs uppercase tracking-wider" style={{ fontFamily: '"Inter", sans-serif' }}>
                                            Nome do Time *
                                        </Label>
                                        <Input
                                            id="reg-nametime"
                                            type="text"
                                            placeholder="Ex: Real Madrid F.C."
                                            value={nameTime}
                                            onChange={(e) => setNameTime(e.target.value)}
                                            required
                                            className="h-11 bg-white/[0.06] border-white/10 text-white placeholder:text-white/25 focus-visible:border-[#EB8729]/50 focus-visible:ring-[#EB8729]/20 transition-all"
                                            style={{ fontFamily: '"Inter", sans-serif' }}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="reg-phone" className="text-white/70 text-xs uppercase tracking-wider" style={{ fontFamily: '"Inter", sans-serif' }}>
                                            Telefone *
                                        </Label>
                                        <Input
                                            id="reg-phone"
                                            type="text"
                                            placeholder="(00) 00000-0000"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            required
                                            className="h-11 bg-white/[0.06] border-white/10 text-white placeholder:text-white/25 focus-visible:border-[#EB8729]/50 focus-visible:ring-[#EB8729]/20 transition-all"
                                            style={{ fontFamily: '"Inter", sans-serif' }}
                                        />
                                    </div>

                                    <div className="space-y-2 md:col-span-3">
                                        <Label htmlFor="reg-owner" className="text-white/70 text-xs uppercase tracking-wider" style={{ fontFamily: '"Inter", sans-serif' }}>
                                            Nome do Responsável *
                                        </Label>
                                        <Input
                                            id="reg-owner"
                                            type="text"
                                            placeholder="Ex: João Silva"
                                            value={nameOwner}
                                            onChange={(e) => setNameOwner(e.target.value)}
                                            required
                                            className="h-11 bg-white/[0.06] border-white/10 text-white placeholder:text-white/25 focus-visible:border-[#EB8729]/50 focus-visible:ring-[#EB8729]/20 transition-all"
                                            style={{ fontFamily: '"Inter", sans-serif' }}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Section: Address */}
                            <div className="space-y-4 pt-2">
                                <h3 className="text-sm font-semibold text-[#EB8729] uppercase tracking-wider" style={{ fontFamily: '"Inter", sans-serif' }}>
                                    Localização / Endereço
                                </h3>
                                <Separator className="bg-white/10" />

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <div className="space-y-2 col-span-1">
                                        <Label htmlFor="reg-cep" className="text-white/70 text-xs uppercase tracking-wider" style={{ fontFamily: '"Inter", sans-serif' }}>
                                            CEP *
                                        </Label>
                                        <Input
                                            id="reg-cep"
                                            type="text"
                                            placeholder="00000-000"
                                            value={cep}
                                            onChange={(e) => setCep(e.target.value)}
                                            required
                                            className="h-11 bg-white/[0.06] border-white/10 text-white placeholder:text-white/25 focus-visible:border-[#EB8729]/50 focus-visible:ring-[#EB8729]/20 transition-all"
                                            style={{ fontFamily: '"Inter", sans-serif' }}
                                        />
                                    </div>

                                    <div className="space-y-2 col-span-1">
                                        <Label htmlFor="reg-number" className="text-white/70 text-xs uppercase tracking-wider" style={{ fontFamily: '"Inter", sans-serif' }}>
                                            Número *
                                        </Label>
                                        <Input
                                            id="reg-number"
                                            type="text"
                                            placeholder="Ex: 123"
                                            value={number}
                                            onChange={(e) => setNumber(e.target.value)}
                                            required
                                            className="h-11 bg-white/[0.06] border-white/10 text-white placeholder:text-white/25 focus-visible:border-[#EB8729]/50 focus-visible:ring-[#EB8729]/20 transition-all"
                                            style={{ fontFamily: '"Inter", sans-serif' }}
                                        />
                                    </div>

                                    <div className="space-y-2 col-span-2 md:col-span-2">
                                        <Label htmlFor="reg-logradouro" className="text-white/70 text-xs uppercase tracking-wider" style={{ fontFamily: '"Inter", sans-serif' }}>
                                            Logradouro
                                        </Label>
                                        <Input
                                            id="reg-logradouro"
                                            type="text"
                                            placeholder="Rua / Avenida (Auto)"
                                            value={logradouro}
                                            readOnly
                                            className="h-11 bg-white/[0.03] border-white/5 text-white/60 focus-visible:ring-0 cursor-not-allowed select-none"
                                            style={{ fontFamily: '"Inter", sans-serif' }}
                                        />
                                    </div>

                                    <div className="space-y-2 col-span-2 md:col-span-2">
                                        <Label htmlFor="reg-bairro" className="text-white/70 text-xs uppercase tracking-wider" style={{ fontFamily: '"Inter", sans-serif' }}>
                                            Bairro
                                        </Label>
                                        <Input
                                            id="reg-bairro"
                                            type="text"
                                            placeholder="Bairro (Auto)"
                                            value={bairro}
                                            readOnly
                                            className="h-11 bg-white/[0.03] border-white/5 text-white/60 focus-visible:ring-0 cursor-not-allowed select-none"
                                            style={{ fontFamily: '"Inter", sans-serif' }}
                                        />
                                    </div>

                                    <div className="space-y-2 col-span-1 md:col-span-1">
                                        <Label htmlFor="reg-localidade" className="text-white/70 text-xs uppercase tracking-wider" style={{ fontFamily: '"Inter", sans-serif' }}>
                                            Localidade
                                        </Label>
                                        <Input
                                            id="reg-localidade"
                                            type="text"
                                            placeholder="Cidade (Auto)"
                                            value={localidade}
                                            readOnly
                                            className="h-11 bg-white/[0.03] border-white/5 text-white/60 focus-visible:ring-0 cursor-not-allowed select-none"
                                            style={{ fontFamily: '"Inter", sans-serif' }}
                                        />
                                    </div>

                                    <div className="space-y-2 col-span-1 md:col-span-1">
                                        <Label htmlFor="reg-uf" className="text-white/70 text-xs uppercase tracking-wider" style={{ fontFamily: '"Inter", sans-serif' }}>
                                            UF
                                        </Label>
                                        <Input
                                            id="reg-uf"
                                            type="text"
                                            placeholder="Estado (Auto)"
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
                                {loading ? (
                                    <div className="flex items-center justify-center gap-2">
                                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                        </svg>
                                        <span>Registrando...</span>
                                    </div>
                                ) : (
                                    "Cadastrar"
                                )}
                            </Button>

                        </form>
                    </CardContent>

                    <CardFooter className="justify-center border-t-0 bg-transparent pb-6 pt-2">
                        <p className="text-xs text-white/40" style={{ fontFamily: '"Inter", sans-serif' }}>
                            Já possui uma conta?{" "}
                            <Link to="/login" className="text-[#EB8729] hover:underline hover:text-[#f5a623] transition-colors">
                                Faça login
                            </Link>
                        </p>
                    </CardFooter>

                </Card>
            </div>
            
            {/* CSS Animations */}
            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
}
