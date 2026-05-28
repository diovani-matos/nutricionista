"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Star } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";

const formacoes = [
  "Bacharelado em Nutrição — USP",
  "Pós-graduação em Nutrição Clínica Funcional — VP Consultoria",
  "Especialização em TEA e Desenvolvimento Infantil — UNIFESP",
  "Formação em Terapia de Integração Sensorial Alimentar",
  "Mais de 400 crianças atípicas acompanhadas",
];

export default function Sobre() {
  return (
    <section
      className="sobre"
      id="sobre"
      style={{ backgroundColor: "var(--color-bg-alt)" }}
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
            Sobre Mim
          </div>

          {/* Título */}
          <h2
            className="section-title"
            style={{ color: "var(--color-heading)" }}
          >
            Quem vai cuidar
            <br />
            do seu filho?
          </h2>
        </Reveal>

        <div className="sobre-inner">

          {/* Coluna esquerda: foto */}
          <Reveal delay={0.1} y={28}>
            <motion.div
              className="sobre-photo-wrap"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div
                className="sobre-photo"
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 8px 32px rgba(45,74,107,0.12)",
                }}
              >
                <Image
                  src="/images/sobre-nutricionista.jpg"
                  alt="Dra. Ana Luz, nutricionista em ambiente profissional acolhedor"
                  fill
                  sizes="(max-width: 900px) 280px, 340px"
                  className="object-cover"
                  style={{ borderRadius: "12px" }}
                />
              </div>

              {/* Badge de credencial */}
              <div
                className="credencial-badge"
                style={{
                  backgroundColor: "var(--color-primary)",
                  color: "#FFFFFF",
                  borderRadius: "999px",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  boxShadow: "0 4px 16px rgba(45,74,107,0.2)",
                }}
              >
                CRN 3 · Nutricionista Clínica
              </div>
            </motion.div>
          </Reveal>

          {/* Coluna direita: bio */}
          <Reveal delay={0.2}>
            <div className="sobre-bio">
              <h3 style={{ color: "var(--color-heading)", fontWeight: 700 }}>
                Dra. Ana Luz Ferreira
              </h3>

              <div
                className="titulo"
                style={{
                  color: "var(--color-accent)",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                }}
              >
                Nutricionista Funcional · Especialista em Neurodesenvolvimento
                Infantil
              </div>

              <p style={{ color: "var(--color-muted)", lineHeight: 1.7 }}>
                Sou mãe, nutricionista e, por muito tempo, fui também a
                profissional que não encontrava respostas nos protocolos
                convencionais. Foi ao acompanhar crianças com TEA, TDAH e
                seletividade alimentar que percebi: o problema raramente está na
                birra — e a solução nunca está em forçar.
              </p>

              <p style={{ color: "var(--color-muted)", lineHeight: 1.7 }}>
                Hoje, dedico minha prática clínica exclusivamente a famílias que
                vivem esse desafio. Combino evidência científica com uma escuta que
                vai além dos sintomas — porque entendo que por trás de toda
                refeição recusada, há uma criança que está se comunicando do jeito
                que pode.
              </p>

              <StaggerContainer className="formacoes" stagger={0.08}>
                {formacoes.map((texto, index) => {
                  const isLast = index === formacoes.length - 1;
                  const Icon = isLast ? Star : GraduationCap;
                  return (
                    <StaggerItem key={texto}>
                      <div
                        className="formacao"
                        style={{
                          color: "var(--color-text)",
                          fontSize: "0.85rem",
                        }}
                      >
                        <Icon
                          width={16}
                          height={16}
                          aria-hidden
                          style={{
                            color: isLast
                              ? "var(--color-primary)"
                              : "var(--color-accent)",
                            flexShrink: 0,
                          }}
                        />
                        {texto}
                      </div>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
