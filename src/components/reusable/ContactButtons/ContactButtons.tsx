import { Button } from "@mantine/core";
import styles from "./ContactButtons.module.css";
import { resumeLink, emailLink } from "./contactButtonsContent";

export default function ContactButtons() {
  return (
    <div className={styles.buttonWrapper}>
      <Button
        component="a"
        href={resumeLink}
        target="_blank"
        className={styles.leftButton}
      >
        View Resume
      </Button>
      <Button
        component="a"
        href={emailLink}
        target="_blank"
        className={styles.rightButton}
      >
        Get In Touch
      </Button>
    </div>
  );
}
