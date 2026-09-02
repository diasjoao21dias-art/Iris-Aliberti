import React, { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

const WHATSAPP = "5534998029281";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#fdfcf9]/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(184,157,100,0.25)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3 group">
          <span className="grid place-items-center w-10 h-10 rounded-full bg-[#1a3d2e] text-[#b89d64] ring-1 ring-[#b89d64]/40 transition-transform group-hover:scale-105">
            <SproutMark className="w-5 h-5" />
          </span>
          <span className="leading-tight">
            <span className="block font-heading font-bold text-[#1a3d2e] tracking-wide text-lg">
              IRIS ALIBERTI
            </span>
            <span className="block text-[10px] tracking-[0.3em] text-[#b89d64] font-medium uppercase">
              Engenheira Agrônoma
            </span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[#1a3d2e]/80 hover:text-[#1a3d2e] transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 hover:after:w-full after:bg-[#b89d64] after:transition-all"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
              "Olá Iris, gostaria de uma consultoria."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#1a3d2e] text-[#fdfcf9] px-5 py-2.5 text-sm font-medium hover:bg-[#244d3b] transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            Falar agora
          </a>
        </div>

        <button
          className="md:hidden grid place-items-center w-10 h-10 rounded-full text-[#1a3d2e] hover:bg-[#1a3d2e]/5"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden mt-3 mx-5 rounded-2xl bg-[#fdfcf9] border border-[#b89d64]/30 shadow-xl p-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 px-2 text-[#1a3d2e] font-medium border-b border-[#b89d64]/15 last:border-0"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[#1a3d2e] text-[#fdfcf9] px-5 py-3 text-sm font-medium"
          >
            <MessageCircle className="w-4 h-4" /> Falar no WhatsApp
          </a>
        </div>
      )}
    </header>
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
