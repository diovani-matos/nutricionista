"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";

type Depoimento = {
  text: string;
  name: string;
  role: string;
};

const depoimentos: Depoimento[] = [
  {
    text: "Eu chorava antes de cada almoço. Meu filho de 5 anos com TEA só comia nugget e pão branco. Em 4 meses com a Dra. Ana Luz, ele já aceita frango grelhado, cenoura cozida e arroz. Parece milagre, mas é ciência e muita paciência.",
    name: "Mariana F.",
    role: "Mãe do Enzo, 5 anos · TEA Nível 1",
  },
  {
    text: "Minha filha tinha crises diárias que eu não conseguia explicar. A Dra. identificou uma disbiose intestinal que estava afetando o comportamento dela. Com o tratamento nutricional, as crises diminuíram em mais de 70%. Isso não tem preço.",
    name: "Renata C.",
    role: "Mãe da Isabela, 7 anos · TDAH",
  },
  {
    text: "O que mais me surpreendeu foi a forma como a Dra. Ana Luz incluiu meu filho no processo. Ele passou a ter curiosidade pela comida, não medo. Nunca ninguém havia olhado pra ele assim — como uma criança que precisa de suporte, não de correção.",
    name: "Luciana S.",
    role: "Mãe do Miguel, 8 anos · Seletividade Severa",
  },
];

/* ── Card de depoimento ─────────────────────────────────────────────── */
function DepCard({ dep }: { dep: Depoimento }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="dep-card"
      style={{
        backgroundColor: "var(--color-bg-card)",
        border: "1px solid var(--color-border)",
        borderRadius: "12px",
        padding: "2rem",
        boxShadow: hovered
          ? "0 8px 24px rgba(45,74,107,0.1)"
          : "0 2px 8px rgba(45,74,107,0.06)",
        transition: "box-shadow 0.25s ease",
      }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Aspas decorativas */}
      <div
        className="dep-quote"
        style={{
          position: "static",
          fontSize: "4rem",
          color: "var(--color-primary)",
          opacity: 0.2,
          lineHeight: 0,
          marginBottom: "1rem",
          fontFamily: "Georgia, serif",
          display: "block",
        }}
      >
        &quot;
      </div>

      {/* Estrelas */}
      <div
        className="stars"
        style={{
          color: "#F59E0B",
          fontSize: "0.9rem",
          marginBottom: "1rem",
        }}
      >
        ★★★★★
      </div>

      {/* Texto do depoimento */}
      <p
        className="dep-text"
        style={{
          color: "var(--color-text)",
          fontSize: "0.9rem",
          lineHeight: 1.8,
          fontStyle: "italic",
        }}
      >
        {dep.text}
      </p>

      {/* Autor — dentro do card */}
      <div
        className="dep-author"
        style={{
          borderTop: "1px solid var(--color-border)",
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
          paddingTop: "1rem",
          marginTop: "1rem",
        }}
      >
        <p
          style={{
            color: "var(--color-heading)",
            fontWeight: 600,
            fontSize: "0.9rem",
            margin: 0,
          }}
        >
          {dep.name}
        </p>
        <p
          style={{
            color: "var(--color-muted)",
            fontSize: "0.8rem",
            margin: 0,
          }}
        >
          {dep.role}
        </p>
      </div>
    </motion.div>
  );
}

/* ── Seção principal ────────────────────────────────────────────────── */
export default function Depoimentos() {
  return (
    <section
      className="depoimentos"
      id="depoimentos"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="container">
        <Reveal>
          {/* Tag da seção */}
          <div
            className="section-tag"
            style={{
              backgroundColor: "var(--color-accent-light)",
              color: "var(--color-accent)",
              border: "1px solid var(--color-accent)",
              borderRadius: "999px",
              fontSize: "0.75rem",
              padding: "0.3rem 1rem",
            }}
          >
            O que as mães dizem
          </div>

          {/* Título */}
          <h2
            className="section-title"
            style={{ color: "var(--color-heading)" }}
          >
            Famílias que encontraram
            <br />
            <em style={{ color: "var(--color-primary)", fontStyle: "normal" }}>
              leveza
            </em>{" "}
            à mesa.
          </h2>
        </Reveal>

        <StaggerContainer className="dep-grid" stagger={0.12}>
          {depoimentos.map((dep) => (
            <StaggerItem key={dep.name}>
              <DepCard dep={dep} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
