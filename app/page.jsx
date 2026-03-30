import Image from "next/image";
import { Wrench } from "lucide-react";
import styles from "./page.module.scss";

export default function HomePage() {
  return (
    <main className={styles.constructionPage}>
      <div className={`${styles.constructionGlow} ${styles.glowOne}`} />
      <div className={`${styles.constructionGlow} ${styles.glowTwo}`} />

      <section className={styles.constructionWrap}>
        <div className={styles.constructionLogoBox}>
          <Image
            src="/imgs/pp-medical-dark.webp"
            alt="P&P Medical"
            width={220}
            height={220}
            priority
            className={`${styles.constructionLogo} ${styles.logoLight}`}
          />

          <Image
            src="/imgs/pp-medical.webp"
            alt="P&P Medical"
            width={220}
            height={220}
            priority
            className={`${styles.constructionLogo} ${styles.logoDark}`}
          />
        </div>

        <div className={styles.constructionBadge}>
          <Wrench size={18} strokeWidth={2.2} />
          <span>Sitio en desarrollo</span>
        </div>

        <h1 className={styles.constructionTitle}>
          Estamos construyendo una nueva experiencia para ti
         
        </h1>

        <p className={styles.constructionText}>
          En P&P Medical estamos desarrollando un espacio donde la innovación en diagnóstico por imagen será protagonista.
          Muy pronto podrás conocer nuestra línea de equipos de diagnóstico por imagen para uso humano y veterinario, diseñada para ofrecer precisión, confiabilidad y alto rendimiento clínico.
        </p>
      </section>
    </main>
  );
}