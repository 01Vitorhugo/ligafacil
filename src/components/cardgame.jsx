import photo from '../assets/default.png';
import logoIcon from '../assets/logo_icon.png';
import { MapPin, Calendar, Clock, Shield } from 'lucide-react';

export default function CardGame({ horario, data, endereco, nomeTime, rua, numero, cep, statusGame }) {
    // Format date if needed, otherwise use raw
    return (
        <div className="w-full flex justify-center py-2" style={{ fontFamily: '"Inter", sans-serif' }}>
            <div className="relative w-[95%] sm:w-[90%] bg-[#0f0f12]/80 border border-white/[0.08] hover:border-[#EB8729]/30 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 group flex flex-col">
                
                {/* Background Watermark */}
                <div
                    className="absolute -right-20 -bottom-20 bg-no-repeat bg-contain rotate-[-25deg] w-64 h-64 opacity-5 pointer-events-none group-hover:scale-105 group-hover:opacity-10 transition-all duration-500"
                    style={{ backgroundImage: `url(${logoIcon})` }}
                />

                {/* Left golden highlight bar */}
                <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-[#EB8729] to-[#f5a623]" />

                {/* Header: Shield & Team Name */}
                <section className="flex items-center gap-4 px-5 py-4 border-b border-white/[0.06] bg-white/[0.01]">
                    <figure className="relative w-14 h-14 rounded-full bg-black/40 border border-white/10 flex items-center justify-center p-2 shadow-inner">
                        <img 
                            src={photo} 
                            alt="Escudo do Time" 
                            className="w-10 h-10 object-contain drop-shadow-[0_0_8px_rgba(235,135,41,0.2)]" 
                        />
                    </figure>

                    <div className="flex-1 space-y-1">
                        <h2 className="text-lg font-bold tracking-tight text-white group-hover:text-[#EB8729] transition-colors" style={{ WebkitTextStroke: '0px' }}>
                            {nomeTime}
                        </h2>
                        <div className="flex items-center gap-1.5">
                            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[10px] text-emerald-400 font-semibold uppercase tracking-wider">
                                {statusGame || "Disponível"}
                            </span>
                        </div>
                    </div>

                    <div className="text-white/20 p-1">
                        <Shield className="h-6 w-6 stroke-[1.5]" />
                    </div>
                </section>

                {/* Body Details */}
                <section className="p-5 space-y-3.5">
                    
                    {/* Location */}
                    <div className="flex items-start gap-3">
                        <div className="p-1.5 rounded-md bg-[#EB8729]/10 text-[#EB8729] mt-0.5">
                            <MapPin className="h-4 w-4" />
                        </div>
                        <div className="space-y-0.5">
                            <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Local do Amistoso</p>
                            <p className="text-xs text-white/80 leading-relaxed font-medium">
                                {rua}, {numero} - {endereco} <br />
                                <span className="text-white/40 text-[10px]">CEP: {cep}</span>
                            </p>
                        </div>
                    </div>

                    {/* Date & Time Row */}
                    <div className="grid grid-cols-2 gap-4 pt-1">
                        
                        {/* Date */}
                        <div className="flex items-start gap-3">
                            <div className="p-1.5 rounded-md bg-[#EB8729]/10 text-[#EB8729] mt-0.5">
                                <Calendar className="h-4 w-4" />
                            </div>
                            <div className="space-y-0.5">
                                <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Data</p>
                                <p className="text-xs text-white/90 font-semibold">{data}</p>
                            </div>
                        </div>

                        {/* Time */}
                        <div className="flex items-start gap-3">
                            <div className="p-1.5 rounded-md bg-[#EB8729]/10 text-[#EB8729] mt-0.5">
                                <Clock className="h-4 w-4" />
                            </div>
                            <div className="space-y-0.5">
                                <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Horário</p>
                                <p className="text-xs text-white/90 font-semibold">{horario}</p>
                            </div>
                        </div>

                    </div>

                </section>

            </div>
        </div>
    );
}