import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, MessageCircle, PhoneCall, HelpCircle } from 'lucide-react';

export default function Contact() {
    return (
        <div className="relative min-h-screen w-full bg-[#050505] text-white pb-20">
            {/* Background Glows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#EB8729]/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#EB8729]/5 rounded-full blur-[150px]" />
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
                    <PhoneCall className="h-7 w-7 text-[#EB8729]" />
                    <h1 className="text-2xl font-bold tracking-wider uppercase" style={{ fontFamily: '"Inter", sans-serif' }}>
                        Contato
                    </h1>
                </div>

                <div className="text-center max-w-lg mx-auto mb-10 space-y-2">
                    <h2 className="text-2xl font-extrabold text-white" style={{ fontFamily: '"Inter", sans-serif', WebkitTextStroke: '0px' }}>
                        Como podemos te ajudar?
                    </h2>
                    <p className="text-sm text-white/50" style={{ fontFamily: '"Inter", sans-serif' }}>
                        Escolha um dos canais abaixo para entrar em contato com o suporte da Liga Fácil.
                    </p>
                </div>

                {/* Contact Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* WhatsApp Support Card */}
                    <Card className="border-0 bg-white/[0.03] backdrop-blur-md relative overflow-hidden group hover:bg-white/[0.05] transition-all duration-300">
                        <div className="absolute top-0 inset-x-0 h-1 bg-emerald-500" />

                        <CardHeader className="flex flex-col items-center text-center pb-2 pt-8">
                            <div className="p-4 rounded-full bg-emerald-500/10 text-emerald-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                                <MessageCircle className="h-10 w-10" />
                            </div>
                            <CardTitle className="text-xl font-bold text-white" style={{ fontFamily: '"Inter", sans-serif' }}>
                                WhatsApp Suporte
                            </CardTitle>
                            <CardDescription className="text-white/40 text-xs uppercase tracking-wider" style={{ fontFamily: '"Inter", sans-serif' }}>
                                Resposta Rápida
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="flex flex-col items-center text-center space-y-6 pb-8">
                            <p className="text-sm text-white/60 max-w-xs" style={{ fontFamily: '"Inter", sans-serif' }}>
                                Dúvidas sobre jogos, campeonatos ou problemas com o seu cadastro? Fale conosco diretamente.
                            </p>

                            <Button
                                onClick={() => window.open("https://wa.me/5511995216604?text=Olá! Preciso de ajuda com a plataforma Liga Fácil.", "_blank")}
                                className="w-full max-w-[220px] h-11 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer rounded-lg"
                                style={{ fontFamily: '"Inter", sans-serif' }}
                            >
                                <MessageCircle className="h-5 w-5" />
                                Iniciar Conversa
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Email Support Card */}
                    <Card className="border-0 bg-white/[0.03] backdrop-blur-md relative overflow-hidden group hover:bg-white/[0.05] transition-all duration-300">
                        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#EB8729] to-[#f5a623]" />

                        <CardHeader className="flex flex-col items-center text-center pb-2 pt-8">
                            <div className="p-4 rounded-full bg-[#EB8729]/10 text-[#EB8729] mb-4 group-hover:scale-110 transition-transform duration-300">
                                <Mail className="h-10 w-10" />
                            </div>
                            <CardTitle className="text-xl font-bold text-white" style={{ fontFamily: '"Inter", sans-serif' }}>
                                E-mail Suporte
                            </CardTitle>
                            <CardDescription className="text-white/40 text-xs uppercase tracking-wider" style={{ fontFamily: '"Inter", sans-serif' }}>
                                Assuntos Corporativos
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="flex flex-col items-center text-center space-y-6 pb-8">
                            <p className="text-sm text-white/60 max-w-xs" style={{ fontFamily: '"Inter", sans-serif' }}>
                                Prefere e-mail? Use para parcerias comerciais, feedback formal ou solicitações administrativas.
                            </p>

                            <Button
                                onClick={() => window.location.href = "mailto:suporte.ligafacil@gmail.com?subject=Suporte Liga Fácil"}
                                className="w-full max-w-[220px] h-11 bg-gradient-to-r from-[#EB8729] to-[#d4781e] hover:from-[#f59832] hover:to-[#EB8729] text-white font-semibold shadow-lg shadow-[#EB8729]/10 hover:shadow-[#EB8729]/20 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer rounded-lg"
                                style={{ fontFamily: '"Inter", sans-serif' }}
                            >
                                <Mail className="h-5 w-5" />
                                Enviar E-mail
                            </Button>
                        </CardContent>
                    </Card>

                </div>

                {/* Bottom Tip */}
                <div className="mt-12 flex items-center justify-center gap-2 text-xs text-white/30" style={{ fontFamily: '"Inter", sans-serif' }}>
                    <HelpCircle className="h-4 w-4" />
                    <span>Nosso suporte funciona todos os dias da semana para te atender.</span>
                </div>


            </div>
        </div>
    );
}