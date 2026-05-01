"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { deliveries } from "@app/_data/site";
import styles from "./HomeClients.module.scss";

const loopedDeliveries = [...deliveries, ...deliveries];

export default function HomeClients() {
  const sectionRef = useRef(null);
  const [hasEnteredView, setHasEnteredView] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;

    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setHasEnteredView(true);
        observer.disconnect();
      },
      { threshold: 0.2 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${hasEnteredView ? styles.sectionActive : ""}`}
      aria-labelledby="home-clients-title"
    >
      <div className={styles.shell}>
        <header className={styles.header}>
          <h2 id="home-clients-title" className={styles.title}>
            <span>Clientes que confian en</span>
            <span className={styles.titleAccent}>P&amp;P Medical</span>
          </h2>
          <p className={styles.copy}>
            Equipos instalados y operativos en instituciones de salud en todo
            el Ecuador.
          </p>
        </header>

        <div className={styles.rowViewport}>
          <div className={styles.rowTrack}>
            {loopedDeliveries.map((item, index) => (
              <Link
                key={`${item.href}-${index}`}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className={styles.card}
                aria-label={`Ver publicacion de Instagram ${(index % deliveries.length) + 1}`}
              >
                <span className={styles.cardShadow} aria-hidden="true" />
                <div className={styles.cardMedia}>
                  <Image
                    src={item.image}
                    alt={`Publicacion de cliente ${(index % deliveries.length) + 1}`}
                    fill
                    sizes="(max-width: 699px) 72vw, (max-width: 1099px) 34vw, 18vw"
                    className={styles.cardImage}
                  />
                </div>
                <div className={styles.cardOverlay}>
                  <div className={styles.cardMeta}>
                    <span className={styles.cardTag}>Instagram</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.footer}>
          <Link
            href="https://www.instagram.com/pypmedical.ec/"
            target="_blank"
            rel="noreferrer"
            className={styles.instagramButton}
          >
            Ver más entregas
          </Link>
        </div>
      </div>
    </section>
  );
}
