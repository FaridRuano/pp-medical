"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import styles from "./ProductMediaLightbox.module.scss";

const CLOSE_ANIMATION_MS = 280;

export default function ProductMediaLightbox({
  image,
  alt,
  tags = [],
  placeholderPath,
}) {
  const closeTimeoutRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRenderOverlay, setShouldRenderOverlay] = useState(false);

  const hasImage = Boolean(image);

  const openLightbox = () => {
    if (!hasImage) return;

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

  const closeLightbox = () => {
    setIsOpen(false);

    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
    }

    closeTimeoutRef.current = window.setTimeout(() => {
      setShouldRenderOverlay(false);
    }, CLOSE_ANIMATION_MS);
  };

  useEffect(() => {
    if (!isOpen) return;

    const html = document.documentElement;
    const body = document.body;
    const previousHtmlOverflow = html.style.overflow;
    const previousBodyOverflow = body.style.overflow;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeLightbox();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      html.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
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

  return (
    <>
      <button
        type="button"
        className={`${styles.mediaTrigger} ${hasImage ? styles.mediaTriggerActive : ""}`}
        onClick={openLightbox}
        aria-label={hasImage ? "Ver imagen en grande" : "Imagen pendiente"}
      >
        <div className={styles.mediaFrame}>
          <div className={styles.mediaTags}>
            {tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>

          {hasImage ? (
            <>
              <Image
                src={image}
                alt={alt}
                fill
                sizes="(max-width: 959px) 100vw, 28rem"
                className={styles.image}
              />
              <span className={styles.zoomHint}>Click para ampliar</span>
            </>
          ) : (
            <div className={styles.placeholder}>
              <span className={styles.placeholderTag}>Imagen pendiente</span>
              <strong>{alt}</strong>
              <small>{placeholderPath}</small>
            </div>
          )}
        </div>
      </button>

      {shouldRenderOverlay && typeof document !== "undefined"
        ? createPortal(
            <div
              className={`${styles.overlay} ${isOpen ? styles.overlayOpen : styles.overlayClosing}`}
              role="dialog"
              aria-modal="true"
              aria-label={`Vista ampliada de ${alt}`}
              onClick={closeLightbox}
            >
              <button
                type="button"
                className={styles.closeButton}
                aria-label="Cerrar imagen ampliada"
                onClick={closeLightbox}
              >
                <X size={18} aria-hidden="true" />
              </button>

              <div className={styles.modalBody} onClick={(event) => event.stopPropagation()}>
                <div className={styles.modalFrame}>
                  <Image
                    src={image}
                    alt={alt}
                    fill
                    sizes="100vw"
                    className={styles.modalImage}
                  />
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
