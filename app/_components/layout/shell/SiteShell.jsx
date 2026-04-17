import SiteFooter from "../footer/SiteFooter";
import SiteNavbar from "../navbar/SiteNavbar";
import styles from "./SiteShell.module.scss";

export default function SiteShell({ children }) {
  return (
    <div className={styles.shell}>
      <SiteNavbar />
      <main className={styles.main}>{children}</main>
      <SiteFooter />
    </div>
  );
}
