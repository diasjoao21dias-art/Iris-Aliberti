import React from "react";
import { HandHeart, Leaf, TrendingUp, MessageCircle } from "lucide-react";

const WHATSAPP = "5534998029281";

const values = [
  { icon: HandHeart, label: "Compromisso com o produtor" },
  { icon: Leaf, label: "Respeito ao meio ambiente" },
  { icon: TrendingUp, label: "Foco em resultados e sustentabilidade" },
];

export default function Footer() {
  return (
    <footer className="bg-[#143226] text-[#fdfcf9]">
      {/* Values band */}
      <div className="border-t border-[#b89d64]/15">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12 grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
          <p className="font-script text-2xl text-[#b89d64] leading-tight">
            Do campo nasce o futuro.
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {values.map((v) => (
              <div key={v.label} className="flex items-center gap-3">
                <span className="grid place-items-center w-10 h-10 rounded-full bg-[#b89d64]/15 text-[#b89d64]">
                  <v.icon className="w-5 h-5" strokeWidth={1.7} />
                </span>
                <span className="text-xs uppercase tracking-wider text-[#fdfcf9]/80 max-w-[9rem] leading-snug">
                  {v.label}
                </span>
              </div>
            ))}
          </div>
          <p className="font-script text-2xl text-[#b89d64] leading-tight md:text-right">
            Atendimento personalizado para cada realidade rural!
          </p>
        </div>
      </div>

      {/* Main footer */}
      <div className="border-t border-[#b89d64]/15">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="grid place-items-center w-10 h-10 rounded-full bg-[#b89d64]/15 text-[#b89d64]">
              <SproutMark className="w-5 h-5" />
            </span>
            <div className="leading-tight">
              <p className="font-heading font-bold tracking-wide">IRIS ALIBERTI</p>
              <p className="text-[10px] tracking-[0.3em] text-[#b89d64] uppercase">
                Engenheira Agrônoma
              </p>
            </div>
          </div>

          <p className="text-sm font-semibold tracking-wide text-center">
            JUNTOS, CULTIVAMOS RESULTADOS.
          </p>

          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#b89d64] text-[#1a3d2e] px-5 py-2.5 text-sm font-semibold hover:bg-[#c9ad76] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            (34) 99802-9281
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-[#b89d64]/15">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#fdfcf9]/50">
          <p>© {new Date().getFullYear()} Iris Aliberti — Engenheira Agrônoma. CREA-MG 142438246-7.</p>
          <p>Consultoria e Assistência Técnica Rural.</p>
        </div>
      </div>
    </footer>
  );
}

function SproutMark({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22V12" />
      <path d="M12 12c0-3 2.5-5.5 6-5.5 0 3.5-2.5 5.5-6 5.5Z" />
      <path d="M12 14c0-2.2-1.8-4-4.5-4 0 2.5 1.8 4 4.5 4Z" />
      <path d="M4 22h16" />
    </svg>
  );
}
