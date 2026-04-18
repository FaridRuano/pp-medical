import Image from "next/image";
import { brands } from "@app/_data/site";
import styles from "./HomeBrands.module.scss";

const sliderBrands = [...brands, ...brands];

export default function HomeBrands() {
  return (
    <section className={styles.section} aria-label="Marcas aliadas">
      <div className={styles.header}>
        <span className={styles.kicker}>Marcas</span>
        <h2 className={styles.title}>Nuestras Marcas Aliadas</h2>
      </div>
      <div className={styles.track}>
        <div className={styles.slider}>
          {sliderBrands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className={styles.logoCard}
              aria-hidden={index >= brands.length}
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={200}
                height={100}
                className={styles.logo}
              />
            </div>
          ))}
        </div>
      </div>
    </section >
  );
}
