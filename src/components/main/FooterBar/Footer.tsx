import styles from "./Footer.module.css";
import { footerText } from "./footerContent";
import ContactButtons from "../../reusable/ContactButtons/ContactButtons";

export default function Footer() {
  return (
    <footer className={styles.footerBar}>
      <div className={styles.leftContainer}>{footerText}</div>
      <div className={styles.rightContainer}><ContactButtons/></div>
    </footer>
  );
}
