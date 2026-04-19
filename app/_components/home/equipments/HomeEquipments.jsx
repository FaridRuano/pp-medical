"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { productCatalog } from "@app/_data/catalog";
import styles from "./HomeEquipments.module.scss";

const featuredEquipments = productCatalog.filter(
  (product) => product.featured && product.image
);

const COUNTER_TARGET = 1000;

function getCardsPerView(width) {
  if (width < 700) return 1;
  if (width < 1100) return 2;
  return 3;
}

export default function HomeEquipments() {
  const sectionRef = useRef(null);
  const autoplayTimeoutRef = useRef(null);
  const autoplayIntervalRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [counterValue, setCounterValue] = useState(0);
  const [hasEnteredView, setHasEnteredView] = useState(false);

  useEffect(() => {
    const syncCardsPerView = () => {
      setCardsPerView(getCardsPerView(window.innerWidth));
    };

    syncCardsPerView();
    window.addEventListener("resize", syncCardsPerView);

    return () => {
      window.removeEventListener("resize", syncCardsPerView);
    };
  }, []);

  useEffect(() => {
    const node = sectionRef.current;

    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setHasEnteredView(true);
        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!hasEnteredView) return;

    let frameId = 0;
    const start = performance.now();
    const duration = 2200;

    const animate = (timestamp) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);

      setCounterValue(Math.round(COUNTER_TARGET * eased));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    frameId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [hasEnteredView]);

  const maxIndex = Math.max(featuredEquipments.length - cardsPerView, 0);
  const safeActiveIndex = Math.min(activeIndex, maxIndex);
  const canGoBack = safeActiveIndex > 0;
  const canGoForward = safeActiveIndex < maxIndex;

  const stopAutoplay = useCallback(() => {
    if (autoplayTimeoutRef.current) {
      window.clearTimeout(autoplayTimeoutRef.current);
      autoplayTimeoutRef.current = null;
    }

    if (autoplayIntervalRef.current) {
      window.clearInterval(autoplayIntervalRef.current);
      autoplayIntervalRef.current = null;
    }
  }, []);

  const stepForward = useCallback(() => {
    setActiveIndex((current) => {
      if (current >= maxIndex) return 0;
      return current + 1;
    });
  }, [maxIndex]);

  const startAutoplay = useCallback((delay = 1500) => {
    stopAutoplay();

    if (!hasEnteredView || maxIndex <= 0) return;

    autoplayTimeoutRef.current = window.setTimeout(() => {
      stepForward();
      autoplayIntervalRef.current = window.setInterval(stepForward, 3000);
    }, delay);
  }, [hasEnteredView, maxIndex, stepForward, stopAutoplay]);

  useEffect(() => {
    startAutoplay(1500);

    return () => {
      stopAutoplay();
    };
  }, [hasEnteredView, maxIndex, startAutoplay, stopAutoplay]);

  const handlePrevious = () => {
    stopAutoplay();
    setActiveIndex((current) => Math.max(current - 1, 0));
    startAutoplay(3000);
  };

  const handleNext = () => {
    stopAutoplay();
    setActiveIndex((current) => Math.min(current + 1, maxIndex));
    startAutoplay(3000);
  };

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${hasEnteredView ? styles.sectionActive : ""}`}
      aria-labelledby="home-equipments-title"
    >
      <div className={styles.shell}>
        <div className={styles.header}>
          <div className={styles.counterBlock}>
            <div className={styles.counterRow}>
              <strong className={styles.counter}>+ {counterValue}</strong>
              <Image
                src="/icons/ecuador.webp"
                alt="Bandera de Ecuador"
                width={86}
                height={86}
                className={styles.flag}
              />
            </div>
            <p className={styles.counterCopy}>
              Entregas, instalaciones y capacitaciones en todo Ecuador.
            </p>
          </div>
        </div>
        <div className={styles.viewportFrame}>
          <div
            className={styles.viewport}
            onMouseEnter={stopAutoplay}
            onMouseLeave={() => startAutoplay(5000)}
          >
            <div
              className={styles.track}
              style={{
                width: `${(featuredEquipments.length * 100) / cardsPerView}%`,
                transform: `translate3d(calc(-${safeActiveIndex} * (100% / ${featuredEquipments.length})), 0, 0)`,
              }}
            >
              {featuredEquipments.map((equipment) => (
                <article
                  key={equipment.slug}
                  className={styles.slide}
                  style={{ flexBasis: `${100 / featuredEquipments.length}%` }}
                >
                  <Link href={`/equipos/${equipment.slug}`} className={styles.card}>
                    <div className={styles.media}>
                      <Image
                        src={equipment.image}
                        alt={equipment.name}
                        width={400}
                        height={400}
                        className={styles.image}
                      />
                    </div>
                    <div className={styles.cardBody}>
                      <span className={styles.cardLabel}>Equipo destacado</span>
                      <h3 className={styles.name}>{equipment.name}</h3>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.progress} aria-hidden="true">
            {featuredEquipments.map((equipment, index) => (
              <span
                key={equipment.slug}
                className={`${styles.progressDot} ${
                  index === safeActiveIndex ? styles.progressDotActive : ""
                }`}
              />
            ))}
          </div>

          <div className={styles.controls} aria-label="Controles del carrusel">
            <button
              type="button"
              className={styles.controlButton}
              onClick={handlePrevious}
              disabled={!canGoBack}
              aria-label="Ver equipos anteriores"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              className={styles.controlButton}
              onClick={handleNext}
              disabled={!canGoForward}
              aria-label="Ver mas equipos"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
