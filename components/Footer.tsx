"use client";

import Link from "next/link";
import {
  InstagramIcon,
  WhatsAppIcon,
  YoutubeIcon,
} from "@/components/icons/BrandIcons";
import { siteConfig } from "@/lib/site";

const navLinks = [
  { href: "#dores", label: "Você se identifica?" },
  { href: "#abordagem", label: "Como funciona" },
  { href: "#sobre", label: "Sobre a Dra. Ana Luz" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Agendar consulta" },
] as const;

const especialidades = [
  "Nutrição para TEA",
  "Nutrição para TDAH",
  "Seletividade alimentar",
  "Neurodesenvolvimento",
  "Suplementação funcional",
] as const;

const socialLinks = [
  {
    href: siteConfig.social.instagram,
    label: "Instagram",
    Icon: InstagramIcon,
  },
  {
    href: siteConfig.social.youtube,
    label: "YouTube",
    Icon: YoutubeIcon,
  },
  {
    href: siteConfig.social.whatsapp || siteConfig.whatsappUrl,
    label: "WhatsApp",
    Icon: WhatsAppIcon,
  },
].filter((link) => link.href.length > 0);

/* ── Estilos compartilhados ─────────────────────────────────────────── */
const colHeadingStyle = {
  color: "rgba(255,255,255,0.4)",
  fontSize: "0.7rem",
  textTransform: "uppercase" as const,
  letterSpacing: "0.12em",
  marginBottom: "1rem",
  fontWeight: 600,
};

const navLinkStyle = {
  color: "rgba(255,255,255,0.65)",
  fontSize: "0.875rem",
  textDecoration: "none",
  transition: "color 0.2s ease",
};

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--color-heading)",
        color: "rgba(255,255,255,0.65)",
      }}
    >
      <div className="footer-inner">
        <div className="footer-grid">

          {/* ── Coluna da marca ── */}
          <div className="footer-brand">
            <span
              className="logo"
              style={{ color: "#FFFFFF", fontWeight: 700 }}
            >
              Ana Luz
              <span style={{ color: "var(--color-accent-light)" }}> Nutrição</span>
            </span>

            <p
              style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "0.85rem",
                lineHeight: 1.6,
              }}
            >
              Nutrição funcional materno-infantil especializada em crianças com
              TEA, TDAH e seletividade alimentar. Ciência e acolhimento juntos.
            </p>

            {/* 8 · Redes sociais */}
            {socialLinks.length > 0 && (
              <div className="social-links">
                {socialLinks.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    className="social-link"
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "#FFFFFF";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "rgba(255,255,255,0.5)";
                    }}
                  >
                    <Icon width={20} height={20} aria-hidden />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* ── Coluna de navegação ── */}
          <div className="footer-col">
            <h4 style={colHeadingStyle}>Navegação</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={navLinkStyle}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "#FFFFFF";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "rgba(255,255,255,0.65)";
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Coluna de especialidades ── */}
          <div className="footer-col">
            <h4 style={colHeadingStyle}>Especialidades</h4>
            <ul>
              {especialidades.map((item) => (
                <li
                  key={item}
                  style={{
                    color: "rgba(255,255,255,0.65)",
                    fontSize: "0.875rem",
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* 9 · Linha inferior */}
        <div
          className="footer-bottom"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "1.5rem",
            marginTop: "2.5rem",
          }}
        >
          {/* 10 · Copyright */}
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.75rem" }}>
            © 2025 Ana Luz Ferreira Nutrição. Todos os direitos reservados.
          </p>

          {/* Aviso legal */}
          <p
            className="aviso-legal"
            style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.75rem" }}
          >
            ⚕️ <strong>Aviso legal:</strong> As informações contidas neste site
            têm caráter educativo e informativo, não substituindo a consulta,
            diagnóstico ou tratamento médico ou nutricional individualizado. A
            nutrição funcional é uma abordagem complementar e deve ser realizada
            por profissional habilitado. CRN 3 · 00000.
          </p>
        </div>
      </div>
    </footer>
  );
}
