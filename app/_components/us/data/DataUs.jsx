"use client";

import { Building2, MapPinned, ScanLine } from "lucide-react";
import { useEffect, useState } from "react";
import styles from "./DataUs.module.scss";
import { useRevealOnScroll } from "../useRevealOnScroll";

const stats = [
  {
    value: 30,
    prefix: "+",
    title: "Ciudades",
    description: "Con cobertura activa a nivel nacional.",
    icon: MapPinned,
  },
  {
    value: 400,
    prefix: "+",
    title: "Instituciones de salud equipadas",
    description: "Aliados de confianza en medicina humana y veterinaria.",
    icon: Building2,
  },
  {
    value: 1000,
    prefix: "+",
    title: "Equipos entregados",
    description: "Tecnología instalada con acompañamiento técnico especializado.",
    icon: ScanLine,
  },
];

function formatStat(value) {
  return new Intl.NumberFormat("es-EC").format(value);
}

export default function DataUs() {
  const { sectionRef, hasEnteredView } = useRevealOnScroll(0.28);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    if (!hasEnteredView) return;

    let frameId = 0;
    const start = performance.now();
    const duration = 1800;

    const animate = (timestamp) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);

      setCounts(stats.map((item) => Math.round(item.value * eased)));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    frameId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [hasEnteredView]);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${hasEnteredView ? styles.sectionActive : ""}`}
      aria-labelledby="data-us-title"
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Alcance nacional</span>
          <h2 id="data-us-title" className={styles.title}>
            Presencia, confianza y resultados medibles en todo Ecuador.
          </h2>
        </header>

        <div className={styles.grid}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <article
                key={stat.title}
                className={styles.card}
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className={styles.iconWrap} aria-hidden="true">
                  <Icon size={24} strokeWidth={1.9} />
                </div>

                <p className={styles.value}>
                  <span>{stat.prefix}</span> {formatStat(counts[index])}
                </p>
                <h3 className={styles.cardTitle}>{stat.title}</h3>
                <p className={styles.cardText}>{stat.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
