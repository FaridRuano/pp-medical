"use client";

import Image from "next/image";
import styles from "./FocusUs.module.scss";
import { useRevealOnScroll } from "../useRevealOnScroll";

export default function FocusUs() {
  const { sectionRef, hasEnteredView } = useRevealOnScroll(0.18);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${hasEnteredView ? styles.sectionActive : ""}`}
      aria-labelledby="focus-us-title"
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 id="focus-us-title" className={styles.title}>
            Nuestro <span className={styles.titleAccent}>enfoque</span>
          </h2>
          <p className={styles.intro}>
            Mas que proveedores de equipos, somos <strong>aliados estratégicos</strong> en
            cada implementación. Acompañamos cada proyecto desde la
            <span className={styles.inlineAccent}> selección de la tecnología </span>
            hasta su puesta en marcha, garantizando un funcionamiento adecuado
            y un <strong>soporte técnico continuo</strong>.
          </p>
        </header>

        <div className={styles.grid}>
          <div className={styles.mediaCard}>
            <Image
              src="/imgs/pp-enfoque.jpeg"
              alt="Equipo técnico de P&P Medical en implementación"
              width={1200}
              height={900}
              className={styles.image}
            />
          </div>

          <div className={styles.copyCard}>
            <p className={styles.copy}>
              Nuestra experiencia se evidencia en cada implementación y en el
              acompañamiento técnico que brindamos a nuestros clientes en todo
              el Ecuador.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
