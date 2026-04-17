import Image from "next/image";
import Link from "next/link";
import { navigation } from "@app/_data/site";
import { productCatalog } from "@app/_data/catalog";
import CatalogDropdown from "@app/_components/navigation/CatalogDropdown";
import MobileMenu from "@app/_components/navigation/MobileMenu";
import styles from "./SiteNavbar.module.scss";

const CATEGORY_LABELS = {
  "rayos-x": "Rayos X",
  ecografia: "Ecografia",
  digitalizacion: "Digitalizacion",
  dental: "Dental",
  fluoroscopia: "Fluoroscopia",
  densitometria: "Densitometria",
};

function buildEquipmentCategories(catalog) {
  const groupedCategories = new Map();

  catalog.forEach((product) => {
    if (!groupedCategories.has(product.category)) {
      groupedCategories.set(product.category, {
        slug: product.category,
        name: CATEGORY_LABELS[product.category] ?? product.category,
        productCount: 0,
        anchorHref: `/equipos#categoria-${product.category}`,
        products: [],
      });
    }

    const category = groupedCategories.get(product.category);

    category.products.push({
      slug: product.slug,
      name: product.name,
      href: `/equipos/${product.slug}`,
    });
    category.productCount += 1;
  });

  return Array.from(groupedCategories.values()).map((category) => ({
    ...category,
    products: category.products.sort((left, right) =>
      left.name.localeCompare(right.name, "es")
    ),
  }));
}

const equipmentCategories = buildEquipmentCategories(productCatalog);

export default function SiteNavbar() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="Ir al inicio de P&P Medical">
          <span className={styles.logoFrame}>
            <Image
              src="/imgs/pp-medical.webp"
              alt="P&P Medical"
              width={172}
              height={56}
              className={styles.logo}
              priority
            />
          </span>
          {/* <span className={styles.brandText}>
            <strong>P&amp;P Medical</strong>
            <span>Imagenologia para medicina humana y veterinaria</span>
          </span> */}
        </Link>

        <nav className={styles.desktopNav} aria-label="Navegacion principal">
          {navigation.map((item) => {
            if (item.label === "Equipos") {
              return (
                <div key={item.label} className={styles.desktopDropdown}>
                  <CatalogDropdown categories={equipmentCategories} />
                </div>
              );
            }

            return (
              <Link key={item.label} href={item.href} className={styles.navLink}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className={styles.mobileNav}>
          <MobileMenu
            navigation={navigation}
            equipmentCategories={equipmentCategories}
          />
        </div>
      </div>
    </header>
  );
}
