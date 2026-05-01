"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { brands } from "@app/_data/site";
import styles from "./HomeBrands.module.scss";

const sliderBrands = [...brands, ...brands];

export default function HomeBrands() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;

    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsVisible(true);
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
      className={`${styles.section} ${isVisible ? styles.sectionActive : ""}`}
      aria-label="Marcas aliadas"
    >
      <div className={styles.header}>
        <h2 className={styles.title}>Marcas Aliadas</h2>
        <p className={styles.copy}>
          Trabajamos con marcas lideres a nivel mundial, seleccionadas por su
          calidad, innovacion y respaldo en imagenologia medica.
        </p>
      </div>
      <div className={styles.track}>
        <div className={styles.slider}>
          {sliderBrands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className={styles.logoItem}
              aria-hidden={index >= brands.length}
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={200}
                height={100}
                className={styles.logo}
              />
            </div>
          ))}
        </div>
      </div>
    </section >
  );
}
