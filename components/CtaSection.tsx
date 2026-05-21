"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";

export default function CtaSection() {
  return (
    <section className="cta-section" id="contato">
      <div className="container">
        <Reveal>
          <div className="section-tag cta-tag">Dê o primeiro passo</div>
          <h2>
            Seu filho merece uma relação
            <br />
            leve com a comida.
          </h2>
          <p>
            Agende uma consulta e vamos, juntos, entender o que o corpo do seu
            filho está pedindo — com ciência, empatia e sem julgamentos.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <motion.a
            href="https://wa.me/5511999999999"
            className="btn btn-white btn-lg"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            💬 Agendar pelo WhatsApp
          </motion.a>
          <p className="cta-footnote">
            Atendimento online para todo o Brasil · Presencial em São Paulo/SP
          </p>
        </Reveal>
      </div>
    </section>
  );
}
