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
            En <strong>P&amp;P Medical</strong> nos dedicamos a la importación y
            distribución de <span className={styles.inlineAccent}>equipos de diagnóstico por imagen</span>,
            trabajando con <strong>marcas internacionales</strong> reconocidas
            por su calidad y confiabilidad.
          </p>
          <p className={`section-copy ${styles.sectionText}`}>
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
