"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Star } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { IMAGES } from "@/lib/images";

const formacoes = [
  "Bacharelado em Nutrição — USP",
  "Pós-graduação em Nutrição Clínica Funcional — VP Consultoria",
  "Especialização em TEA e Desenvolvimento Infantil — UNIFESP",
  "Formação em Terapia de Integração Sensorial Alimentar",
  "Mais de 400 crianças atípicas acompanhadas",
];

export default function Sobre() {
  return (
    <section className="sobre" id="sobre">
      <div className="container">
        <Reveal>
          <div className="section-tag">Sobre Mim</div>
          <h2 className="section-title">
            Quem vai cuidar
            <br />
            do seu filho?
          </h2>
        </Reveal>
        <div className="sobre-inner">
          <Reveal delay={0.1} y={28}>
            <motion.div
              className="sobre-photo-wrap"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="sobre-photo">
                <Image
                  src={IMAGES.sobre}
                  alt="Dra. Ana Luz, nutricionista em ambiente profissional acolhedor"
                  fill
                  sizes="(max-width: 900px) 280px, 340px"
                  className="object-cover rounded-2xl"
                />
              </div>
              <div className="credencial-badge">CRN 3 · Nutricionista Clínica</div>
            </motion.div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="sobre-bio">
              <h3>Dra. Ana Luz Ferreira</h3>
              <div className="titulo">
                Nutricionista Funcional · Especialista em Neurodesenvolvimento
                Infantil
              </div>
              <p>
                Sou mãe, nutricionista e, por muito tempo, fui também a
                profissional que não encontrava respostas nos protocolos
                convencionais. Foi ao acompanhar crianças com TEA, TDAH e
                seletividade alimentar que percebi: o problema raramente está na
                birra — e a solução nunca está em forçar.
              </p>
              <p>
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
                      <div className="formacao">
                        <Icon width={16} height={16} aria-hidden />
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
