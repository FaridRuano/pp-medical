"use client";

import { Building2, MapPinned, ScanLine } from "lucide-react";
import { useEffect, useState } from "react";
import styles from "./DataUs.module.scss";

const stats = [
  {
    value: 30,
    prefix: "+",
    title: "Ciudades atendidas",
    icon: MapPinned,
  },
  {
    value: 400,
    prefix: "+",
    title: "Instituciones de salud equipadas",
    icon: Building2,
  },
  {
    value: 1000,
    prefix: "+",
    title: "Equipos entregados",
    icon: ScanLine,
  },
];

function formatStat(value) {
  return new Intl.NumberFormat("es-EC").format(value);
}

function CountUp({ value, prefix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let cancelled = false;
    let frameId = null;
    const duration = 2200;

    const step = (startTime) => {
      if (cancelled) return;

      const tick = (currentTime) => {
        if (cancelled) return;

        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        setCount(Math.round(value * easedProgress));

        if (progress < 1) {
          frameId = window.requestAnimationFrame(tick);
        }
      };

      frameId = window.requestAnimationFrame(tick);
    };

    frameId = window.requestAnimationFrame(step);

    return () => {
      cancelled = true;
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [value]);

  return (
    <>
      <span>{prefix}</span> {formatStat(count)}
    </>
  );
}

export default function DataUs() {
  return (
    <section className={styles.section} aria-label="Cobertura y resultados">
      <div className={styles.container}>
        <div className={styles.grid}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <article
                key={stat.title}
                className={styles.card}
              >
                <div className={styles.iconWrap} aria-hidden="true">
                  <Icon size={24} strokeWidth={1.9} />
                </div>

                <p className={styles.value}>
                  <CountUp value={stat.value} prefix={stat.prefix} />
                </p>
                <h3 className={`body-copy ${styles.cardTitle}`}>{stat.title}</h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
