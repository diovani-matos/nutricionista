"use client";

import { motion } from "framer-motion";
import { WhatsAppIcon } from "@/components/icons/BrandIcons";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/lib/site";

export default function CtaSection() {
  return (
    <section
      className="cta-section"
      id="contato"
      style={{
        backgroundColor: "var(--color-primary)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 8 · Elemento decorativo de fundo */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: "-100px",
          top: "-100px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.03)",
          pointerEvents: "none",
        }}
      />

      <div className="container">
        <Reveal>
          {/* 2 · Tag/badge */}
          <div
            className="section-tag cta-tag"
            style={{
              backgroundColor: "rgba(255,255,255,0.15)",
              color: "#FFFFFF",
              border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: "999px",
              fontSize: "0.75rem",
              padding: "0.3rem 1rem",
            }}
          >
            Dê o primeiro passo
          </div>

          {/* 3 · Título */}
          <h2 style={{ color: "#FFFFFF", fontWeight: 800 }}>
            Seu filho merece uma relação
            <br />
            <em
              style={{ color: "var(--color-accent-light)", fontStyle: "normal" }}
            >
              leve
            </em>{" "}
            com a comida.
          </h2>

          {/* 4 · Subtítulo */}
          <p
            style={{
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.7,
              opacity: 1,
            }}
          >
            Agende uma consulta e vamos, juntos, entender o que o corpo do seu
            filho está pedindo — com ciência, empatia e sem julgamentos.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          {/* 5 · Botão primário */}
          <motion.a
            href={siteConfig.whatsappUrl}
            className="btn btn-white btn-lg"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            style={{
              backgroundColor: "#FFFFFF",
              color: "var(--color-primary)",
              fontWeight: 600,
              borderRadius: "6px",
              padding: "0.85rem 2rem",
              boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
              transition: "background-color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                "var(--color-bg)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                "#FFFFFF";
            }}
          >
            <WhatsAppIcon width={18} height={18} aria-hidden />
            Agendar pelo WhatsApp
          </motion.a>

          {/* 7 · Footnote de confiança */}
          <p
            className="cta-footnote"
            style={{
              color: "rgba(255,255,255,0.65)",
              fontSize: "0.8rem",
              opacity: 1,
            }}
          >
            Atendimento online para todo o Brasil · Presencial em São Paulo/SP
          </p>
        </Reveal>
      </div>
    </section>
  );
}
