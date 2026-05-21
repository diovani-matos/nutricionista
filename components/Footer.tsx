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

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="logo">Ana Luz Nutrição</span>
            <p>
              Nutrição funcional materno-infantil especializada em crianças com
              TEA, TDAH e seletividade alimentar. Ciência e acolhimento juntos.
            </p>
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
                  >
                    <Icon width={16} height={16} aria-hidden />
                  </a>
                ))}
              </div>
            )}
          </div>
          <div className="footer-col">
            <h4>Navegação</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Especialidades</h4>
            <ul>
              {especialidades.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Ana Luz Ferreira Nutrição. Todos os direitos reservados.</p>
          <p className="aviso-legal">
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
