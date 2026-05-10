 "use client";

import {
  Award,
  Globe,
  MapPinned,
  SlidersHorizontal,
  Stethoscope,
} from "lucide-react";
import { useRevealOnScroll } from "@app/_components/us/useRevealOnScroll";
import styles from "./HomeWhyChooseUs.module.scss";

const reasons = [
  {
    icon: Globe,
    text: "Representantes de marcas líderes a nivel mundial",
  },
  {
    icon: Stethoscope,
    text: "Especialistas en imagenología médica",
  },
  {
    icon: SlidersHorizontal,
    text: "Brindamos soluciones a la medida",
  },
  {
    icon: MapPinned,
    text: "Tenemos cobertura nacional",
  },
  {
    icon: Award,
    text: "Confianza y trayectoria",
  },
];

export default function HomeWhyChooseUs() {
  const { sectionRef, hasEnteredView } = useRevealOnScroll(0.18);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${hasEnteredView ? styles.sectionActive : ""}`}
      aria-labelledby="home-why-choose-us-title"
    >
      <div className={styles.shell}>
        <div className={styles.header}>
          <h2 id="home-why-choose-us-title" className="section-title">
            ¿Por qué elegirnos?
          </h2>
        </div>

        <div className={styles.grid}>
          {reasons.map(({ icon: Icon, text }) => (
            <article key={text} className={styles.card}>
              <div className={styles.iconWrap} aria-hidden="true">
                <Icon className={styles.icon} strokeWidth={1.9} />
              </div>
              <p className={styles.cardText}>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
