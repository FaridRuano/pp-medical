"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { createPortal } from "react-dom";
import { Fragment, useEffect, useMemo, useState } from "react";
import styles from "./MobileMenu.module.scss";

export default function MobileMenu({ navigation = [], equipmentCategories = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeCategorySlug, setActiveCategorySlug] = useState(
    equipmentCategories[0]?.slug ?? ""
  );

  const cleanNavigation = useMemo(() => {
    return Array.isArray(navigation) ? navigation : [];
  }, [navigation]);

  const cleanCategories = useMemo(() => {
    return Array.isArray(equipmentCategories) ? equipmentCategories : [];
  }, [equipmentCategories]);

  const navigationWithoutEquipment = useMemo(() => {
    return cleanNavigation.filter((item) => item.label?.trim().toLowerCase() !== "equipos");
  }, [cleanNavigation]);

  const hasServicesItem = useMemo(() => {
    return navigationWithoutEquipment.some(
      (item) => item.label?.trim().toLowerCase() === "servicios"
    );
  }, [navigationWithoutEquipment]);

  const activeCategory = useMemo(() => {
    return (
      cleanCategories.find((category) => category.slug === activeCategorySlug) ??
      cleanCategories[0] ??
      null
    );
  }, [cleanCategories, activeCategorySlug]);

  const products = activeCategory?.products ?? [];
  const shouldShowEquipment = cleanCategories.length > 0;

  const closeMenu = () => {
    setIsOpen(false);
    setIsCatalogOpen(false);
  };

  const openMenu = () => setIsOpen(true);

  const toggleCatalog = () => {
    setIsCatalogOpen((current) => !current);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!cleanCategories.length) return;

    const exists = cleanCategories.some(
      (category) => category.slug === activeCategorySlug
    );

    if (!activeCategorySlug || !exists) {
      setActiveCategorySlug(cleanCategories[0].slug);
    }
  }, [cleanCategories, activeCategorySlug]);

  useEffect(() => {
    if (!isOpen) return;

    const scrollY = window.scrollY;
    const html = document.documentElement;
    const body = document.body;

    const previousHtmlOverflow = html.style.overflow;
    const previousBodyOverflow = body.style.overflow;
    const previousBodyPosition = body.style.position;
    const previousBodyTop = body.style.top;
    const previousBodyLeft = body.style.left;
    const previousBodyRight = body.style.right;
    const previousBodyWidth = body.style.width;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";

    return () => {
      html.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
      body.style.position = previousBodyPosition;
      body.style.top = previousBodyTop;
      body.style.left = previousBodyLeft;
      body.style.right = previousBodyRight;
      body.style.width = previousBodyWidth;
      window.scrollTo(0, scrollY);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeMenu();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const equipmentToggle = shouldShowEquipment ? (
    <button
      type="button"
      className={`${styles.primaryLinkAc} ${isCatalogOpen ? styles.primaryLinkAcOpen : ""
        }`}
      aria-expanded={isCatalogOpen}
      aria-controls="mobile-equipment-catalog"
      onClick={toggleCatalog}
    >
      <span>Equipos</span>
      <ChevronDown size={16} aria-hidden="true" />
    </button>
  ) : null;

  const overlay = (
    <div
      className={`${styles.mobileOverlay} ${isOpen ? styles.mobileOverlayOpen : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="Menú móvil"
      aria-hidden={!isOpen}
    >
      <header className={styles.mobileHeader}>
        <span className={styles.mobileHeaderLabel}>Menú</span>

        <button
          type="button"
          className={styles.closeButton}
          aria-label="Cerrar menú"
          onClick={closeMenu}
        >
          <X size={20} aria-hidden="true" />
        </button>
      </header>

      <main className={styles.mobileContent}>
        <nav className={styles.primaryNav} aria-label="Navegación principal">
          {navigationWithoutEquipment.map((item) => {
            const isServices = item.label?.trim().toLowerCase() === "servicios";

            return (
              <Fragment key={`${item.label}-${item.href}`}>
                <Link
                  href={item.href}
                  className={styles.primaryLink}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>

                {isServices ? equipmentToggle : null}
              </Fragment>
            );
          })}

          {!hasServicesItem ? equipmentToggle : null}
        </nav>

        {shouldShowEquipment ? (
          <section
            id="mobile-equipment-catalog"
            className={`${styles.catalogArea} ${isCatalogOpen ? styles.catalogAreaOpen : ""
              }`}
            aria-label="Catálogo de equipos"
            aria-hidden={!isCatalogOpen}
          >
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>Categorías</span>
            </div>

            <div className={styles.categoryRail} role="tablist" aria-label="Categorías">
              {cleanCategories.map((category) => (
                <button
                  key={category.slug}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory?.slug === category.slug}
                  className={`${styles.categoryButton} ${activeCategory?.slug === category.slug
                      ? styles.categoryButtonActive
                      : ""
                    }`}
                  onClick={() => setActiveCategorySlug(category.slug)}
                >
                  <span>{category.name}</span>
                  <small>{category.productCount ?? category.products?.length ?? 0}</small>
                </button>
              ))}
            </div>

            <div className={styles.productArea}>
              {activeCategory?.name ? (
                <h3 className={styles.categoryTitle}>{activeCategory.name}</h3>
              ) : null}

              <div className={styles.productList}>
                {products.length ? (
                  products.map((product) => (
                    <Link
                      key={product.slug}
                      href={product.href}
                      className={styles.productLink}
                      onClick={closeMenu}
                    >
                      {product.name}
                    </Link>
                  ))
                ) : (
                  <p className={styles.emptyText}>
                    No hay productos disponibles en esta categoría.
                  </p>
                )}
              </div>
            </div>
          </section>
        ) : null}
      </main>
    </div>
  );

  return (
    <div className={styles.menuWrap}>
      <button
        type="button"
        className={`${styles.menuButton} ${isOpen ? styles.menuButtonActive : ""}`}
        aria-expanded={isOpen}
        aria-label="Abrir menú"
        onClick={openMenu}
      >
        <Menu size={18} aria-hidden="true" />
        <span>Menú</span>
      </button>

      {mounted ? createPortal(overlay, document.body) : null}
    </div>
  );
}
