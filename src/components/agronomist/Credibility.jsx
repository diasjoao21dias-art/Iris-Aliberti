import React from "react";
import { BadgeCheck, FileCheck, Leaf, TrendingUp, HandHeart } from "lucide-react";

const stats = [
  { value: "CREA-MG", label: "142438246-7" },
  { value: "CNPJ", label: "Ativo e regularizado" },
  { value: "100%", label: "Atendimento personalizado" },
];

const values = [
  {
    icon: HandHeart,
    title: "Compromisso com o produtor",
    desc: "Acompanhamento próximo e dedicado a cada realidade rural.",
  },
  {
    icon: Leaf,
    title: "Respeito ao meio ambiente",
    desc: "Práticas que preservam o solo e a biodiversidade.",
  },
  {
    icon: TrendingUp,
    title: "Foco em resultados e sustentabilidade",
    desc: "Crescimento produtivo com responsabilidade e durabilidade.",
  },
];

export default function Credibility() {
  return (
    <section id="sobre" className="py-14 sm:py-28 bg-[#fdfcf9]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left: about */}
          <div>
            <p className="font-script text-xl sm:text-2xl text-[#b89d64]">Sobre a profissional</p>
            <h2 className="mt-1 font-heading font-bold text-[#1a3d2e] text-2xl sm:text-4xl leading-tight">
              Engenharia agronômica com técnica, ética e visão de futuro
            </h2>
            <div className="mt-5 flex items-center gap-3">
              <span className="h-px w-12 bg-[#b89d64]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#b89d64]" />
            </div>
            <p className="mt-6 text-[#1a3d2e]/75 leading-relaxed">
              Iris Aliberti é engenheira agrônoma dedicada a levar consultoria e
              assistência técnica de excelência ao produtor rural. Com registro
              no CREA-MG e empresa regularizada, atua do plantio à colheita,
              unindo produtividade, rentabilidade e respeito ao meio ambiente.
            </p>
            <p className="mt-4 text-[#1a3d2e]/75 leading-relaxed">
              Cada propriedade é única — por isso o atendimento é
              personalizado, com soluções técnicas adaptadas à realidade de
              cada cliente e foco em resultados duradouros.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center sm:text-left">
                  <p className="font-heading font-bold text-[#1a3d2e] text-lg sm:text-xl">
                    {s.value}
                  </p>
                  <p className="text-xs text-[#1a3d2e]/60 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Badge icon={BadgeCheck} text="CREA-MG 142438246-7" />
              <Badge icon={FileCheck} text="CNPJ ativo" />
            </div>
          </div>

          {/* Right: values */}
          <div className="space-y-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="flex gap-4 bg-white rounded-2xl p-6 border border-[#b89d64]/20 shadow-[0_10px_40px_-30px_rgba(26,61,46,0.4)] hover:border-[#b89d64]/40 transition-colors"
              >
                <span className="shrink-0 grid place-items-center w-12 h-12 rounded-full bg-[#1a3d2e] text-[#b89d64]">
                  <v.icon className="w-5 h-5" strokeWidth={1.8} />
                </span>
                <div>
                  <h3 className="font-heading font-semibold text-[#1a3d2e]">
                    {v.title}
                  </h3>
                  <p className="mt-1 text-sm text-[#1a3d2e]/70 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ icon: Icon, text }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-[#1a3d2e]/5 border border-[#1a3d2e]/15 px-4 py-2 text-sm text-[#1a3d2e] font-medium">
      <Icon className="w-4 h-4 text-[#b89d64]" />
      {text}
    </span>
  );
}
