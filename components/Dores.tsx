"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Frown,
  Moon,
  Palette,
  ScanFace,
  ShieldAlert,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";

type IconClass =
  | "ic-aqua"
  | "ic-blue"
  | "ic-green"
  | "ic-pink"
  | "ic-yellow"
  | "ic-purple";

type DorItem = {
  icon: LucideIcon;
  iconClass: IconClass;
  title: string;
  description: string;
};

const dores: DorItem[] = [
  {
    icon: Palette,
    iconClass: "ic-aqua",
    title: '"Meu filho só come alimentos da mesma cor ou marca."',
    description:
      "Qualquer variação gera pânico ou recusa total. O cardápio travado vira uma fonte constante de ansiedade para toda a família.",
  },
  {
    icon: Frown,
    iconClass: "ic-blue",
    title: '"A hora de comer é sempre um campo de batalha."',
    description:
      "Choro, birra, fuga da cadeira — você sente que está falhando toda vez que coloca o prato na mesa.",
  },
  {
    icon: ScanFace,
    iconClass: "ic-green",
    title: '"Ele não suporta texturas, cheiros ou a comida se misturando."',
    description:
      "Sensibilidades sensoriais que outros não entendem e que excluem seu filho de almoços em família e festas de aniversário.",
  },
  {
    icon: Moon,
    iconClass: "ic-pink",
    title:
      '"Tenho medo que a alimentação ruim esteja prejudicando o desenvolvimento dele."',
    description:
      "A preocupação com carências nutricionais tira seu sono — e os exames de sangue só confirmam o que você já sentia.",
  },
  {
    icon: ShieldAlert,
    iconClass: "ic-yellow",
    title: '"Já tentei de tudo e nada funcionou."',
    description:
      "Dietas da internet, receitas criativas, esconder vegetais na comida... Você se sente esgotada e sem saída.",
  },
  {
    icon: Brain,
    iconClass: "ic-purple",
    title:
      '"Ninguém me explica a conexão entre a alimentação e o comportamento dele."',
    description:
      "Agitação, sono ruim, crises frequentes — você intui que a comida influencia, mas não sabe por onde começar.",
  },
];

/* ── Card de dor ─────────────────────────────────────────────────── */
function DorCard({ dor }: { dor: DorItem }) {
  const Icon = dor.icon;
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="dor-card"
      style={{
        backgroundColor: "var(--color-bg-card)",
        border: "1px solid var(--color-border)",
        borderRadius: "10px",
        padding: "1.75rem",
        boxShadow: hovered
          ? "0 8px 24px rgba(45,74,107,0.12)"
          : "0 2px 8px rgba(45,74,107,0.06)",
        transition: "box-shadow 0.25s ease",
      }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* 5 · Ícone unificado */}
      <div
        className="dor-icon"
        style={{
          backgroundColor: "var(--color-primary-light)",
          borderRadius: "8px",
          padding: "0.5rem",
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon
          width={20}
          height={20}
          aria-hidden
          style={{ color: "var(--color-primary)" }}
        />
      </div>

      {/* 6 · Título do card */}
      <h3
        style={{
          color: "var(--color-heading)",
          fontWeight: 600,
          fontSize: "0.95rem",
        }}
      >
        {dor.title}
      </h3>

      {/* 7 · Descrição do card */}
      <p
        style={{
          color: "var(--color-muted)",
          fontSize: "0.875rem",
          lineHeight: 1.7,
        }}
      >
        {dor.description}
      </p>
    </motion.div>
  );
}

/* ── Carrossel mobile ─────────────────────────────────────────────── */
function DoresCarousel({ items }: { items: DorItem[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveIndex = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const slides = track.querySelectorAll<HTMLElement>("[data-slide]");
    const trackCenter = track.scrollLeft + track.clientWidth / 2;

    let closest = 0;
    let minDistance = Infinity;

    slides.forEach((slide, index) => {
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
      const distance = Math.abs(trackCenter - slideCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closest = index;
      }
    });

    setActiveIndex(closest);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateActiveIndex();
    track.addEventListener("scroll", updateActiveIndex, { passive: true });
    window.addEventListener("resize", updateActiveIndex);

    return () => {
      track.removeEventListener("scroll", updateActiveIndex);
      window.removeEventListener("resize", updateActiveIndex);
    };
  }, [updateActiveIndex]);

  const scrollTo = (index: number) => {
    const track = trackRef.current;
    const slide = track?.querySelector<HTMLElement>(`[data-slide="${index}"]`);
    if (!slide || !track) return;

    const offset =
      slide.offsetLeft - (track.clientWidth - slide.offsetWidth) / 2;

    track.scrollTo({ left: offset, behavior: "smooth" });
    setActiveIndex(index);
  };

  return (
    <div className="dores-carousel" aria-roledescription="carousel">
      <div
        ref={trackRef}
        className="dores-carousel-track"
        aria-live="polite"
      >
        {items.map((dor, index) => (
          <div
            key={dor.title}
            className="dores-carousel-slide"
            data-slide={index}
            aria-roledescription="slide"
            aria-label={`${index + 1} de ${items.length}`}
          >
            <DorCard dor={dor} />
          </div>
        ))}
      </div>

      {/* 8 · Dots com cores do novo sistema */}
      <div className="dores-carousel-dots" role="tablist" aria-label="Cards">
        {items.map((dor, index) => (
          <button
            key={dor.title}
            type="button"
            role="tab"
            className={`dores-carousel-dot${index === activeIndex ? " is-active" : ""}`}
            style={{
              backgroundColor:
                index === activeIndex
                  ? "var(--color-primary)"
                  : "var(--color-border)",
            }}
            aria-label={`Ir para o card ${index + 1}`}
            aria-selected={index === activeIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Seção principal ──────────────────────────────────────────────── */
export default function Dores() {
  return (
    <section
      className="dores"
      id="dores"
      style={{ backgroundColor: "var(--color-bg-alt)" }}
    >
      <div className="container">
        <Reveal>
          {/* 9 · Tag da seção */}
          <div
            className="section-tag"
            style={{
              backgroundColor: "var(--color-accent-light)",
              color: "var(--color-accent)",
              border: "1px solid var(--color-accent)",
              borderRadius: "999px",
            }}
          >
            Você se identifica?
          </div>

          {/* 2 · Título */}
          <h2
            className="section-title"
            style={{ color: "var(--color-heading)" }}
          >
            Se você chegou até aqui,
            <br />
            provavelmente já viveu isso...
          </h2>

          {/* 3 · Subtítulo */}
          <p
            className="section-subtitle"
            style={{ color: "var(--color-muted)" }}
          >
            Muitas mães passam anos nessa luta silenciosa. Você não está sozinha
            — e isso tem solução.
          </p>
        </Reveal>

        {/* Grid desktop */}
        <StaggerContainer
          className="dores-grid dores-grid--desktop"
          stagger={0.08}
        >
          {dores.map((dor) => (
            <StaggerItem key={dor.title}>
              <DorCard dor={dor} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Carrossel mobile */}
        <DoresCarousel items={dores} />
      </div>
    </section>
  );
}
