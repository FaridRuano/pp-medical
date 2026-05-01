import styles from "./HeroUs.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="about-hero-title">
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>Nosotros</span>

          <h1 id="about-hero-title" className={styles.title}>
            Impulsando la imagenología en Ecuador desde 2013
          </h1>

          <p className={styles.text}>
            Nos especializamos en tecnologia para imagenología médica, con
            soluciones para instituciones de salud públicas y privadas y
            respaldo técnico en todo el país.
          </p>
        </div>
      </div>
    </section>
  );
}
