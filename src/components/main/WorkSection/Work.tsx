import WorkAccordion from "./LeftAccordion/WorkAccordion";
import WorkGrid from "./RightGrid/WorkGrid";

import styles from "./Work.module.css";

export default function Work() {
  return (
    <section className={styles.workContainer} id="work">
      <WorkAccordion />
      <WorkGrid />
    </section>
  );
}
