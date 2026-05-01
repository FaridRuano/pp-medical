import { whatsappUrl } from "@app/_data/site";
import styles from "./HomeHero.module.scss";

const whatsappMessage = encodeURIComponent(
  "Hola, deseo cotizar un equipo!"
);

const whatsappHref = `${whatsappUrl}?text=${whatsappMessage}`;

export default function HomeHero() {
  return (
    <section className={styles.hero} aria-labelledby="home-hero-title">
      <div className={styles.media} aria-hidden="true">
        <div className={`${styles.imageLayer} ${styles.imageOne}`} />
        <div className={`${styles.imageLayer} ${styles.imageTwo}`} />
        <div className={styles.overlay} />
      </div>

      <div className={styles.inner}>
        <div className={styles.content}>
          <h1 id="home-hero-title" className={styles.title}>
            Tecnologia en imagenologia medica para diagnosticos precisos y
            confiables
          </h1>

          <p className={styles.copy}>
            Soluciones para medicina humana y veterinaria con soporte tecnico
            especializado en todo el Ecuador.
          </p>

          <a
            href={whatsappHref}
            className={styles.cta}
            target="_blank"
            rel="noreferrer"
          >
            Solicitar cotizacion
          </a>
        </div>
      </div>
    </section>
  );
}
