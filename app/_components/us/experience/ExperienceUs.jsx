"use client";

import styles from "./ExperienceUs.module.scss";
import { useRevealOnScroll } from "../useRevealOnScroll";

export default function ExperienceUs() {
  const { sectionRef, hasEnteredView } = useRevealOnScroll(0.2);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${hasEnteredView ? styles.sectionActive : ""}`}
      aria-labelledby="experience-us-title"
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 id="experience-us-title" className="section-title">
            Experiencia y respaldo en imagenología médica
          </h2>
          <p className={`section-copy ${styles.sectionText}`}>
            En P&amp;P Medical nos dedicamos a la importación y
            distribución de equipos de diagnóstico por imagen,
            trabajando con marcas internacionales reconocidas
            por su calidad y confiabilidad.
          </p>
          <p className={`section-copy ${styles.sectionText}`}>
            Nuestra experiencia nos permite acompañar cada proyecto con una
            visión técnica, comercial y operativa
            orientada a resultados confiables.
            Brindamos asesoría integral, instalación y capacitación,
            con soporte técnico especializado, garantizando un funcionamiento
            optimo y la continuidad operativa en cada
            implementación.
          </p>
        </header>
      </div>
    </section>
  );
}
