import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MessageCircleMore } from "lucide-react";
import { notFound } from "next/navigation";
import {
  audienceLabels,
  categoryLabels,
  mobilityLabels,
  productCatalog,
} from "@app/_data/catalog";
import { whatsappUrl } from "@app/_data/site";
import styles from "./page.module.scss";

export async function generateStaticParams() {
  return productCatalog.map((product) => ({ id: product.slug }));
}

export default async function Page({ params }) {
  const { id } = await params;
  const product = productCatalog.find((item) => item.slug === id);

  if (!product) {
    notFound();
  }

  const whatsappMessage = encodeURIComponent(
    `Hola deseo cotizar ${product.name}`
  );
  const whatsappHref = `${whatsappUrl}?text=${whatsappMessage}`;

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <Link href="/equipos" className={styles.backLink}>
          <ArrowLeft size={16} />
          <span>Volver al catalogo</span>
        </Link>

        <header className={styles.header}>
          <span className={styles.category}>{categoryLabels[product.category]}</span>
          <h1 className={styles.title}>{product.name}</h1>

          <div className={styles.meta}>
            <span className={styles.tag}>{categoryLabels[product.category]}</span>
            {product.audience !== "general" ? (
              <span className={styles.tag}>{audienceLabels[product.audience]}</span>
            ) : null}
            {product.mobility ? (
              <span className={styles.tag}>{mobilityLabels[product.mobility]}</span>
            ) : null}
          </div>
        </header>

        <div className={styles.layout}>
          <div className={styles.mediaCard}>
            <div className={styles.mediaFrame}>
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 959px) 100vw, 48vw"
                  className={styles.image}
                />
              ) : (
                <div className={styles.placeholder}>
                  <span className={styles.placeholderTag}>Imagen pendiente</span>
                  <strong>{product.name}</strong>
                  <small>{`/public/imgs/equipments/${product.slug}.jpg`}</small>
                </div>
              )}
            </div>
          </div>

          <div className={styles.contentCard}>
            <section className={styles.descriptionCard}>
              <span className={styles.sectionEyebrow}>Descripción</span>
              <p className={styles.description}>{product.description}</p>
            </section>

            <div className={styles.actions}>
              <a
                href={whatsappHref}
                className={styles.quoteButton}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircleMore size={18} />
                <span>Cotizar</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
