import React from "react";
import { Image } from "@mantine/core";
import heroImage from "../../assets/heroSection/heroImage.png";
import { description } from "./heroContent"
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroContainer} id="hero">
      <div className={styles.leftContainer}>
          <Image src={heroImage} className={styles.heroImage} />
      </div>
      <div className={styles.rightContainer}><span className={styles.heroDescription}>{description.text}</span></div>
    </section>
  );
}
