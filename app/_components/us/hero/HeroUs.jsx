import { whatsappUrl } from "@app/_data/site";
import DataUs from "../data/DataUs";
import styles from "./HeroUs.module.scss";

const timeline = [
  {
    label: "2013",
    text: "Fundación de P&P Medical en Quito, Ecuador.",
  },
  {
    label: "Expansión",
    text: "Cobertura nacional con alianzas internacionales certificadas.",
  },
  {
    label: "Especialización",
    text: "Incorporación del área veterinaria y nuevas marcas globales.",
  },
  {
    label: "Hoy",
    text: "Referentes en imagenología médica y veterinaria en Ecuador.",
    active: true,
  },
];

export default function Hero() {
  const whatsappMessage = encodeURIComponent(
    "Hola, necesito solicitar asesoria para un proyecto."
  );
  const whatsappHref = `${whatsappUrl}?text=${whatsappMessage}`;

  return (
    <section className={styles.hero} aria-labelledby="about-hero-title">
      <div className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.content}>
            <span className={styles.eyebrow}>Quiénes somos</span>

            <h1 id="about-hero-title" className={`section-title ${styles.title}`}>
              Impulsando la imagenología en Ecuador
            </h1>

            <p className={`section-copy ${styles.copy}`}>
              Nos especializamos en tecnología para imagenología médica y veterinaria, con soluciones para instituciones de salud públicas y privadas. Respaldo técnico en todo el país.
            </p>

            <a
              href={whatsappHref}
              className={styles.button}
              target="_blank"
              rel="noreferrer"
            >
              Solicitar asesoría
            </a>
          </div>

          <div className={styles.timeline} aria-label="Línea de tiempo de P&P Medical">
            {timeline.map((item, index) => (
              <article
                key={item.label}
                className={`${styles.timelineItem} ${item.active ? styles.timelineItemActive : ""}`}
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className={styles.timelineMarker} aria-hidden="true">
                  <span className={styles.timelineDot} />
                  {index < timeline.length - 1 ? <span className={styles.timelineLine} /> : null}
                </div>

                <div className={styles.timelineContent}>
                  <h2 className={styles.timelineLabel}>{item.label}</h2>
                  <p className={`body-copy ${styles.timelineText}`}>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.statsWrap}>
          <DataUs />
        </div>
      </div>
    </section>
  );
}
