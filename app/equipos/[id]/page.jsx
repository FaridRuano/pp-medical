import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MessageCircleMore } from "lucide-react";
import { notFound } from "next/navigation";
import ProductMediaLightbox from "./ProductMediaLightbox";
import {
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
          <h1 className={`section-title ${styles.title}`}>{product.name}</h1>
        </header>

        <div className={styles.layout}>
          <div className={styles.mediaColumn}>
            <div className={styles.mediaCard}>
              <ProductMediaLightbox
                image={product.image}
                alt={product.name}
                placeholderPath={`/public/imgs/equipments/${product.slug}.jpg`}
                tags={[
                  categoryLabels[product.category],
                  ...(product.mobility ? [mobilityLabels[product.mobility]] : []),
                ]}
              />
            </div>

            {product.brandLogos?.length ? (
              <div className={styles.brandStrip} aria-label="Marcas del equipo">
                {product.brandLogos.map((logoPath) => (
                  <div key={logoPath} className={styles.brandBadge}>
                    <Image
                      src={logoPath}
                      alt="Marca del equipo"
                      width={130}
                      height={52}
                      className={styles.brandLogo}
                    />
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <div className={styles.contentCard}>
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
                <p className={`body-copy ${styles.infoFallback}`}>
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
