"use client";

import { motion } from "framer-motion";
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

export default function Abordagem() {
  return (
    <section className="abordagem" id="abordagem">
      <div className="container">
        <Reveal>
          <div className="section-tag">Minha Abordagem</div>
          <h2 className="section-title">
            Nutrição funcional que
            <br />
            respeita quem seu filho é.
          </h2>
        </Reveal>
        <div className="abordagem-inner">
          <StaggerContainer className="steps" stagger={0.12}>
            {steps.map((step) => (
              <StaggerItem key={step.num}>
                <div className="step">
                  <div className="step-num">{step.num}</div>
                  <div className="step-content">
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <Reveal delay={0.15} y={32}>
            <motion.div
              className="abordagem-highlight"
              whileInView={{ scale: [0.98, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="watermark">🌿</div>
              <h3>Sem dietas restritivas. Sem punição à mesa. Sem mágica.</h3>
              <p>
                A nutrição funcional trabalha com o corpo e a mente da criança,
                identificando inflamações, disbiose intestinal, deficiências
                específicas e hipersensibilidades — tudo isso com ciência, mas com
                acolhimento.
              </p>
              <p className="abordagem-highlight-extra">
                O objetivo não é ter uma criança que &quot;come tudo&quot;. É ter
                uma criança nutrida, um ambiente familiar mais leve e uma mãe que
                respira fundo.
              </p>
              <div className="pill-list">
                {pills.map((pill, index) => (
                  <motion.span
                    key={pill}
                    className="pill"
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
