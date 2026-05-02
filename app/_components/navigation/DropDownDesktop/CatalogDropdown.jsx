"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import styles from "./CatalogDropdown.module.scss";

export default function CatalogDropdown({ categories = [] }) {
  const containerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event) => {
      if (containerRef.current?.contains(event.target)) return;
      setIsOpen(false);
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className={`${styles.catalogWrap} ${isOpen ? styles.catalogWrapOpen : ""}`}
    >
      <button
        type="button"
        className={styles.catalogTrigger}
        aria-expanded={isOpen}
        aria-controls="catalog-dropdown-panel"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span>Equipos</span>
        <ChevronDown size={16} aria-hidden="true" />
      </button>

      <div
        id="catalog-dropdown-panel"
        className={styles.catalogPanel}
        aria-hidden={!isOpen}
      >
        <div className={styles.catalogSimple}>
          <div className={styles.categoryGrid}>
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={category.anchorHref}
                className={styles.categoryLink}
                onClick={() => setIsOpen(false)}
              >
                <span className={styles.categoryName}>{category.name}</span>
              </Link>
            ))}
          </div>

          <div className={styles.catalogFooter}>
            <Link
              href="/equipos"
              className={styles.catalogCta}
              onClick={() => setIsOpen(false)}
            >
              Ver catalogo completo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
