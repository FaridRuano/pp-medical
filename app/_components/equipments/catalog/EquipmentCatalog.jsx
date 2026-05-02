"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, SlidersHorizontal, Tag } from "lucide-react";
import { useDeferredValue, useId, useMemo, useState } from "react";
import {
  audienceLabels,
  categoryLabels,
  formatLabels,
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
          <span className={styles.tag}>{formatLabels[product.format] ?? product.format}</span>
          <span className={styles.tag}>{audienceLabels[product.audience]}</span>
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

function FilterButtons({
  title,
  value,
  onChange,
  options,
  allLabel = "Todos",
}) {
  if (!options.length) return null;

  return (
    <fieldset className={styles.filterGroup}>
      <legend className={styles.label}>{title}</legend>
      <div className={styles.optionList}>
        <button
          type="button"
          className={`${styles.optionButton} ${value === "all" ? styles.optionButtonActive : ""}`}
          onClick={() => onChange("all")}
        >
          {allLabel}
        </button>
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            className={`${styles.optionButton} ${value === option.value ? styles.optionButtonActive : ""}`}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

function EmptyState({ message }) {
  return (
    <div className={styles.emptyState}>
      <h3>No encontramos productos con esos filtros.</h3>
      <p>{message}</p>
    </div>
  );
}

function FullCatalog({ search, setSearch, deferredSearch }) {
  const searchId = useId();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedAudience, setSelectedAudience] = useState("all");
  const [selectedFormat, setSelectedFormat] = useState("all");
  const normalizedSearch = deferredSearch.trim().toLocaleLowerCase("es");

  const categorySource = useMemo(
    () =>
      productCatalog.filter((product) => {
        const matchesAudience =
          selectedAudience === "all" || product.audience === selectedAudience;
        const matchesFormat =
          selectedFormat === "all" || product.format === selectedFormat;

        const searchMatch =
          !normalizedSearch ||
          product.name.toLocaleLowerCase("es").includes(normalizedSearch) ||
          product.description.toLocaleLowerCase("es").includes(normalizedSearch);

        return searchMatch && matchesAudience && matchesFormat;
      }),
    [normalizedSearch, selectedAudience, selectedFormat]
  );

  const audienceSource = useMemo(
    () =>
      productCatalog.filter((product) => {
        const matchesCategory =
          selectedCategory === "all" || product.category === selectedCategory;
        const matchesFormat =
          selectedFormat === "all" || product.format === selectedFormat;

        const searchMatch =
          !normalizedSearch ||
          product.name.toLocaleLowerCase("es").includes(normalizedSearch) ||
          product.description.toLocaleLowerCase("es").includes(normalizedSearch);

        return searchMatch && matchesCategory && matchesFormat;
      }),
    [normalizedSearch, selectedCategory, selectedFormat]
  );

  const formatSource = useMemo(
    () =>
      productCatalog.filter((product) => {
        const matchesCategory =
          selectedCategory === "all" || product.category === selectedCategory;
        const matchesAudience =
          selectedAudience === "all" || product.audience === selectedAudience;

        const searchMatch =
          !normalizedSearch ||
          product.name.toLocaleLowerCase("es").includes(normalizedSearch) ||
          product.description.toLocaleLowerCase("es").includes(normalizedSearch);

        return searchMatch && matchesCategory && matchesAudience;
      }),
    [normalizedSearch, selectedCategory, selectedAudience]
  );

  const categoryOptions = useMemo(
    () =>
      Array.from(new Set(categorySource.map((product) => product.category))).map(
        (value) => ({
          value,
          label: categoryLabels[value],
        })
      ),
    [categorySource]
  );

  const audienceOptions = useMemo(
    () =>
      Array.from(new Set(audienceSource.map((product) => product.audience))).map(
        (value) => ({
          value,
          label: audienceLabels[value],
        })
      ),
    [audienceSource]
  );

  const formatOptions = useMemo(
    () =>
      Array.from(new Set(formatSource.map((product) => product.format))).map(
        (value) => ({
          value,
          label: formatLabels[value] ?? value,
        })
      ),
    [formatSource]
  );

  const categoryValue =
    selectedCategory !== "all" &&
    !categoryOptions.some((option) => option.value === selectedCategory)
      ? "all"
      : selectedCategory;

  const audienceValue =
    selectedAudience !== "all" &&
    !audienceOptions.some((option) => option.value === selectedAudience)
      ? "all"
      : selectedAudience;

  const formatValue =
    selectedFormat !== "all" &&
    !formatOptions.some((option) => option.value === selectedFormat)
      ? "all"
      : selectedFormat;

  const visibleProducts = useMemo(() => {
    return productCatalog.filter((product) => {
      const searchMatch =
        !normalizedSearch ||
        product.name.toLocaleLowerCase("es").includes(normalizedSearch) ||
        product.description.toLocaleLowerCase("es").includes(normalizedSearch);

      const matchesCategory =
        categoryValue === "all" || product.category === categoryValue;
      const matchesAudience =
        audienceValue === "all" || product.audience === audienceValue;
      const matchesFormat = formatValue === "all" || product.format === formatValue;

      return (
        searchMatch &&
        matchesCategory &&
        matchesAudience &&
        matchesFormat
      );
    });
  }, [categoryValue, audienceValue, formatValue, normalizedSearch]);

  return (
    <>
      <header className={styles.topHeader}>
        <div>
          <span className={styles.resultsEyebrow}>Catálogo completo</span>
          <h1 className={styles.pageTitle}>Todos nuestros equipos</h1>
        </div>
      </header>

      <div className={styles.catalogLayout}>
        <aside className={styles.filterCard}>
          <div className={styles.filterCardHeader}>
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
                placeholder="Nombre o descripcion"
                className={styles.searchInput}
              />
            </div>
          </div>

          <FilterButtons
            title="Categoría"
            value={categoryValue}
            onChange={setSelectedCategory}
            options={categoryOptions}
          />

          {audienceOptions.length > 1 ? (
            <FilterButtons
              title="Uso"
              value={audienceValue}
              onChange={setSelectedAudience}
              options={audienceOptions}
            />
          ) : null}

          {formatOptions.length > 1 ? (
            <FilterButtons
              title="Tipo"
              value={formatValue}
              onChange={setSelectedFormat}
              options={formatOptions}
            />
          ) : null}
        </aside>

        <div className={styles.resultsPanel}>
          <div className={styles.resultsMeta}>
            <div>
              <span className={styles.resultsEyebrow}>Resultados</span>
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
            <EmptyState message="Prueba ajustando la búsqueda o limpiando alguno de los filtros del catálogo." />
          )}
        </div>
      </div>
    </>
  );
}

