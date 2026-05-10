"use client";

import Link from "next/link";
import { whatsappUrl } from "@app/_data/site";
import styles from "./TechnologyUs.module.scss";
import { useRevealOnScroll } from "../useRevealOnScroll";

const whatsappMessage = encodeURIComponent(
  "Hola, necesito solicitar asesoria para un proyecto."
);

const whatsappHref = `${whatsappUrl}?text=${whatsappMessage}`;

export default function TechnologyUs() {
  const { sectionRef, hasEnteredView } = useRevealOnScroll(0.2);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${hasEnteredView ? styles.sectionActive : ""}`}
      aria-labelledby="technology-us-title"
    >
      <div className={styles.container}>
        <div className={styles.panel}>
          <h2 id="technology-us-title" className="section-title">
            Tecnología confiable para fortalecer tu servicio de diagnóstico
          </h2>
          <p className={`section-copy ${styles.sectionText}`}>
            Te asesoramos para elegir la
            solución en imagenología médica
            más adecuada para tu institución, con acompañamiento técnico
            especializado en todo el Ecuador.
          </p>
          <Link
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className={styles.button}
          >
            Solicitar asesoría
          </Link>
        </div>
      </div>
    </section>
  );
}
