import styles from "./Software.module.css";
import { header, logos } from "./softwareContent";

export default function Software() {
  return (
    <section id="software" className={styles.softwareContainer}>
      <div className={styles.headerText}>{header.text}</div>
      <div className={styles.logoContainer}>
        {logos.map((logo) => (
          <div key={logo.id} className={styles.logoWrapper}>
            <img src={logo.url} alt={logo.alt} className={styles.logo} />
          </div>
        ))}
      </div>
    </section>
  );
}
