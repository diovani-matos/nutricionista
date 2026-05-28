"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";

const ease = [0.4, 0, 0.2, 1] as const;

type Step = {
  num: number;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    num: 1,
    title: "Avaliação completa e humanizada",
    description:
      "Analisamos histórico clínico, exames laboratoriais, perfil sensorial e o contexto familiar — sem julgamentos.",
  },
  {
    num: 2,
    title: "Plano alimentar personalizado ao seu filho",
    description:
      "Não existe fórmula pronta. Cada criança tem seu ritmo, suas preferências e suas necessidades específicas.",
  },
  {
    num: 3,
    title: "Suplementação funcional quando necessária",
    description:
      "Baseada em evidências científicas para preencher lacunas nutricionais que impactam o comportamento e o desenvolvimento.",
  },
  {
    num: 4,
    title: "Orientação à família como aliada",
    description:
      "Você recebe ferramentas práticas para tornar o ambiente alimentar mais seguro, previsível e positivo em casa.",
  },
  {
    num: 5,
    title: "Acompanhamento contínuo e ajustes reais",
    description:
      "Revisamos o plano juntos sempre que necessário. Sem pressa. No tempo do seu filho.",
  },
];

const pills = [
  "Eixo intestino-cérebro",
  "Terapia de exposição alimentar",
  "Dessensibilização sensorial",
  "Microbiota intestinal",
  "Integração multidisciplinar",
];

/* ── Card de etapa ─────────────────────────────────────────────────── */
function StepCard({ step }: { step: Step }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="step"
      style={{
        display: "flex",
        gap: "1.25rem",
        padding: "1.5rem",
        backgroundColor: "var(--color-bg-card)",
        border: `1px solid ${hovered ? "var(--color-primary-medium)" : "var(--color-border)"}`,
        borderRadius: "10px",
        transition: "border-color 0.2s ease",
        alignItems: "flex-start",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* 5 · Número da etapa */}
      <div
        className="step-num"
        style={{
          backgroundColor: "var(--color-primary)",
          color: "#FFFFFF",
          width: "32px",
          height: "32px",
          minWidth: "32px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "0.8rem",
          fontWeight: 700,
          flexShrink: 0,
        }}
      >
        {step.num}
      </div>

      {/* 5 · Conteúdo da etapa */}
      <div className="step-content">
        <h4
          style={{
            color: "var(--color-heading)",
            fontWeight: 600,
            fontSize: "0.95rem",
          }}
        >
          {step.title}
        </h4>
        <p
          style={{
            color: "var(--color-muted)",
            fontSize: "0.875rem",
            lineHeight: 1.7,
          }}
        >
          {step.description}
        </p>
      </div>
    </div>
  );
}

/* ── Seção principal ────────────────────────────────────────────────── */
export default function Abordagem() {
  return (
    <section
      className="abordagem"
      id="abordagem"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="container">
        <Reveal>
          {/* 2 · Tag da seção */}
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
            Minha Abordagem
          </div>

          {/* 3 · Título */}
          <h2
            className="section-title"
            style={{ color: "var(--color-heading)" }}
          >
            Nutrição funcional que
            <br />
            respeita quem seu filho é.
          </h2>
        </Reveal>

        <div className="abordagem-inner">

          {/* 5 · Steps/etapas */}
          <StaggerContainer className="steps" stagger={0.12}>
            {steps.map((step) => (
              <StaggerItem key={step.num}>
                <StepCard step={step} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* 6 · Bloco de destaque */}
          <Reveal delay={0.15} y={32}>
            <motion.div
              className="abordagem-highlight"
              whileInView={{ scale: [0.98, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                backgroundColor: "var(--color-primary)",
                color: "#FFFFFF",
                borderRadius: "12px",
                padding: "2rem",
              }}
            >
              {/* Ícone decorativo */}
              <div className="watermark" style={{ opacity: 0.9 }}>
                🌿
              </div>

              <h3 style={{ fontWeight: 700, fontSize: "1.1rem" }}>
                Sem dietas restritivas. Sem punição à mesa. Sem mágica.
              </h3>

              <p style={{ opacity: 0.85, lineHeight: 1.7 }}>
                A nutrição funcional trabalha com o corpo e a mente da criança,
                identificando inflamações, disbiose intestinal, deficiências
                específicas e hipersensibilidades — tudo isso com ciência, mas com
                acolhimento.
              </p>

              <p
                className="abordagem-highlight-extra"
                style={{ opacity: 0.85, lineHeight: 1.7 }}
              >
                O objetivo não é ter uma criança que &quot;come tudo&quot;. É ter
                uma criança nutrida, um ambiente familiar mais leve e uma mãe que
                respira fundo.
              </p>

              {/* 6 · Tags internas (pills) */}
              <div className="pill-list">
                {pills.map((pill, index) => (
                  <motion.span
                    key={pill}
                    className="pill"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.15)",
                      color: "#FFFFFF",
                      borderRadius: "999px",
                      padding: "0.25rem 0.75rem",
                      fontSize: "0.75rem",
                      border: "1px solid rgba(255,255,255,0.25)",
                    }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.35,
                      delay: 0.1 + index * 0.06,
                      ease,
                    }}
                  >
                    {pill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
