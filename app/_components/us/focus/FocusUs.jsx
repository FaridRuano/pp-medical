"use client";

import Image from "next/image";
import { Handshake } from "lucide-react";
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
          <h2 id="focus-us-title" className={`section-title ${styles.title}`}>
            Nuestro enfoque
          </h2>
          <p className={`section-copy ${styles.lead}`}>
            Más que proveedores de equipos, somos aliados estratégicos en cada
            implementación. Acompañamos cada proyecto desde la selección de la
            tecnología hasta su puesta en marcha, garantizando un
            funcionamiento adecuado y un soporte técnico continuo.
          </p>
        </header>

        <div className={styles.topRow}>
          <div className={styles.mediaCard}>
            <Image
              src="/imgs/pp-enfoque.jpg"
              alt="Equipo técnico de P&P Medical en implementación"
              width={1200}
              height={900}
              className={styles.image}
            />
          </div>

          <div className={styles.noteCard}>
            <p className={`body-copy ${styles.note}`}>
              Nuestra experiencia se evidencia en cada implementación y en el
              acompañamiento técnico que brindamos a nuestros clientes en todo
              el Ecuador.
            </p>
          </div>
        </div>

        <div className={styles.bottomPanel}>
          <div className={styles.panelIconWrap} aria-hidden="true">
            <Handshake size={44} strokeWidth={1.8} />
          </div>

          <div className={styles.panelIntro}>
            <h3 className={styles.panelTitle}>
              Tecnología confiable para fortalecer tu servicio de diagnóstico
            </h3>
          </div>

          <div className={styles.panelCopyWrap}>
            <p className={`body-copy ${styles.panelCopy}`}>
              Te asesoramos para elegir la solución en imagenología médica más
              adecuada para tu institución, con acompañamiento técnico
              especializado en todo el Ecuador.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
