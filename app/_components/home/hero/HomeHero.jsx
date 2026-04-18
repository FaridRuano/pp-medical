import styles from "./HomeHero.module.scss";

export default function HomeHero() {
  return (
    <section className={styles.hero} aria-labelledby="home-hero-title">
      <div className={styles.inner}>
        <h1 id="home-hero-title" className={styles.title}>
          <span className={styles.line}>
            <span className={styles.lead}>Tecnología avanzada</span>{" "}
            <span>en</span>{" "}
            <span className={styles.accent}>imagenología</span>{" "}
            <span>para</span>{" "}
            <span className={styles.emphasis}>diagnósticos precisos</span>{" "}
            <span>y confiables.</span>
          </span>
          <span className={styles.line}>
            <span>Soluciones para</span>{" "}
            <span className={styles.accent}>medicina humana</span>{" "}
            <span>y</span>{" "}
            <span className={styles.support}>veterinaria</span>{" "}
            <span>en todo Ecuador.</span>
          </span>
        </h1>
      </div>
    </section>
  );
}
