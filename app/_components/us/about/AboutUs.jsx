"use client";

import Image from "next/image";
import styles from "./AboutUs.module.scss";
import { brands } from "@app/_data/site";
import { useRevealOnScroll } from "../useRevealOnScroll";

export default function About() {
  const mobileBrands = [...brands, ...brands];
  const { sectionRef, hasEnteredView } = useRevealOnScroll(0.22);

  return (
    <section
      ref={sectionRef}
      className={`${styles.about} ${hasEnteredView ? styles.aboutActive : ""}`}
      aria-labelledby="about-section-title"
    >
      <div className={styles.container}>
        <div className={styles.copy}>
          <h2 id="about-section-title" className={styles.title}>
            Contamos con un portafolio <b>premium</b> compuesto por marcas
            líderes mundiales.
          </h2>
        </div>

        <div className={styles.brandGrid} aria-label="Marcas aliadas">
          {brands.map((brand) => (
            <article key={brand.name} className={styles.brandCard}>
              <div className={styles.brandLogoWrap}>
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={200}
                  height={100}
                  className={styles.brandLogo}
                />
              </div>
            </article>
          ))}
        </div>

        <div className={styles.mobileSlider} aria-label="Marcas aliadas">
          <div className={styles.mobileTrack}>
            {mobileBrands.map((brand, index) => (
              <article
                key={`${brand.name}-${index}`}
                className={`${styles.brandCard} ${styles.mobileBrandCard}`}
                aria-hidden={index >= brands.length}
              >
                <div className={styles.brandLogoWrap}>
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={200}
                    height={100}
                    className={styles.brandLogo}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>

        <p className={styles.text}>
          Tecnología avanzada, servicio técnico especializado y más de dos
          décadas de experiencia nos respaldan. Porque en P&amp;P Medical
          sabemos que una imagen clara puede cambiarlo todo.
        </p>
      </div>
    </section>
  );
}
