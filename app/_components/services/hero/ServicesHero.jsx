import styles from "./ServicesHero.module.scss";

export default function ServicesHero() {
  return (
    <section className={styles.hero} aria-labelledby="services-hero-title">
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>Servicios</span>
          <h1 id="services-hero-title" className={styles.title}>
            Acompañamos cada equipo desde la entrega hasta su rendimiento
            continuo en el entorno clínico.
          </h1>
          <p className={styles.text}>
            Nuestra propuesta no termina con la compra. Integramos logística,
            instalación, capacitación y soporte técnico para que cada sistema
            funcione con seguridad, confianza y continuidad operativa.
          </p>
        </div>
      </div>
    </section>
  );
}
