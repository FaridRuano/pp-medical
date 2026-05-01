"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./HomeEquipments.module.scss";

const equipmentGroups = [
  {
    title: "Rayos X",
    href: "/equipos#categoria-rayos-x",
    image: "/imgs/equipments/hf-525-plus.jpg",
    alt: "Equipo de Rayos X HF-525 Plus",
    description:
      "Equipos fijos y portatiles con tecnologia de alto rendimiento para diagnostico radiologico en medicina humana y veterinaria.",
  },
  {
    title: "Ecografos",
    href: "/equipos#categoria-ecografia",
    image: "/imgs/equipments/sonoscape-x11.jpg",
    alt: "Ecografo SonoScape X11",
    description:
      "Sistemas avanzados para diagnostico en multiples especialidades de medicina humana y veterinaria.",
  },
  {
    title: "Detectores digitales",
    href: "/equipos#categoria-digitalizacion",
    image: "/imgs/equipments/lg-x-ray.jpg",
    alt: "Flat panel para digitalizacion radiografica",
    description:
      "Captura de imagenes de alta calidad con rapidez y precision para aplicaciones medicas y veterinarias.",
  },
  {
    title: "Rayos X dental",
    href: "/equipos#categoria-dental",
    image: "/imgs/equipments/i-max-ceph-pro.jpg",
    alt: "Equipo dental I-MAX CEPH PRO",
    description:
      "Soluciones 2D y 3D para diagnostico odontologico preciso y eficiente.",
  },
  {
    title: "Arco en C",
    href: "/equipos#categoria-fluoroscopia",
    image: "/imgs/equipments/arco-c.jpg",
    alt: "Equipo Arco en C Garion",
    description:
      "Fluoroscopia en tiempo real para procedimientos quirurgicos de alta precision.",
  },
  {
    title: "Densitometros oseos",
    href: "/equipos#categoria-densitometria",
    image: "/imgs/equipments/primus.jpg",
    alt: "Equipo de densitometria Primus",
    description:
      "Tecnologia DXA para evaluacion de salud osea y analisis de composicion corporal.",
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
          <h2 id="home-equipments-title" className={styles.title}>
            Soluciones en <span>imagenologia médica</span>
          </h2>
          <p className={styles.copy}>
            Tecnologia avanzda para un diagnostico preciso en medicina humana y
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
                <Link href={group.href} className={styles.cardLink}>
                  {group.title}
                </Link>
                <p className={styles.description}>{group.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.actions}>
          <Link href="/equipos" className={styles.catalogButton}>
            Conocer catalogo
          </Link>
        </div>
      </div>
    </section>
  );
}
