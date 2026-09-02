import React, { useState } from "react";
import { MessageCircle, Phone, MapPin, Clock, Send } from "lucide-react";

const WHATSAPP = "5534998029281";

export default function Contact() {
  const [form, setForm] = useState({ nome: "", propriedade: "", mensagem: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Olá Iris! Meu nome é ${form.nome || "..."}.${
      form.propriedade ? ` Propriedade: ${form.propriedade}.` : ""
    }${form.mensagem ? ` ${form.mensagem}` : ""}`;
    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section id="contato" className="py-20 sm:py-28 bg-[#1a3d2e] relative overflow-hidden">
      <div className="pointer-events-none absolute -top-32 -left-24 w-96 h-96 rounded-full bg-[#b89d64]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-24 w-96 h-96 rounded-full bg-[#b89d64]/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="font-script text-2xl text-[#b89d64]">Vamos conversar</p>
          <h2 className="mt-1 font-heading font-bold text-[#fdfcf9] text-3xl sm:text-4xl">
            Solicite sua consultoria
          </h2>
          <p className="mt-4 text-[#fdfcf9]/70 leading-relaxed">
            Atendimento personalizado para cada realidade rural. Fale comigo e
            descubra como cultivar melhores resultados.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 items-start">
          {/* Contact info */}
          <div className="space-y-4">
            <InfoCard icon={MessageCircle} title="WhatsApp" value="(34) 99802-9281" href={`https://wa.me/${WHATSAPP}`} />
            <InfoCard icon={Phone} title="Telefone" value="(34) 99802-9281" href="tel:+5534998029281" />
            <InfoCard icon={Clock} title="Atendimento" value="Seg. a Sáb., horário comercial" />
            <InfoCard icon={MapPin} title="Região" value="Atendimento presencial e a distância" />

            <a
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                "Olá Iris, gostaria de uma consultoria."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl bg-[#25d366] text-white px-6 py-4 font-semibold hover:bg-[#1ebe5d] transition-colors shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Iniciar conversa no WhatsApp
            </a>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#fdfcf9] rounded-3xl p-7 sm:p-9 shadow-2xl"
          >
            <div className="space-y-5">
              <Field
                label="Seu nome"
                value={form.nome}
                onChange={(v) => setForm({ ...form, nome: v })}
                placeholder="Como podemos te chamar?"
              />
              <Field
                label="Propriedade / Cultura"
                value={form.propriedade}
                onChange={(v) => setForm({ ...form, propriedade: v })}
                placeholder="Ex.: Fazenda Santa Rita, soja, milho..."
              />
              <div>
                <label className="block text-sm font-medium text-[#1a3d2e] mb-1.5">
                  Mensagem
                </label>
                <textarea
                  value={form.mensagem}
                  onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                  placeholder="Conte um pouco sobre o que você precisa..."
                  rows={4}
                  className="w-full rounded-xl border border-[#b89d64]/30 bg-white px-4 py-3 text-[#1a3d2e] placeholder:text-[#1a3d2e]/40 focus:outline-none focus:ring-2 focus:ring-[#b89d64]/50 focus:border-[#b89d64] transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#1a3d2e] text-[#fdfcf9] px-6 py-4 font-semibold hover:bg-[#244d3b] transition-colors shadow-lg"
              >
                <Send className="w-4 h-4" />
                Enviar pelo WhatsApp
              </button>
              <p className="text-center text-xs text-[#1a3d2e]/50">
                Ao enviar, você será direcionado ao WhatsApp para concluir a conversa.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon: Icon, title, value, href }) {
  const inner = (
    <div className="flex items-center gap-4 bg-[#fdfcf9]/5 backdrop-blur-sm border border-[#b89d64]/20 rounded-2xl p-5 hover:border-[#b89d64]/40 transition-colors">
      <span className="grid place-items-center w-12 h-12 rounded-full bg-[#b89d64]/15 text-[#b89d64] shrink-0">
        <Icon className="w-5 h-5" />
      </span>
      <div>
        <p className="text-xs uppercase tracking-wider text-[#fdfcf9]/50">{title}</p>
        <p className="text-[#fdfcf9] font-medium mt-0.5">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block">
      {inner}
    </a>
  ) : (
    inner
  );
}

function Field({ label, value, onChange, placeholder }) {
  return (
    <div>
      <label className="block text-sm font-medium text-[#1a3d2e] mb-1.5">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-[#b89d64]/30 bg-white px-4 py-3 text-[#1a3d2e] placeholder:text-[#1a3d2e]/40 focus:outline-none focus:ring-2 focus:ring-[#b89d64]/50 focus:border-[#b89d64] transition"
      />
    </div>
  );
}
