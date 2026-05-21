"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { IMAGES, unsplash } from "@/lib/images";

type Depoimento = {
  text: string;
  name: string;
  role: string;
  image: string;
  avatar: string;
};

const depoimentos: Depoimento[] = [
  {
    text: "Eu chorava antes de cada almoço. Meu filho de 5 anos com TEA só comia nugget e pão branco. Em 4 meses com a Dra. Ana Luz, ele já aceita frango grelhado, cenoura cozida e arroz. Parece milagre, mas é ciência e muita paciência.",
    name: "Mariana F.",
    role: "Mãe do Enzo, 5 anos · TEA Nível 1",
    image: IMAGES.depoimentos[0],
    avatar: unsplash("photo-1503676260728-1c00da094a0b", 96, 96),
  },
  {
    text: "Minha filha tinha crises diárias que eu não conseguia explicar. A Dra. identificou uma disbiose intestinal que estava afetando o comportamento dela. Com o tratamento nutricional, as crises diminuíram em mais de 70%. Isso não tem preço.",
    name: "Renata C.",
    role: "Mãe da Isabela, 7 anos · TDAH",
    image: IMAGES.depoimentos[1],
    avatar: unsplash("photo-1544776193-352d25ca82cd", 96, 96),
  },
  {
    text: "O que mais me surpreendeu foi a forma como a Dra. Ana Luz incluiu meu filho no processo. Ele passou a ter curiosidade pela comida, não medo. Nunca ninguém havia olhado pra ele assim — como uma criança que precisa de suporte, não de correção.",
    name: "Luciana S.",
    role: "Mãe do Miguel, 8 anos · Seletividade Severa",
    image: IMAGES.depoimentos[2],
    avatar: unsplash("photo-1529156069898-49953e39b3ac", 96, 96),
  },
];

export default function Depoimentos() {
  return (
    <section className="depoimentos" id="depoimentos">
      <div className="container">
        <Reveal>
          <div className="section-tag">O que as mães dizem</div>
          <h2 className="section-title">
            Famílias que encontraram
            <br />
            leveza à mesa.
          </h2>
        </Reveal>
        <StaggerContainer className="dep-grid" stagger={0.12}>
          {depoimentos.map((dep) => (
            <StaggerItem key={dep.name}>
              <motion.div
                className="dep-card"
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
              >
                <div className="dep-photo">
                  <Image
                    src={dep.image}
                    alt={`Família acolhedora — ${dep.name}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 360px"
                    className="object-cover rounded-t-2xl"
                  />
                </div>
                <div className="dep-quote">&quot;</div>
                <div className="stars">★★★★★</div>
                <p className="dep-text">{dep.text}</p>
                <div className="dep-author">
                  <div className="dep-avatar">
                    <Image
                      src={dep.avatar}
                      alt={dep.name}
                      fill
                      sizes="44px"
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div className="dep-author-info">
                    <strong>{dep.name}</strong>
                    <span>{dep.role}</span>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
