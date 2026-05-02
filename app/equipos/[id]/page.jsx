import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MessageCircleMore } from "lucide-react";
import { notFound } from "next/navigation";
import ProductMediaLightbox from "./ProductMediaLightbox";
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
            <ProductMediaLightbox
              image={product.image}
              alt={product.name}
              placeholderPath={`/public/imgs/equipments/${product.slug}.jpg`}
              tags={[
                categoryLabels[product.category],
                ...(product.audience !== "general"
                  ? [audienceLabels[product.audience]]
                  : []),
                ...(product.mobility ? [mobilityLabels[product.mobility]] : []),
              ]}
            />
          </div>

          <div className={styles.contentCard}>
            <section className={styles.descriptionCard}>
              <span className={styles.sectionEyebrow}>Descripción</span>
              <p className={styles.description}>{product.description}</p>
            </section>

            <section className={styles.brandCard}>
              <span className={styles.sectionEyebrow}>Marcas</span>
              {product.brandLogos?.length ? (
                <div className={styles.brandList}>
                  {product.brandLogos.map((logoPath) => (
                    <div key={logoPath} className={styles.brandItem}>
                      <Image
                        src={logoPath}
                        alt="Marca del equipo"
                        width={160}
                        height={70}
                        className={styles.brandLogo}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <p className={styles.infoFallback}>
                  Marca disponible proximamente.
                </p>
              )}
            </section>

            <section className={styles.specCard}>
              <span className={styles.sectionEyebrow}>Especificaciones</span>
              {product.specSections?.length ? (
                <div className={styles.specSections}>
                  {product.specSections.map((section, index) => (
                    <div
                      key={`${product.slug}-spec-${index}`}
                      className={styles.specSection}
                    >
                      {section.title ? (
                        <h3 className={styles.specTitle}>{section.title}</h3>
                      ) : null}
                      <ul className={styles.specList}>
                        {section.items.map((item) => (
                          <li key={item} className={styles.specItem}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <p className={styles.infoFallback}>
                  Especificaciones disponibles proximamente.
                </p>
              )}
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
