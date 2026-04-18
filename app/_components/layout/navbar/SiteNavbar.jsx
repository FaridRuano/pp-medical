import Image from "next/image";
import Link from "next/link";
import { navigation } from "@app/_data/site";
import {
  audienceLabels,
  categoryAudienceGroups,
  categoryLabels,
  productCatalog,
} from "@app/_data/catalog";
import styles from "./SiteNavbar.module.scss";
import CatalogDropdown from "@app/_components/navigation/DropDownDesktop/CatalogDropdown";
import MobileMenu from "@app/_components/navigation/DropDownMobile/MobileMenu.jsx";

function buildEquipmentCategories(catalog) {
  const groupedCategories = new Map();

  catalog.forEach((product) => {
    const categoryAudiences = categoryAudienceGroups[product.category] ?? [];

    if (!groupedCategories.has(product.category)) {
      groupedCategories.set(product.category, {
        slug: product.category,
        name: categoryLabels[product.category] ?? product.category,
        productCount: 0,
        anchorHref: `/equipos#categoria-${product.category}`,
        products: [],
        audiences: categoryAudiences.map((audience) => ({
          slug: audience,
          name: audienceLabels[audience] ?? audience,
          productCount: 0,
          products: [],
        })),
      });
    }

    const category = groupedCategories.get(product.category);
    const productEntry = {
      slug: product.slug,
      name: product.name,
      href: `/equipos/${product.slug}`,
    };

    if (category.audiences.length) {
      const audienceGroup = category.audiences.find(
        (audience) => audience.slug === product.audience
      );

      if (audienceGroup) {
        audienceGroup.products.push(productEntry);
        audienceGroup.productCount += 1;
      }
    } else {
      category.products.push(productEntry);
    }

    category.productCount += 1;
  });

  return Array.from(groupedCategories.values()).map((category) => ({
    ...category,
    products: category.products.sort((left, right) =>
      left.name.localeCompare(right.name, "es")
    ),
    audiences: category.audiences.map((audience) => ({
      ...audience,
      products: audience.products.sort((left, right) =>
        left.name.localeCompare(right.name, "es")
      ),
    })),
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
