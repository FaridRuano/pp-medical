import Image from "next/image";
import styles from "./HeroUs.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="about-hero-title">
      <div className={styles.media}>
        <Image
          src="/imgs/pp-medical-building.webp"
          alt="Edificio corporativo de P&P Medical"
          priority
          width={1272}
          height={800}
          className={styles.mediaImage}
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>Nosotros</span>

          <h1 id="about-hero-title" className={styles.title}>
            Desde 2013 <b>P&amp;P </b>Medical ha elevado el estándar de la imagenología
            en Ecuador.
          </h1>

          <p className={styles.text}>
            Impulsados por la pasión por la innovación y el compromiso con la
            salud, nos hemos posicionado como el socio estratégico de
            referencia para instituciones médicas y veterinarias en todo el
            territorio nacional.
          </p>
        </div>
      </div>
    </section>
  );
}
