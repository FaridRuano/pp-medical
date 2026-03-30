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
          Estamos construyendo algo grande para ti
          <br /> <span>P&amp;P Medical</span>
        </h1>

        <p className={styles.constructionText}>
          Muy pronto podrás conocer nuestra línea de equipos médicos
          veterinarios y humanos, incluyendo ecógrafos, paneles de rayos X y
          más soluciones especializadas.
        </p>
      </section>
    </main>
  );
}