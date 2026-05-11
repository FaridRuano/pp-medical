"use client";

import Image from "next/image";
import {
  BadgeCheck,
  Headset,
  ShieldCheck,
  Stars,
} from "lucide-react";
import styles from "./ExperienceUs.module.scss";
import { useRevealOnScroll } from "../useRevealOnScroll";

const highlights = [
  {
    icon: ShieldCheck,
    label: "Calidad garantizada",
  },
  {
    icon: Stars,
    label: "Marcas internacionales",
  },
  {
    icon: BadgeCheck,
    label: "Respaldo especializado",
  },
  {
    icon: Headset,
    label: "Soporte técnico continuo",
  },
];

export default function ExperienceUs() {
  const { sectionRef, hasEnteredView } = useRevealOnScroll(0.2);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${hasEnteredView ? styles.sectionActive : ""}`}
      aria-labelledby="experience-us-title"
    >
      <div className={styles.container}>
        <div className={styles.layout}>
          <header className={styles.header}>
            <p className={styles.eyebrow}>EXPERIENCIA Y RESPALDO EN</p>
            <h2 id="experience-us-title" className={styles.title}>
              Imagenología médica
            </h2>

            <p className={`section-copy ${styles.copy}`}>
              En P&amp;P Medical nos dedicamos a la importación y distribución de
              equipos de diagnóstico por imagen, trabajando con marcas
              internacionales reconocidas por su calidad y confiabilidad.
            </p>

            <p className={`section-copy ${styles.copy}`}>
              Nuestra experiencia nos permite acompañar cada proyecto con una
              visión técnica, comercial y operativa orientada a resultados
              confiables. Brindamos asesoría integral, instalación y
              capacitación, con soporte técnico especializado, garantizando un
              funcionamiento óptimo y la continuidad operativa en cada
              implementación.
            </p>
          </header>

          <div className={styles.mediaWrap}>
            <div className={styles.mediaCard}>
              <Image
                src="/imgs/us-experince-backup.jpg"
                alt="Instalaciones y equipamiento médico de P&P Medical"
                width={1600}
                height={1100}
                className={styles.image}
              />
            </div>

            <div className={styles.featurePanel}>
              {highlights.map(({ icon: Icon, label }) => (
                <div key={label} className={styles.featureItem}>
                  <span className={styles.featureIcon} aria-hidden="true">
                    <Icon size={24} strokeWidth={1.9} />
                  </span>
                  <p className={styles.featureLabel}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