function CategorySection({ slug, label, products, search, onSearchChange }) {
  const searchId = useId();
  const [selectedAudience, setSelectedAudience] = useState("all");
  const [selectedFormat, setSelectedFormat] = useState("all");

  const audienceOptions = useMemo(
    () =>
      Array.from(new Set(products.map((product) => product.audience))).map(
        (value) => ({
          value,
          label: audienceLabels[value],
        })
      ),
    [products]
  );

  const formatOptions = useMemo(
    () =>
      Array.from(new Set(products.map((product) => product.format))).map((value) => ({
        value,
        label: formatLabels[value] ?? value,
      })),
    [products]
  );

  const visibleProducts = useMemo(() => {
    const normalizedSearch = search.trim().toLocaleLowerCase("es");

    return products.filter((product) => {
      const matchesSearch =
        !normalizedSearch ||
        product.name.toLocaleLowerCase("es").includes(normalizedSearch) ||
        product.description.toLocaleLowerCase("es").includes(normalizedSearch);

      const matchesAudience =
        selectedAudience === "all" || product.audience === selectedAudience;
      const matchesFormat =
        selectedFormat === "all" || product.format === selectedFormat;

      return matchesSearch && matchesAudience && matchesFormat;
    });
  }, [products, search, selectedAudience, selectedFormat]);

  return (
    <section id={`categoria-${slug}`} className={styles.categorySection}>
      <div className={styles.categoryHeader}>
        <div>
          <span className={styles.resultsEyebrow}>Categoría</span>
          <h1 className={styles.pageTitle}>{label}</h1>
        </div>

        <div className={styles.resultsCount}>
          <Tag size={16} />
          <span>{visibleProducts.length} resultados</span>
        </div>
      </div>

      <div className={styles.filterBar}>
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
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Nombre o descripcion"
              className={styles.searchInput}
            />
          </div>
        </div>

        {audienceOptions.length > 1 ? (
          <FilterButtons
            title="Humano / veterinario"
            value={selectedAudience}
            onChange={setSelectedAudience}
            options={audienceOptions}
          />
        ) : null}

        {formatOptions.length > 1 ? (
          <FilterButtons
            title="Tipo"
            value={selectedFormat}
            onChange={setSelectedFormat}
            options={formatOptions}
          />
        ) : null}
      </div>

      {visibleProducts.length ? (
        <div className={styles.grid}>
          {visibleProducts.map((product, index) => (
            <EquipmentCard key={product.slug} product={product} index={index} />
          ))}
        </div>
      ) : (
        <EmptyState message="Prueba con otra combinación dentro de esta categoría." />
      )}
    </section>
  );
}

export default function EquipmentCatalog({ initialCategorySlug = null }) {
  const [search, setSearch] = useState("");
  const deferredSearch = useDeferredValue(search);

  if (!initialCategorySlug) {
    return (
      <section className={styles.page}>
        <div className={styles.catalogShell}>
          <FullCatalog
            search={search}
            setSearch={setSearch}
            deferredSearch={deferredSearch}
          />
        </div>
      </section>
    );
  }

  return (
    <section className={styles.page}>
      <div className={styles.catalogShell}>
        <CategorySection
          slug={initialCategorySlug}
          label={categoryLabels[initialCategorySlug]}
          products={productCatalog.filter(
            (product) => product.category === initialCategorySlug
          )}
          search={deferredSearch}
          onSearchChange={setSearch}
        />
      </div>
    </section>
  );
}
