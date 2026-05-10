"use client";

import { Building2, MapPinned, ScanLine } from "lucide-react";
import { useEffect, useState } from "react";
import styles from "./DataUs.module.scss";

const stats = [
  {
    value: 30,
    prefix: "+",
    title: "Ciudades",
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
    const increment = value <= 50 ? 1 : Math.max(1, Math.floor(value / 80));
    const delay = 16;

    const step = (currentValue) => {
      if (cancelled) return;

      const nextValue = Math.min(currentValue + increment, value);
      setCount(nextValue);

      if (nextValue < value) {
        window.setTimeout(() => {
          step(nextValue);
        }, delay);
      }
    };

    window.setTimeout(() => {
      step(0);
    }, 0);

    return () => {
      cancelled = true;
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
