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
          <h2 id="experience-us-title" className={styles.title}>
            <span>Experiencia y respaldo en</span>
            <span className={styles.titleAccent}>imagenología médica</span>
          </h2>
          <p className={styles.lead}>
            En <strong>P&amp;P Medical</strong> nos dedicamos a la importación y
            distribución de <span className={styles.inlineAccent}>equipos de diagnóstico por imagen</span>,
            trabajando con <strong>marcas internacionales</strong> reconocidas
            por su calidad y confiabilidad.
          </p>
          <p className={styles.lead}>
            Nuestra experiencia nos permite acompañar cada proyecto con una
            <strong> visión técnica, comercial y operativa </strong>
            orientada a <span className={styles.inlineAccent}>resultados confiables</span>.
            Brindamos <strong>asesoría integral, instalación y capacitación</strong>,
            con soporte técnico especializado, garantizando un funcionamiento
            optimo y la continuidad operativa en cada
            implementación.
          </p>
        </header>
      </div>
    </section>
  );
}
