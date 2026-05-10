import Image from "next/image";
import Link from "next/link";
import { MailIcon, MapPin, Phone } from "lucide-react";
import styles from "./SiteFooter.module.scss";
import { whatsappUrl } from "@app/_data/site";
import { socialLinks } from "@app/_data/site";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.surface}>
          <div className={styles.grid}>
            <section className={styles.brand} aria-label="P&P Medical">
              <Link href="/" className={styles.logoLink}>
                <Image
                  src="/imgs/pp-medical-dark.webp"
                  alt="P&P Medical"
                  width={240}
                  height={80}
                  priority
                  className={styles.logo}
                />
              </Link>
            </section>

            <section className={styles.column} aria-labelledby="footer-address">
              <h2 id="footer-address" className={styles.footerHeading}>
                Dirección
              </h2>
              <div className={styles.infoRow}>
                <span className={styles.infoIcon} aria-hidden="true">
                  <MapPin size={18} strokeWidth={2.1} />
                </span>
                <address className={styles.footerText}>
                  Mariscal Foch y José Tamayo, Quito, Ecuador, 170523
                </address>
              </div>
            </section>

            <section className={styles.column} aria-labelledby="footer-contact">
              <h2 id="footer-contact" className={styles.footerHeading}>
                Contacto
              </h2>
              <div className={styles.infoRow}>
                <span className={styles.infoIcon} aria-hidden="true">
                  <Phone size={18} strokeWidth={2.1} />
                </span>
                <a className={styles.footerText} href={whatsappUrl} target="_blank" rel="noreferrer">
                  +593 998 883 103
                </a>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoIcon} aria-hidden="true">
                  <MailIcon size={18} strokeWidth={2.1} />
                </span>
                <a className={styles.footerText} href={whatsappUrl} target="_blank" rel="noreferrer">
                  info@pypmedical.ec
                </a>
              </div>
            </section>

            <section className={styles.column} aria-labelledby="footer-social">
              <h2 id="footer-social" className={styles.footerHeading}>
                Redes Sociales
              </h2>
              <div className={styles.socialList}>
                {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={styles.socialLink}
                  target="_blank"
                    rel="noreferrer"
                    aria-label={link.name}
                  >
                    <span className={styles.socialIcon}>
                      <Image
                        src={link.icon}
                        alt=""
                        width={18}
                        height={18}
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </footer>
  );
}
