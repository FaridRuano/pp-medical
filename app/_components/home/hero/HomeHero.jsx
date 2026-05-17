import Link from "next/link";
import {
  CreditCard,
  GraduationCap,
  Headset,
  MapPinned,
  Wrench,
} from "lucide-react";
import { whatsappUrl } from "@app/_data/site";
import styles from "./HomeHero.module.scss";

const whatsappMessage = encodeURIComponent(
  "Hola, deseo cotizar un equipo!"
);

const whatsappHref = `${whatsappUrl}?text=${whatsappMessage}`;

const benefits = [
  {
    icon: Wrench,
    title: "Instalación",
    text: "Incluida",
  },
  {
    icon: GraduationCap,
    title: "Capacitación",
    text: "Especializada",
  },
  {
    icon: Headset,
    title: "Soporte técnico",
    text: "Especializado",
  },
  {
    icon: MapPinned,
    title: "Cobertura",
    text: "Nacional",
  },
  {
    icon: CreditCard,
    title: "Crédito directo",
    text: "Sin intereses",
  },
];

export default function HomeHero() {
  return (
    <section className={styles.hero} aria-labelledby="home-hero-title">
      <div className={styles.media} aria-hidden="true">
        <video
          className={styles.video}
          src="/imgs/hero-home-vid.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Tecnología que impulsa mejores diagnósticos</p>

          <h1 id="home-hero-title" className={`section-title ${styles.heroTitle}`}>
            Tecnología médica de alta precisión para diagnósticos confiables
          </h1>

          <p className={`section-copy ${styles.heroCopy}`}>
            Equipos de imagenología médica y veterinaria con instalación, capacitación y soporte técnico especializado en todo Ecuador.
          </p>

          <div className={styles.actions}>
            <a
              href={whatsappHref}
              className={styles.cta}
              target="_blank"
              rel="noreferrer"
            >
              Solicitar cotización
            </a>
            <Link href="/equipos" className={styles.catalogButton}>
              Ver catálogo
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.benefitsWrap} aria-label="Beneficios principales">
        <div className={styles.benefits}>
          {benefits.map(({ icon: Icon, title, text }) => (
            <article key={title} className={styles.benefitCard}>
              <span className={styles.benefitIcon} aria-hidden="true">
                <Icon strokeWidth={1.8} />
              </span>
              <span className={styles.benefitText}>
                <strong>{title}</strong>
                <span>{text}</span>
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
