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
          <h2 id="technology-us-title" className={styles.title}>
            <span className={styles.titleAccent}>Tecnología confiable</span>
            <span> para fortalecer tu servicio de diagnóstico</span>
          </h2>
          <p className={styles.copy}>
            Te asesoramos para elegir la
            <span className={styles.inlineAccent}> solución en imagenología médica </span>
            más adecuada para tu institución, con <strong>acompañamiento técnico
            especializado</strong> en todo el Ecuador.
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
