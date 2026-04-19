"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, SlidersHorizontal, Tag } from "lucide-react";
import { useDeferredValue, useEffect, useId, useState } from "react";
import {
  audienceLabels,
  categoryLabels,
  mobilityLabels,
  productCatalog,
} from "@app/_data/catalog";
import { useRevealOnScroll } from "@app/_components/us/useRevealOnScroll";
import styles from "./EquipmentCatalog.module.scss";

function EquipmentCard({ product, index }) {
  const { sectionRef, hasEnteredView } = useRevealOnScroll(0);

  const [imageError, setImageError] = useState(false);

  const showPlaceholder = !product.image || imageError;

  return (
    <article
      ref={sectionRef}
      className={`${styles.card} ${hasEnteredView ? styles.cardVisible : ""}`}
      style={{ animationDelay: `${(index % 12) * 45}ms` }}
    >
      <div className={styles.cardMedia}>
        {!showPlaceholder ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 699px) 100vw, (max-width: 1099px) 50vw, 33vw"
            className={styles.cardImage}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className={styles.cardPlaceholder}>
            <span className={styles.placeholderTag}>Imagen pendiente</span>
          </div>
        )}
      </div>

      <div className={styles.cardBody}>
        <div className={styles.cardTop}>
          <p className={styles.cardCategory}>{categoryLabels[product.category]}</p>
          <h2 className={styles.cardTitle}>{product.name}</h2>
        </div>

        <div className={styles.tags}>
          <span className={styles.tag}>{mobilityLabels[product.mobility]}</span>
          <span className={styles.tag}>{audienceLabels[product.audience]}</span>
          <span className={styles.tagAlt}>{categoryLabels[product.category]}</span>
        </div>

        <p className={styles.cardDescription}>{product.description}</p>

        <div className={styles.cardFooter}>
          <Link href={`/equipos/${product.slug}`} className={styles.cardButton}>
            Ver producto
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function EquipmentCatalog() {
  const searchId = useId();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedAudience, setSelectedAudience] = useState("all");
  const [selectedMobility, setSelectedMobility] = useState("all");
  const deferredSearch = useDeferredValue(search);

  const normalizedSearch = deferredSearch.trim().toLocaleLowerCase("es");
  const productsByCategory =
    selectedCategory === "all"
      ? productCatalog
      : productCatalog.filter((product) => product.category === selectedCategory);

  const availableAudiences = Array.from(
    new Set(
      productsByCategory
        .map((product) => product.audience)
        .filter((audience) => audience !== "general")
    )
  );

  const availableMobilities = Array.from(
    new Set(productsByCategory.map((product) => product.mobility))
  );

  const audienceFilterEnabled = availableAudiences.length > 0;
  const mobilityFilterEnabled = availableMobilities.length > 1;

  useEffect(() => {
    if (!audienceFilterEnabled) {
      setSelectedAudience("all");
      return;
    }

    if (
      selectedAudience !== "all" &&
      !availableAudiences.includes(selectedAudience)
    ) {
      setSelectedAudience("all");
    }
  }, [audienceFilterEnabled, availableAudiences, selectedAudience]);

  useEffect(() => {
    if (!mobilityFilterEnabled) {
      setSelectedMobility("all");
      return;
    }

    if (
      selectedMobility !== "all" &&
      !availableMobilities.includes(selectedMobility)
    ) {
      setSelectedMobility("all");
    }
  }, [availableMobilities, mobilityFilterEnabled, selectedMobility]);

  const visibleProducts = productCatalog.filter((product) => {
    const matchesSearch =
      !normalizedSearch ||
      product.name.toLocaleLowerCase("es").includes(normalizedSearch) ||
      product.description.toLocaleLowerCase("es").includes(normalizedSearch);

    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesAudience =
      !audienceFilterEnabled ||
      selectedAudience === "all" ||
      product.audience === selectedAudience;
    const matchesMobility =
      !mobilityFilterEnabled ||
      selectedMobility === "all" ||
      product.mobility === selectedMobility;

    return (
      matchesSearch && matchesCategory && matchesAudience && matchesMobility
    );
  });

  const categories = Object.entries(categoryLabels);
  const audiences = availableAudiences.map((slug) => [slug, audienceLabels[slug]]);
  const mobilities = Object.entries(mobilityLabels);

  const clearFilters = () => {
    setSearch("");
    setSelectedCategory("all");
    setSelectedAudience("all");
    setSelectedMobility("all");
  };

  return (
    <section className={styles.page}>
      <div className={styles.catalogShell}>
        <aside className={styles.sidebar}>
          <div className={styles.sidebarCard}>
            <div className={styles.sidebarHeader}>
              <SlidersHorizontal size={18} />
              <h2>Filtros</h2>
            </div>

            <div className={styles.searchWrap}>
              <label htmlFor={searchId} className={styles.label}>
                Buscar producto
              </label>
              <div className={styles.searchField}>
                <Search size={16} />
                <input
                  id={searchId}
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Nombre o descripción"
                  className={styles.searchInput}
                />
              </div>
            </div>

            <fieldset className={styles.filterGroup}>
              <legend className={styles.label}>Categoría</legend>
              <div className={styles.optionList}>
                <button
                  type="button"
                  className={`${styles.optionButton} ${selectedCategory === "all" ? styles.optionButtonActive : ""
                    }`}
                  onClick={() => setSelectedCategory("all")}
                >
                  Todas
                </button>
                {categories.map(([slug, label]) => (
                  <button
                    key={slug}
                    type="button"
                    className={`${styles.optionButton} ${selectedCategory === slug ? styles.optionButtonActive : ""
                      }`}
                    onClick={() => setSelectedCategory(slug)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset className={styles.filterGroup}>
              <legend className={styles.label}>Uso</legend>
              <div className={styles.optionList}>
                <button
                  type="button"
                  className={`${styles.optionButton} ${selectedAudience === "all" ? styles.optionButtonActive : ""
                    }`}
                  onClick={() => setSelectedAudience("all")}
                >
                  Todos
                </button>
                {audienceFilterEnabled
                  ? audiences.map(([slug, label]) => (
                    <button
                      key={slug}
                      type="button"
                      className={`${styles.optionButton} ${selectedAudience === slug
                        ? styles.optionButtonActive
                        : ""
                        }`}
                      onClick={() => setSelectedAudience(slug)}
                    >
                      {label}
                    </button>
                  ))
                  : null}
              </div>
            </fieldset>

            <fieldset className={styles.filterGroup}>
              <legend className={styles.label}>Formato</legend>
              <div className={styles.optionList}>
                <button
                  type="button"
                  className={`${styles.optionButton} ${selectedMobility === "all" ? styles.optionButtonActive : ""
                    }`}
                  onClick={() => setSelectedMobility("all")}
                >
                  Todos
                </button>
                {mobilityFilterEnabled
                  ? mobilities
                    .filter(([slug]) => availableMobilities.includes(slug))
                    .map(([slug, label]) => (
                      <button
                        key={slug}
                        type="button"
                        className={`${styles.optionButton} ${selectedMobility === slug
                          ? styles.optionButtonActive
                          : ""
                          }`}
                        onClick={() => setSelectedMobility(slug)}
                      >
                        {label}
                      </button>
                    ))
                  : null}
              </div>
            </fieldset>

            <button type="button" className={styles.clearButton} onClick={clearFilters}>
              Limpiar filtros
            </button>
          </div>
        </aside>

        <div className={styles.results}>
          <div className={styles.resultsHeader}>
            <div>
              <span className={styles.resultsEyebrow}>Catálogo completo</span>
              <h2 className={styles.resultsTitle}>Productos disponibles</h2>
            </div>

            <div className={styles.resultsCount}>
              <Tag size={16} />
              <span>{visibleProducts.length} resultados</span>
            </div>
          </div>

          {visibleProducts.length ? (
            <div className={styles.grid}>
              {visibleProducts.map((product, index) => (
                <EquipmentCard key={product.slug} product={product} index={index} />
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <h3>No encontramos productos con esos filtros.</h3>
              <p>
                Prueba con otra categoría, cambia el tipo de uso o limpia la
                búsqueda para volver a ver el catálogo completo.
              </p>
              <button
                type="button"
                className={styles.cardButton}
                onClick={clearFilters}
              >
                Ver todo el catálogo
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
