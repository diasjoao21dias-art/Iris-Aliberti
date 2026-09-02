import React from "react";
import { Sprout, Recycle, ClipboardList, DollarSign, LayoutGrid, ArrowRight, MessageCircle, BadgeCheck, UserCheck } from "lucide-react";
import { Image } from "@/components/ui/image";

const WHATSAPP = "5534998029281";
const HERO_IMG = "https://media.base44.com/images/public/6a9854f21703b0ea8f8471cf/25445173d_generated_837db106.jpg";

const services = [
  {
    icon: Sprout,
    title: "Assistência Técnica Agrícola",
    desc: "Acompanhamento do plantio à colheita com foco em produtividade e qualidade.",
  },
  {
    icon: Recycle,
    title: "Agricultura Sustentável e Regenerativa",
    desc: "Práticas que preservam o solo, aumentam a biodiversidade e geram resultados duradouros.",
  },
  {
    icon: ClipboardList,
    title: "Auditoria e Adequação Socioambiental",
    desc: "Auditorias, regularizações e adequações conforme legislações e certificações (SAI, FSA, MAPA, etc.).",
  },
  {
    icon: DollarSign,
    title: "Projetos para Crédito Rural e Financiamento",
    desc: "Elaboração de projetos técnicos para linhas de crédito, PRONAF, PRONAMP, BNDES e demais programas.",
  },
  {
    icon: LayoutGrid,
    title: "Planejamento e Gestão da Propriedade Rural",
    desc: "Planejamento produtivo, gestão de custos, análises e estratégias para o crescimento sustentável.",
  },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-24 pb-14 sm:pb-10 lg:min-h-screen lg:flex lg:flex-col lg:justify-center lg:pt-10 lg:pb-4 overflow-hidden">
      {/* soft decorative glow */}
      <div className="pointer-events-none absolute -top-40 -right-32 w-[34rem] h-[34rem] rounded-full bg-[#b89d64]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 w-[30rem] h-[30rem] rounded-full bg-[#1a3d2e]/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 w-full">
        {/* Branding header */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-3">
          <div className="inline-flex items-center justify-center gap-3 mb-3">
            <span className="h-px w-8 sm:w-10 bg-[#b89d64]" />
            <span className="grid place-items-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#1a3d2e] text-[#b89d64] ring-2 ring-[#b89d64]/30">
              <SproutMark className="w-6 h-6 sm:w-7 sm:h-7" />
            </span>
            <span className="h-px w-8 sm:w-10 bg-[#b89d64]" />
          </div>
          <h1 className="font-heading font-bold text-[#1a3d2e] text-3xl sm:text-5xl lg:text-6xl tracking-tight">
            IRIS ALIBERTI
          </h1>
          <p className="mt-2 sm:mt-3 text-[11px] sm:text-sm tracking-[0.4em] sm:tracking-[0.45em] text-[#1a3d2e]/70 font-medium uppercase">
            Engenheira Agrônoma
          </p>
          <p className="mt-2 sm:mt-3 font-script text-xl sm:text-3xl text-[#b89d64]">
            Consultoria e Assistência Técnica Rural
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6 sm:gap-10 lg:gap-14 items-stretch">
          {/* Left: services list */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl border border-[#b89d64]/25 p-5 sm:p-8 lg:p-6 shadow-[0_20px_60px_-30px_rgba(26,61,46,0.35)]">
            <ul className="space-y-4 sm:space-y-5 lg:space-y-3">
              {services.map((s, i) => (
                <li key={s.title} className="flex gap-3 sm:gap-4 group">
                  <span className="shrink-0 grid place-items-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1a3d2e] text-white transition-transform group-hover:scale-110 shadow-md">
                    <s.icon className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.8} />
                  </span>
                  <div className="pt-0.5">
                    <h3 className="font-heading font-semibold text-[#1a3d2e] text-sm sm:text-lg leading-snug">
                      {s.title.toUpperCase()}
                    </h3>
                    <p className="mt-1 text-[13px] sm:text-sm text-[#1a3d2e]/70 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                "Olá Iris, gostaria de uma consultoria."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 sm:mt-7 lg:mt-5 inline-flex items-center gap-2 rounded-full bg-[#1a3d2e] text-[#fdfcf9] px-6 sm:px-7 py-3 sm:py-3.5 text-sm font-semibold hover:bg-[#244d3b] transition-all hover:gap-3 shadow-lg shadow-[#1a3d2e]/20"
            >
              <MessageCircle className="w-4 h-4" />
              Solicitar consultoria
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right: visual panel */}
          <div className="relative rounded-3xl overflow-hidden min-h-[300px] sm:min-h-[380px] lg:min-h-full shadow-[0_30px_80px_-30px_rgba(26,61,46,0.5)]">
            <Image
              src={HERO_IMG}
              alt="Broto verde crescendo no solo ao pôr do sol"
              className="absolute inset-0 w-full h-full"
              fittingType="fill"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a3d2e]/85 via-[#1a3d2e]/30 to-transparent" />

            <div className="relative h-full flex flex-col justify-end p-5 sm:p-9">
              <div className="bg-[#1a3d2e]/85 backdrop-blur-md rounded-2xl p-5 sm:p-6 ring-1 ring-[#b89d64]/30">
                <p className="font-script text-xl sm:text-2xl text-[#b89d64] leading-none">
                  Soluções completas
                </p>
                <p className="mt-2 sm:mt-3 text-[#fdfcf9] text-xs sm:text-sm font-semibold tracking-wide leading-relaxed">
                  PARA UMA PRODUÇÃO MAIS EFICIENTE, RENTÁVEL E SUSTENTÁVEL.
                </p>
              </div>

              <div className="mt-4 sm:mt-5 space-y-2.5 sm:space-y-3">
                <VerifyRow icon={BadgeCheck} text="CREA-MG 142438246-7" />
                <VerifyRow icon={UserCheck} text="CNPJ ATIVO — Empresa regularizada para emitir notas fiscais." />
                <VerifyRow icon={MessageCircle} text="(34) 99802-9281 — Atendimento via WhatsApp" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VerifyRow({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-3 text-[#fdfcf9]/90 text-sm">
      <span className="grid place-items-center w-8 h-8 rounded-full bg-[#b89d64]/20 text-[#b89d64] shrink-0">
        <Icon className="w-4 h-4" />
      </span>
      <span className="leading-snug">{text}</span>
    </div>
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
