"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Award, CheckCircle, Heart, Leaf } from "lucide-react";
import { IMAGES } from "@/lib/images";

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
    <section className="hero">
      <div className="hero-inner">
        <motion.div
          className="hero-content"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.div className="hero-badge" variants={fadeUp}>
            <Leaf width={14} height={14} aria-hidden />
            Nutrição Funcional Materno-Infantil
          </motion.div>
          <motion.h1 variants={fadeUp}>
            Transforme a hora da refeição em um momento de{" "}
            <em>conexão</em>, não de tensão.
          </motion.h1>
          <motion.p variants={fadeUp}>
            Especialista em crianças com{" "}
            <strong>TEA, TDAH e Seletividade Alimentar</strong>. Uma abordagem
            que respeita o tempo, a neurodiversidade e a individualidade do seu
            filho.
          </motion.p>
          <motion.div className="hero-ctas" variants={fadeUp}>
            <Link href="#contato" className="btn btn-primary btn-lg">
              Quero agendar uma consulta →
            </Link>
            <Link href="#abordagem" className="btn btn-outline btn-lg">
              Como funciona
            </Link>
          </motion.div>
          <motion.div className="hero-trust" variants={fadeUp}>
            <div className="trust-item">
              <CheckCircle width={16} height={16} aria-hidden />
              +400 famílias atendidas
            </div>
            <div className="trust-item">
              <CheckCircle width={16} height={16} aria-hidden />
              Sem dietas punitivas
            </div>
            <div className="trust-item">
              <CheckCircle width={16} height={16} aria-hidden />
              Atendimento online e presencial
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-img-wrap"
          variants={scaleIn}
          initial="hidden"
          animate="show"
        >
          <motion.div
            className="hero-card"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, ease }}
          >
            <div className="hero-photo">
              <Image
                src={IMAGES.hero}
                alt="Mãe e criança em um momento acolhedor durante a refeição"
                fill
                priority
                sizes="(max-width: 900px) 300px, 380px"
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="hero-card-name">Dra. Ana Luz Ferreira</div>
            <div className="hero-card-crn">CRN 3 · 00000-SP</div>
          </motion.div>
          <motion.div
            className="floating-badge fb1"
            animate={{ y: [0, -6, 0] }}
            transition={floatTransition}
          >
            <Heart width={14} height={14} aria-hidden />
            Abordagem empática
          </motion.div>
          <motion.div
            className="floating-badge fb2"
            animate={{ y: [0, -6, 0] }}
            transition={{ ...floatTransition, delay: 1.2 }}
          >
            <Award width={14} height={14} aria-hidden />
            Pós em TEA & TDAH
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
