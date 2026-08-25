import { useState, useEffect, useMemo } from "react";
import { Text, Accordion, Grid } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import {
  accordionHeader,
  accordionData,
  gridDataDefault,
  gridDataMobile,
} from "./workContent";
import styles from "./Work.module.css";

import ContactButtons from "../../reusable/ContactButtons/ContactButtons";

export default function Work() {
  const [draggableStatus, setDraggableStatus] = useState(false);
  const [gridSpan, setGridSpan] = useState(6);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 992) {
        setDraggableStatus(false);
        setGridSpan(6);
      } else if (window.innerWidth <= 992) {
        setDraggableStatus(true);
        setGridSpan(4);
      }
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  const gridContent = useMemo(() => {
    switch (draggableStatus) {
      case true:
        return (
          <Carousel
            className={styles.carouselContainer}
            classNames={{ controls: styles.carouselControls }}
            emblaOptions={{
              watchDrag: draggableStatus,
            }}
          >
            {gridDataMobile.map((slideItems, slideIndex) => (
              <Carousel.Slide key={slideIndex}>
                <Grid grow className={styles.gridContainer}>
                  {slideItems.map((item) => (
                    <Grid.Col
                      key={item.id}
                      span={gridSpan}
                      className={styles.imageContainer}
                    >
                      <img src={item.url} alt={item.alt} />
                    </Grid.Col>
                  ))}
                </Grid>
              </Carousel.Slide>
            ))}
          </Carousel>
        );

      case false:
        return (
          <Carousel
            className={styles.carouselContainer}
            classNames={{ controls: styles.carouselControls }}
            emblaOptions={{
              watchDrag: draggableStatus,
            }}
          >
            <Carousel.Slide>
              <Grid grow className={styles.gridContainer}>
                {gridDataDefault.map((item) => (
                  <Grid.Col
                    span={gridSpan}
                    className={styles.imageContainer}
                    key={item.id}
                  >
                    <img src={item.url} alt={item.alt} />
                  </Grid.Col>
                ))}
              </Grid>
            </Carousel.Slide>
          </Carousel>
        );
    }
  }, [draggableStatus]);

  return (
    <section className={styles.workContainer} id="work">
      <div className={styles.leftContainer}>
        <Text className={styles.accordionHeader}>{accordionHeader}</Text>
        <Accordion order={3} className={styles.accordionContainer}>
          {items}
        </Accordion>
        <div className={styles.buttonContainer}>
          <ContactButtons />
        </div>
      </div>
      <div className={styles.rightContainer}>{gridContent}</div>
    </section>
  );
}
