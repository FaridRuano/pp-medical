import Image from "next/image";
import { whatsappUrl } from "@app/_data/site";
import styles from "./WhatsappFloat.module.scss";

const whatsappMessage = encodeURIComponent(
  "Hola me gustaria contizar un equipo!"
);

const whatsappHref = `${whatsappUrl}?text=${whatsappMessage}`;

export default function WhatsappFloat() {
  return (
    <div className={styles.wrap}>
      <a
        href={whatsappHref}
        className={styles.button}
        target="_blank"
        rel="noreferrer"
        aria-label="Cotiza tu equipo hoy por WhatsApp"
      >
        <span className={styles.bubble}>Cotiza tu equipo hoy</span>
        <span className={styles.iconFrame} aria-hidden="true">
          <Image
            src="/icons/whastapp.svg"
            alt=""
            width={30}
            height={30}
            className={styles.icon}
          />
        </span>
      </a>
    </div>
  );
}
