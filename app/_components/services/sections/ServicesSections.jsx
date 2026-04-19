"use client";

import {
  BadgeCheck,
  GraduationCap,
  Headset,
  Settings2,
  Truck,
} from "lucide-react";
import { useRevealOnScroll } from "@app/_components/us/useRevealOnScroll";
import styles from "./ServicesSections.module.scss";
import Image from "next/image";

const services = [
  {
    title: "Entrega",
    lead:
      "Entrega directa y personalizada de cada equipo, garantizando seguridad, integridad del producto y cumplimiento en tiempos de instalación.",
    body:
      "Supervisión especializada en cada proceso de entrega, asegurando confianza, correcto funcionamiento y puesta en marcha óptima en el entorno clínico.",
    icon: Truck,
    imageSlot: "/imgs/service-entrega.webp",
  },
  {
    title: "Instalación",
    lead:
      "Instalación técnica que garantiza la correcta configuración, integración y puesta en marcha del equipo en el entorno clínico.",
    body:
      "Ejecución bajo estándares técnicos, asegurando funcionamiento óptimo, seguridad operativa y rendimiento desde el primer uso.",
    icon: BadgeCheck,
    imageSlot: "/imgs/services/service-instalacion.webp",
  },
  {
    title: "Capacitación",
    lead:
      "Capacitación especializada orientada al uso eficiente y seguro de la tecnología médica, asegurando el dominio operativo de cada equipo.",
    body:
      "Formación técnica aplicada que optimiza el rendimiento clínico, la correcta configuración y la toma de decisiones diagnósticas, garantizando un aprovechamiento integral del sistema.",
    icon: GraduationCap,
    imageSlot: "/imgs/services/service-capacitacion.webp",
  },
  {
    title: "Postventa",
    lead:
      "Soporte postventa continuo orientado a garantizar el rendimiento del equipo y la continuidad operativa.",
    body:
      "Acompañamiento permanente al cliente, brindando respuesta oportuna, seguimiento técnico y confianza en cada etapa de uso.",
    icon: Headset,
    imageSlot: "/imgs/services/service-postventa.webp",
  },
  {
    title: "Servicio técnico y mantenimiento",
    lead:
      "Respaldamos a nuestros clientes más allá de la compra, con servicio técnico y mantenimiento. Aseguramos la continuidad operativa de sus equipos.",
    body:
      "Ante cualquier inconveniente, nuestro equipo está disponible para ofrecer soporte oportuno y soluciones efectivas.",
    icon: Settings2,
    imageSlot: "/imgs/services/service-tecnico.webp",
  },
];

function ServiceBlock({ service, index }) {
  const Icon = service.icon;
  const reverse = index % 2 === 1;
  const { sectionRef, hasEnteredView } = useRevealOnScroll(0.22);

  return (
    <article
      ref={sectionRef}
      className={`${styles.block} ${reverse ? styles.blockReverse : ""} ${hasEnteredView ? styles.blockVisible : ""
        }`}
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <div className={styles.copy}>
        <div className={styles.badge}>
          <span className={styles.iconWrap} aria-hidden="true">
            <Icon size={22} strokeWidth={1.9} />
          </span>
          <span className={styles.badgeText}>Servicio especializado</span>
        </div>

        <h2 className={styles.title}>{service.title}</h2>
        <p className={styles.lead}>{service.lead}</p>
        <p className={styles.body}>{service.body}</p>
      </div>

      <div className={styles.media}>
        <div className={styles.placeholder}>
          <Image
            src={service.imageSlot}
            width={1297}
            height={740}
            alt={service.title}
            className={styles.image}
          />
        </div>
      </div>
    </article>
  );
}

export default function ServicesSections() {
  const { sectionRef, hasEnteredView } = useRevealOnScroll(0.08);

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      aria-labelledby="services-sections-title"
    >
      <div className={styles.container}>
        <header className={`${styles.header} ${hasEnteredView ? styles.headerVisible : ""}`}>
          <span className={styles.eyebrow}>Cobertura completa</span>
          <h2 id="services-sections-title" className={styles.heading}>
            Un servicio integral para cada etapa del ciclo de vida del equipo.
          </h2>
        </header>

        <div className={styles.stack}>
          {services.map((service, index) => (
            <ServiceBlock
              key={service.title}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
