import React from "react";
import { Sprout, Recycle, ClipboardList, DollarSign, LayoutGrid, ArrowRight } from "lucide-react";

const WHATSAPP = "5534998029281";

const services = [
  {
    icon: Sprout,
    title: "Assistência Técnica Agrícola",
    desc: "Acompanhamento do plantio à colheita com foco em produtividade e qualidade.",
    points: ["Monitoramento de lavoura", "Recomendações de manejo", "Acompanhamento de safra"],
  },
  {
    icon: Recycle,
    title: "Agricultura Sustentável e Regenerativa",
    desc: "Práticas que preservam o solo, aumentam a biodiversidade e geram resultados duradouros.",
    points: ["Rotação e cobertura de solo", "Manejo integrado de pragas", "Conservação de recursos"],
  },
  {
    icon: ClipboardList,
    title: "Auditoria e Adequação Socioambiental",
    desc: "Auditorias, regularizações e adequações conforme legislações e certificações (SAI, FSA, MAPA, etc.).",
    points: ["Diagnóstico de conformidade", "Regularização ambiental", "Certificações e selos"],
  },
  {
    icon: DollarSign,
    title: "Projetos para Crédito Rural e Financiamento",
    desc: "Elaboração de projetos técnicos para linhas de crédito, PRONAF, PRONAMP, BNDES e demais programas.",
    points: ["Projetos técnicos completos", "PRONAF / PRONAMP / BNDES", "Tramitação e acompanhamento"],
  },
  {
    icon: LayoutGrid,
    title: "Planejamento e Gestão da Propriedade Rural",
    desc: "Planejamento produtivo, gestão de custos, análises e estratégias para o crescimento sustentável.",
    points: ["Gestão de custos e insumos", "Análises de viabilidade", "Estratégia de crescimento"],
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 sm:py-28 bg-[#f6f4ee]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="font-script text-2xl text-[#b89d64]">O que ofereço</p>
          <h2 className="mt-1 font-heading font-bold text-[#1a3d2e] text-3xl sm:text-4xl">
            Soluções técnicas para cada etapa do campo
          </h2>
          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#b89d64]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#b89d64]" />
            <span className="h-px w-12 bg-[#b89d64]" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group relative bg-white rounded-2xl p-7 border border-[#b89d64]/20 shadow-[0_10px_40px_-25px_rgba(26,61,46,0.4)] hover:shadow-[0_24px_60px_-25px_rgba(26,61,46,0.45)] hover:-translate-y-1 transition-all duration-300"
            >
              <span className="grid place-items-center w-14 h-14 rounded-2xl bg-[#1a3d2e] text-[#b89d64] mb-5 transition-transform group-hover:scale-110">
                <s.icon className="w-6 h-6" strokeWidth={1.7} />
              </span>
              <h3 className="font-heading font-semibold text-[#1a3d2e] text-lg leading-snug">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-[#1a3d2e]/70 leading-relaxed">
                {s.desc}
              </p>
              <ul className="mt-4 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-[#1a3d2e]/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b89d64] shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                  `Olá Iris, tenho interesse em: ${s.title}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1a3d2e] hover:gap-2.5 transition-all"
              >
                Saber mais <ArrowRight className="w-4 h-4" />
              </a>
            </article>
          ))}

          {/* CTA card */}
          <div className="relative overflow-hidden rounded-2xl bg-[#1a3d2e] p-8 flex flex-col justify-center text-center">
            <div className="pointer-events-none absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#b89d64]/20 blur-2xl" />
            <p className="font-script text-2xl text-[#b89d64] relative">Não encontrou o que precisa?</p>
            <p className="mt-2 text-[#fdfcf9]/90 text-sm relative">
              Fale comigo e descubra como posso ajudar na sua realidade rural.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-[#b89d64] text-[#1a3d2e] px-6 py-3 text-sm font-semibold hover:bg-[#c9ad76] transition-colors"
            >
              Falar no WhatsApp <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
