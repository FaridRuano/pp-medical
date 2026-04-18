"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./CatalogDropdown.module.scss";

export default function CatalogDropdown({ categories = [] }) {
  const containerRef = useRef(null);
  const [selectedSlug, setSelectedSlug] = useState(categories[0]?.slug ?? "");
  const [selectedAudienceSlug, setSelectedAudienceSlug] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const selectedCategory = useMemo(() => {
    return categories.find((category) => category.slug === selectedSlug) ?? categories[0];
  }, [categories, selectedSlug]);

  const selectedAudience = useMemo(() => {
    if (!selectedCategory?.audiences?.length) return null;

    return (
      selectedCategory.audiences.find(
        (audience) => audience.slug === selectedAudienceSlug
      ) ?? selectedCategory.audiences[0]
    );
  }, [selectedAudienceSlug, selectedCategory]);

  const visibleProducts = selectedAudience?.products ?? selectedCategory?.products ?? [];

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

  if (!selectedCategory) return null;

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
        <div className={styles.catalogIntro}>
          <div className={styles.catalogIntroText}>
            <span className={styles.catalogEyebrow}>Catálogo</span>
            <h3 className={styles.catalogTitle}>Explora una selección curada por categoría.</h3>
            <p className={styles.catalogText}>
              Una navegación más refinada para encontrar equipos con rapidez.
            </p>
          </div>
        </div>

        <div className={styles.catalogColumns}>
          <div className={styles.categoryColumn}>
            <span className={styles.columnLabel}>Categorías</span>

            <div className={styles.categoryList}>
              {categories.map((category) => (
                <button
                  key={category.slug}
                  type="button"
                  className={`${styles.categoryButton} ${selectedCategory.slug === category.slug ? styles.categoryButtonActive : ""
                    }`}
                  onMouseEnter={() => setSelectedSlug(category.slug)}
                  onFocus={() => setSelectedSlug(category.slug)}
                  onClick={() => setSelectedSlug(category.slug)}
                >
                  <span className={styles.categoryName}>{category.name}</span>
                  <span className={styles.categoryCount}>{category.productCount}</span>
                </button>
              ))}
            </div>
          </div>

          <div className={styles.productColumn}>
            <div className={styles.productColumnHeader}>
              <div>
                <span className={styles.columnLabel}>Productos</span>
                <h4 className={styles.selectedCategoryTitle}>{selectedCategory.name}</h4>
              </div>
            </div>

            {selectedCategory.audiences?.length ? (
              <div className={styles.audienceList} aria-label="Subcategorias">
                {selectedCategory.audiences.map((audience) => (
                  <button
                    key={audience.slug}
                    type="button"
                    className={`${styles.audienceButton} ${
                      selectedAudience?.slug === audience.slug ? styles.audienceButtonActive : ""
                    }`}
                    onClick={() => setSelectedAudienceSlug(audience.slug)}
                  >
                    <span>{audience.name}</span>
                    <small>{audience.productCount}</small>
                  </button>
                ))}
              </div>
            ) : null}

            <div className={styles.productScrollArea}>
              <div className={styles.productList}>
                {visibleProducts.map((product) => (
                  <Link
                    key={product.slug}
                    href={product.href}
                    className={styles.productLink}
                    onClick={() => setIsOpen(false)}
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
