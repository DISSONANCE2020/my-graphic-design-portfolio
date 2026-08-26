import { Text, Accordion} from "@mantine/core";
import {
  accordionHeader,
  accordionData,
} from "../workContent";
import styles from "./WorkAccordion.module.css";

import ContactButtons from "../../../reusable/ContactButtons/ContactButtons";

const items = accordionData.map((item) => (
  <Accordion.Item key={item.label} value={item.description}>
    <Accordion.Control className={styles.accordionLabel}>
      {item.label}
    </Accordion.Control>
    <Accordion.Panel className={styles.accordionDescription}>
      {item.description}
    </Accordion.Panel>
  </Accordion.Item>
));

export default function WorkAccordion() {
  return (
    <div className={styles.leftContainer}>
      <Text className={styles.accordionHeader}>{accordionHeader}</Text>
      <Accordion order={3} className={styles.accordionContainer}>
        {items}
      </Accordion>
      <div className={styles.buttonContainer}>
        <ContactButtons />
      </div>
    </div>
  );
}
