import Link from "next/link";
import { whatsappUrl } from "@app/_data/site";
import styles from "./ServicesHero.module.scss";

const whatsappMessage = encodeURIComponent(
  "Hola, necesito hablar con un asesor."
);

const whatsappHref = `${whatsappUrl}?text=${whatsappMessage}`;

export default function ServicesHero() {
  return (
    <section className={styles.hero} aria-labelledby="services-hero-title">
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>Servicios</span>
          <h1 id="services-hero-title" className={styles.title}>
            Servicio especializado en cada etapa de implementación
          </h1>
          <p className={styles.text}>
            Integramos instalación, capacitación y soporte técnico
            especializado para garantizar un funcionamiento confiable,
            eficiente y continuo en el entorno clínico.
          </p>
          <Link
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className={styles.button}
          >
            Hablar con un asesor
          </Link>
        </div>
      </div>
    </section>
  );
}
