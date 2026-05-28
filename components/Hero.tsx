"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Award, CheckCircle, Heart, Leaf } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/BrandIcons";

const ease = [0.4, 0, 0.2, 1] as const;

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92, y: 16 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.65, delay: 0.25, ease },
  },
};

const floatTransition = {
  duration: 4,
  repeat: Infinity,
  ease: "easeInOut" as const,
};

export default function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="hero-inner">

        {/* ── Coluna esquerda: conteúdo ── */}
        <motion.div
          className="hero-content"
          variants={stagger}
          initial="hidden"
          animate="show"
        >

          {/* 3 · Badge/tag acima do título */}
          <motion.div
            className="hero-badge"
            variants={fadeUp}
            style={{
              backgroundColor: "var(--color-accent-light)",
              color: "var(--color-accent)",
              border: "1px solid var(--color-accent)",
              borderRadius: "999px",
              fontSize: "0.75rem",
              padding: "0.3rem 1rem",
            }}
          >
            <Leaf width={14} height={14} aria-hidden />
            Nutrição Funcional Materno-Infantil
          </motion.div>

          {/* 4 + 5 · Título H1 com palavra em destaque */}
          <motion.h1
            variants={fadeUp}
            style={{ color: "var(--color-heading)", fontWeight: 800 }}
          >
            Transforme a hora da refeição em um momento de{" "}
            <em style={{ color: "var(--color-primary)", fontStyle: "italic" }}>
              conexão
            </em>
            , não de tensão.
          </motion.h1>

          {/* 6 · Subtítulo/descrição */}
          <motion.p
            variants={fadeUp}
            style={{ color: "var(--color-muted)", fontWeight: 400 }}
          >
            Especialista em crianças com{" "}
            <strong>TEA, TDAH e Seletividade Alimentar</strong>. Uma abordagem
            que respeita o tempo, a neurodiversidade e a individualidade do seu
            filho.
          </motion.p>

          {/* 9 + 10 · Botões CTA */}
          <motion.div className="hero-ctas" variants={fadeUp}>
            {/* Botão primário */}
            <Link
              href="#contato"
              className="btn btn-lg"
              style={{
                backgroundColor: "var(--color-primary)",
                color: "#FFFFFF",
                borderRadius: "6px",
                padding: "0.85rem 2rem",
                fontWeight: 500,
                boxShadow: "0 4px 16px rgba(45,74,107,0.25)",
                transition: "background-color 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = "var(--color-primary-hover)";
                el.style.boxShadow = "0 6px 20px rgba(45,74,107,0.35)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = "var(--color-primary)";
                el.style.boxShadow = "0 4px 16px rgba(45,74,107,0.25)";
              }}
            >
              <WhatsAppIcon width={18} height={18} aria-hidden />
              Quero agendar uma consulta
            </Link>

            {/* Botão secundário */}
            <Link
              href="#abordagem"
              className="btn btn-lg"
              style={{
                backgroundColor: "transparent",
                border: "1.5px solid var(--color-border)",
                color: "var(--color-text)",
                borderRadius: "6px",
                padding: "0.85rem 2rem",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "var(--color-primary)";
                el.style.color = "var(--color-primary)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "var(--color-border)";
                el.style.color = "var(--color-text)";
              }}
            >
              Como funciona
            </Link>
          </motion.div>

          {/* 7 + 8 · Social proof e badges */}
          <motion.div className="hero-trust" variants={fadeUp}>

            {/* 7 · Card de social proof */}
            <div
              style={{
                backgroundColor: "var(--color-bg-card)",
                border: "1px solid var(--color-border)",
                borderRadius: "8px",
                padding: "0.75rem 1.25rem",
                boxShadow: "0 2px 8px rgba(45,74,107,0.08)",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                whiteSpace: "nowrap",
              }}
            >
              <CheckCircle
                width={15}
                height={15}
                aria-hidden
                style={{ color: "var(--color-accent)", flexShrink: 0 }}
              />
              <span style={{ color: "var(--color-primary)", fontWeight: 700 }}>
                +400
              </span>
              <span style={{ color: "var(--color-muted)", fontSize: "0.82rem" }}>
                famílias atendidas
              </span>
            </div>

            {/* 8 · Badge: Sem dietas punitivas */}
            <div
              style={{
                backgroundColor: "var(--color-accent-light)",
                color: "var(--color-accent)",
                border: "1px solid var(--color-accent)",
                borderRadius: "999px",
                fontSize: "0.75rem",
                padding: "0.3rem 0.85rem",
                display: "flex",
                alignItems: "center",
                gap: "0.35rem",
                whiteSpace: "nowrap",
              }}
            >
              <CheckCircle width={13} height={13} aria-hidden />
              Sem dietas punitivas
            </div>

            {/* 8 · Badge: Atendimento */}
            <div
              style={{
                backgroundColor: "var(--color-accent-light)",
                color: "var(--color-accent)",
                border: "1px solid var(--color-accent)",
                borderRadius: "999px",
                fontSize: "0.75rem",
                padding: "0.3rem 0.85rem",
                display: "flex",
                alignItems: "center",
                gap: "0.35rem",
                whiteSpace: "nowrap",
              }}
            >
              <CheckCircle width={13} height={13} aria-hidden />
              Atendimento online e presencial
            </div>

          </motion.div>
        </motion.div>

        {/* ── Coluna direita: imagem ── */}
        <motion.div
          className="hero-img-wrap"
          variants={scaleIn}
          initial="hidden"
          animate="show"
        >
          {/* 11 + 12 · Card da imagem / credencial */}
          <motion.div
            className="hero-card"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, ease }}
            style={{
              backgroundColor: "var(--color-bg-card)",
              border: "1px solid var(--color-border)",
              borderRadius: "12px",
              boxShadow: "0 20px 60px rgba(45,74,107,0.15)",
            }}
          >
            {/* 2 · Imagem local */}
            <div
              className="hero-photo"
              style={{
                aspectRatio: "3/2",
                width: "100%",
                maxWidth: "560px",
                overflow: "hidden",
                borderRadius: "12px",
                position: "relative",
              }}
            >
              <Image
                src="/images/sobre-nutricionista.jpg"
                alt="Dra. Ana Luz Ferreira — Nutricionista"
                fill
                priority
                quality={90}
                sizes="(max-width: 768px) 100vw, 560px"
                className="object-cover"
                style={{ borderRadius: "12px", objectPosition: "center center" }}
              />
            </div>

            {/* 12 · Credencial */}
            <div
              className="hero-card-name"
              style={{ color: "var(--color-heading)" }}
            >
              Dra. Ana Luz Ferreira
            </div>
            <div
              className="hero-card-crn"
              style={{ color: "var(--color-muted)" }}
            >
              CRN 3 · 00000-SP
            </div>
          </motion.div>

          {/* 12 · Floating badge 1 */}
          <motion.div
            className="floating-badge fb1"
            animate={{ y: [0, -6, 0] }}
            transition={floatTransition}
            style={{
              backgroundColor: "var(--color-bg-card)",
              border: "1px solid var(--color-border)",
              borderRadius: "8px",
              boxShadow: "0 4px 16px rgba(45,74,107,0.1)",
              color: "var(--color-heading)",
            }}
          >
            <Heart
              width={14}
              height={14}
              aria-hidden
              style={{ color: "var(--color-accent)" }}
            />
            Abordagem empática
          </motion.div>

          {/* 12 · Floating badge 2 */}
          <motion.div
            className="floating-badge fb2"
            animate={{ y: [0, -6, 0] }}
            transition={{ ...floatTransition, delay: 1.2 }}
            style={{
              backgroundColor: "var(--color-bg-card)",
              border: "1px solid var(--color-border)",
              borderRadius: "8px",
              boxShadow: "0 4px 16px rgba(45,74,107,0.1)",
              color: "var(--color-heading)",
            }}
          >
            <Award
              width={14}
              height={14}
              aria-hidden
              style={{ color: "var(--color-primary)" }}
            />
            Pós em TEA & TDAH
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
