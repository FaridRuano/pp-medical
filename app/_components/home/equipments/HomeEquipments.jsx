"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./HomeEquipments.module.scss";

const equipmentGroups = [
  {
    title: "Rayos X",
    image: "/imgs/equipments/hf-525-plus.jpg",
    alt: "Equipo de Rayos X HF-525 Plus",
    description:
      "Equipos fijos y portátiles con tecnología de alto rendimiento para diagnóstico radiológico en medicina humana y veterinaria.",
  },
  {
    title: "Detectores digitales",
    image: "/imgs/equipments/lg-x-ray.jpg",
    alt: "Equipo I-MAX CEPH PRO",
    description:
      "Captura de imágenes de alta calidad con rapidez y precisión para aplicaciones médicas y veterinarias.",
  },
  {
    title: "Ecógrafos",
    image: "/imgs/equipments/sonoscape-p60.jpg",
    alt: "Ecógrafo SonoScape P60",
    description:
      "Sistemas avanzados para diagnósticos en múltiples especialidades de medicina humana y veterinaria.",
  },
  {
    title: "Densitómetros óseos",
    image: "/imgs/equipments/primus.jpg",
    alt: "Equipo de densitometría Primus",
    description:
      "Tecnología DXA para evaluación de salud ósea y análisis de composición corporal.",
  },
  {
    title: "Rayos X dentales",
    image: "/imgs/equipments/i-max-ceph-pro.jpg",
    alt: "Equipo dental I-MAX CEPH PRO",
    description:
      "Soluciones 2D y 3D para diagnóstico odontológico preciso y eficiente.",
  },
  {
    title: "Arco en C",
    image: "/imgs/equipments/arco-c.jpg",
    alt: "Equipo Arco en C Garion",
    description:
      "Fluoroscopia en tiempo real para procedimientos quirúrgicos de alta precisión.",
  },
];

export default function HomeEquipments() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;

    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsVisible(true);
        observer.disconnect();
      },
      { threshold: 0.18 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${isVisible ? styles.sectionActive : ""}`}
      aria-labelledby="home-equipments-title"
    >
      <div className={styles.shell}>
        <header className={styles.header}>
          <h2 id="home-equipments-title" className="section-title">
            Soluciones en imagenología médica
          </h2>
          <p className="section-copy">
            Tecnología avanzada para un diagnóstico preciso en medicina humana y
            veterinaria.
          </p>
        </header>

        <div className={styles.grid}>
          {equipmentGroups.map((group) => (
            <article key={group.title} className={styles.card}>
              <div className={styles.media}>
                <Image
                  src={group.image}
                  alt={group.alt}
                  width={1040}
                  height={1040}
                  className={styles.image}
                />
              </div>

              <div className={styles.body}>
                <h3 className={styles.cardTitle}>{group.title}</h3>
                <p className={`body-copy ${styles.description}`}>{group.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.actions}>
          <Link href="/equipos" className={styles.catalogButton}>
            Explorar equipos
          </Link>
        </div>
      </div>
    </section>
  );
}
