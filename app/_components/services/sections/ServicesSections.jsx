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
      "Realizamos la entrega de cada equipo bajo planificación y control técnico, asegurando su integridad y las condiciones adecuadas para una instalación ordenada.",
    body:
      "Supervisamos cada proceso para garantizar una puesta en marcha eficiente en el entorno clínico.",
    icon: Truck,
    imageSlot: "/imgs/services/service-entregas.webp",
  },
  {
    title: "Instalación especializada",
    lead:
      "Realizamos la instalación de cada equipo bajo estándares técnicos, asegurando su correcta configuración, calibración, integración y puesta en marcha en el entorno clínico.",
    body:
      "Cada implementación es ejecutada con precisión para garantizar un funcionamiento óptimo, seguro y eficiente desde el primer uso.",
    icon: BadgeCheck,
    imageSlot: "/imgs/services/service-instalaciones.webp",
  },
  {
    title: "Capacitación profesional",
    lead:
      "Brindamos capacitación enfocada en el uso correcto, seguro y eficiente de la tecnología medica, asegurando el adecuado manejo y aprovechamiento de cada equipo.",
    body:
      "Acompañamos a su personal en la operación y funciones clave para optimizar el rendimiento clínico y fortalecer la práctica diagnóstica.",
    icon: GraduationCap,
    imageSlot: "/imgs/services/service-capacitaciones.webp",
  },
  {
    title: "Servicio postventa",
    lead:
      "Brindamos soporte postventa orientado a asegurar el rendimiento sostenido de cada equipo y la continuidad operativa de su institucion.",
    body:
      "Integramos respuesta tecnica oportuna, seguimiento especializado y un acompanamiento integral en los procesos asociados al uso y gestion del equipo, ofreciendo soluciones agiles y adaptadas a cada necesidad.",
    icon: Headset,
    imageSlot: "/imgs/services/service-postventas.webp",
  },
  {
    title: "Servicio técnico y mantenimiento",
    lead:
      "Contamos con un equipo técnico calificado para la atención, diagnóstico y mantenimiento de equipos de imagenologia medica, incluyendo intervenciones preventivas y correctivas que aseguran su funcionamiento optimo y contribuyen a prolongar su vida util.",
    body:
      "Brindamos respuesta oportuna y con criterio tecnico ante cada requerimiento, respaldando la continuidad operativa de su servicio.",
    icon: Settings2,
    imageSlot: "/imgs/services/service-tecnicos.webp",
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
