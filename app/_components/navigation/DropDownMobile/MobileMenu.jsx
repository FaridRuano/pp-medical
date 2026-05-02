"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { createPortal } from "react-dom";
import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import styles from "./MobileMenu.module.scss";

const CLOSE_ANIMATION_MS = 360;

export default function MobileMenu({ navigation = [], equipmentCategories = [] }) {
  const closeTimeoutRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRenderOverlay, setShouldRenderOverlay] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);

  const cleanNavigation = useMemo(() => {
    return Array.isArray(navigation) ? navigation : [];
  }, [navigation]);

  const cleanCategories = useMemo(() => {
    return Array.isArray(equipmentCategories) ? equipmentCategories : [];
  }, [equipmentCategories]);

  const navigationWithoutEquipment = useMemo(() => {
    return cleanNavigation.filter(
      (item) => item.label?.trim().toLowerCase() !== "equipos"
    );
  }, [cleanNavigation]);

  const hasServicesItem = useMemo(() => {
    return navigationWithoutEquipment.some(
      (item) => item.label?.trim().toLowerCase() === "servicios"
    );
  }, [navigationWithoutEquipment]);

  const shouldShowEquipment = cleanCategories.length > 0;

  const openMenu = () => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
    }

    setShouldRenderOverlay(true);

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setIsOpen(true);
      });
    });
  };

  const closeMenu = () => {
    setIsOpen(false);
    setIsCatalogOpen(false);

    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
    }

    closeTimeoutRef.current = window.setTimeout(() => {
      setShouldRenderOverlay(false);
    }, CLOSE_ANIMATION_MS);
  };

  const toggleMenu = () => {
    if (isOpen) {
      closeMenu();
      return;
    }

    openMenu();
  };

  useEffect(() => {
    if (!isOpen) return;

    const html = document.documentElement;
    const body = document.body;

    const previousHtmlOverflow = html.style.overflow;
    const previousBodyOverflow = body.style.overflow;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    return () => {
      html.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
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

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        window.clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const equipmentToggle = shouldShowEquipment ? (
    <button
      type="button"
      className={`${styles.primaryLinkAc} ${styles.navMotion} ${isCatalogOpen ? styles.primaryLinkAcOpen : ""}`}
      aria-expanded={isCatalogOpen}
      aria-controls="mobile-equipment-catalog"
      onClick={() => setIsCatalogOpen((current) => !current)}
    >
      <span>Equipos</span>
      <ChevronDown size={16} aria-hidden="true" />
    </button>
  ) : null;

  const overlay = (
    <div
      className={`${styles.mobileOverlay} ${isOpen ? styles.mobileOverlayOpen : styles.mobileOverlayClosing}`}
      role="dialog"
      aria-modal="true"
      aria-label="Menu movil"
    >
      <header className={styles.mobileHeader}>
        <span className={styles.mobileHeaderLabel}>Menu</span>

        <button
          type="button"
          className={styles.closeButton}
          aria-label="Cerrar menu"
          onClick={closeMenu}
        >
          <X size={20} aria-hidden="true" />
        </button>
      </header>

      <main className={styles.mobileContent}>
        <nav className={styles.primaryNav} aria-label="Navegacion principal">
          {navigationWithoutEquipment.map((item) => {
            const isServices = item.label?.trim().toLowerCase() === "servicios";

            return (
              <Fragment key={`${item.label}-${item.href}`}>
                <Link
                  href={item.href}
                  className={`${styles.primaryLink} ${styles.navMotion}`}
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
            className={`${styles.catalogArea} ${isCatalogOpen ? styles.catalogAreaOpen : ""}`}
            aria-label="Catalogo de equipos"
            aria-hidden={!isCatalogOpen}
          >
            <div className={styles.categoryList}>
              {cleanCategories.map((category) => (
                <Link
                  key={category.slug}
                  href={category.anchorHref}
                  className={styles.categoryLink}
                  onClick={closeMenu}
                >
                  <span className={styles.categoryLinkText}>{category.name}</span>
                </Link>
              ))}
            </div>

            <div className={styles.catalogAreaFooter}>
              <Link
                href="/equipos"
                className={styles.catalogCta}
                onClick={closeMenu}
              >
                Ver catalogo completo
              </Link>
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
        aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
        onClick={toggleMenu}
      >
        <Menu size={18} aria-hidden="true" />
        <span>Menu</span>
      </button>

      {shouldRenderOverlay && typeof document !== "undefined"
        ? createPortal(overlay, document.body)
        : null}
    </div>
  );
}
