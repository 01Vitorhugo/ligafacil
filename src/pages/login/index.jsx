import { useState } from 'react';
import Logo from '../../assets/logo_site.png';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../database';
import { useNavigate, Link } from 'react-router-dom';
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

export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    async function loginUser(e) {
        e.preventDefault();

        if (!email || email.trim() === "") {
            toast.error("Preencha o campo de email!");
            return;
        }

        if (!senha || senha.trim() === "") {
            toast.error("Preencha o campo de senha!");
            return;
        }

        setLoading(true);

        try {
            await signInWithEmailAndPassword(auth, email.trim(), senha);
            toast.success("Usuário logado com sucesso!");
            navigate('/');
        } catch (error) {
            toast.error("Email ou senha incorretos");
            setEmail("");
            setSenha("");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505]">

            {/* Animated background glow effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#EB8729]/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#EB8729]/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#EB8729]/5 rounded-full blur-[200px]" />
            </div>

            {/* Subtle grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Main login card */}
            <div className="relative z-10 w-full max-w-md px-4 py-8">

                {/* Logo */}
                <div className="flex justify-center mb-8 animate-[fadeInDown_0.6s_ease-out]">
                    <img
                        src={Logo}
                        alt="Liga Fácil"
                        className="w-36 h-36 object-contain drop-shadow-[0_0_30px_rgba(235,135,41,0.3)] hover:drop-shadow-[0_0_40px_rgba(235,135,41,0.5)] transition-all duration-500"
                    />
                </div>

                {/* Card with glassmorphism */}
                <Card className="border-0 ring-0 bg-white/[0.04] backdrop-blur-xl shadow-2xl shadow-black/50 animate-[fadeInUp_0.6s_ease-out]" style={{ '--tw-ring-opacity': 0 }}>

                    <CardHeader className="text-center pb-2">
                        <CardTitle
                            className="text-2xl font-bold tracking-tight"
                            style={{
                                fontFamily: '"Inter", sans-serif',
                                background: 'linear-gradient(135deg, #EB8729, #f5a623, #EB8729)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                WebkitTextStroke: '0px',
                            }}
                        >
                            Bem-vindo de volta
                        </CardTitle>
                        <CardDescription className="text-white/50" style={{ fontFamily: '"Inter", sans-serif' }}>
                            Entre na sua conta para continuar
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="pt-4">
                        <form onSubmit={loginUser} className="space-y-5">

                            {/* Email field */}
                            <div className="space-y-2">
                                <Label
                                    htmlFor="email-login"
                                    className="text-white/70 text-xs uppercase tracking-wider"
                                    style={{ fontFamily: '"Inter", sans-serif' }}
                                >
                                    Email
                                </Label>
                                <div className="relative group">
                                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#EB8729]/20 to-[#f5a623]/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 blur-sm -z-10" />
                                    <Input
                                        id="email-login"
                                        type="email"
                                        placeholder="seu@email.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="h-12 bg-white/[0.06] border-white/10 text-white placeholder:text-white/25 focus-visible:border-[#EB8729]/50 focus-visible:ring-[#EB8729]/20 transition-all duration-300"
                                        style={{ fontFamily: '"Inter", sans-serif' }}
                                    />
                                </div>
                            </div>

                            {/* Password field */}
                            <div className="space-y-2">
                                <Label
                                    htmlFor="senha-login"
                                    className="text-white/70 text-xs uppercase tracking-wider"
                                    style={{ fontFamily: '"Inter", sans-serif' }}
                                >
                                    Senha
                                </Label>
                                <div className="relative group">
                                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#EB8729]/20 to-[#f5a623]/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 blur-sm -z-10" />
                                    <Input
                                        id="senha-login"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        value={senha}
                                        onChange={(e) => setSenha(e.target.value)}
                                        className="h-12 bg-white/[0.06] border-white/10 text-white placeholder:text-white/25 focus-visible:border-[#EB8729]/50 focus-visible:ring-[#EB8729]/20 transition-all duration-300 pr-12"
                                        style={{ fontFamily: '"Inter", sans-serif' }}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-[#EB8729] transition-colors duration-200 cursor-pointer"
                                        aria-label={showPassword ? "Esconder senha" : "Mostrar senha"}
                                    >
                                        {showPassword ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                                                <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                                                <line x1="1" y1="1" x2="23" y2="23" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                <circle cx="12" cy="12" r="3" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Login button */}
                            <Button
                                type="submit"
                                disabled={loading}
                                className="w-full h-12 bg-gradient-to-r from-[#EB8729] to-[#d4781e] hover:from-[#f59832] hover:to-[#EB8729] text-white font-semibold text-base shadow-lg shadow-[#EB8729]/20 hover:shadow-[#EB8729]/40 transition-all duration-300 active:scale-[0.98] cursor-pointer"
                                style={{ fontFamily: '"Inter", sans-serif' }}
                            >
                                {loading ? (
                                    <div className="flex items-center gap-2">
                                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                        </svg>
                                        <span>Entrando...</span>
                                    </div>
                                ) : (
                                    "Entrar"
                                )}
                            </Button>

                        </form>
                    </CardContent>

                    {/* Divider */}
                    <div className="px-4 flex items-center gap-3">
                        <Separator className="flex-1 bg-white/10" />
                        <span className="text-xs text-white/30 uppercase tracking-widest" style={{ fontFamily: '"Inter", sans-serif' }}>ou</span>
                        <Separator className="flex-1 bg-white/10" />
                    </div>

                    {/* Footer */}
                    <CardFooter className="flex-col gap-3 border-t-0 bg-transparent pt-4 pb-6">
                        <Button
                            variant="outline"
                            asChild
                            className="w-full h-12 border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-[#EB8729]/30 text-white/80 hover:text-white font-medium transition-all duration-300 cursor-pointer"
                            style={{ fontFamily: '"Inter", sans-serif' }}
                        >
                            <Link to="/register">
                                Criar conta nova
                            </Link>
                        </Button>

                        <p className="text-[11px] text-white/20 text-center mt-2" style={{ fontFamily: '"Inter", sans-serif' }}>
                            Liga Fácil Esportes © 2025
                        </p>
                    </CardFooter>

                </Card>
            </div>

            {/* CSS Animations */}
            <style>{`
                @keyframes fadeInDown {
                    from { opacity: 0; transform: translateY(-20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
}
