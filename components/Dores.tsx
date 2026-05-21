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
    title:
      '"Ele não suporta texturas, cheiros ou a comida se misturando."',
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

export default function Dores() {
  return (
    <section className="dores" id="dores">
      <div className="container">
        <Reveal>
          <div className="section-tag">Você se identifica?</div>
          <h2 className="section-title">
            Se você chegou até aqui,
            <br />
            provavelmente já viveu isso...
          </h2>
          <p className="section-subtitle">
            Muitas mães passam anos nessa luta silenciosa. Você não está sozinha
            — e isso tem solução.
          </p>
        </Reveal>
        <StaggerContainer className="dores-grid" stagger={0.08}>
          {dores.map((dor) => {
            const Icon = dor.icon;
            return (
              <StaggerItem key={dor.title}>
                <motion.div
                  className="dor-card"
                  whileHover={{ y: -4, transition: { duration: 0.25 } }}
                >
                  <div className={`dor-icon ${dor.iconClass}`}>
                    <Icon width={22} height={22} aria-hidden />
                  </div>
                  <h3>{dor.title}</h3>
                  <p>{dor.description}</p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
