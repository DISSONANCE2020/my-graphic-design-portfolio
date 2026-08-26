import { useState, useEffect, useMemo } from "react";
import { Grid, Button } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { gridDataDefault, gridDataMobile } from "./../workContent";

import styles from "./WorkGrid.module.css";

export default function WorkGrid() {
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

  const gridContent = useMemo(() => {
    switch (draggableStatus) {
      case true:
        return (
          <Carousel
            className={styles.carouselContainer}
            styles={{
              root: {
                marginBottom: 32,
              },
              indicators: {
                bottom: -32,
              },
              indicator: {
                width: 10,
                height: 10,
                backgroundColor: "#cdcdcd",
              },
              controls: { opacity: 0 },
            }}
            emblaOptions={{
              watchDrag: draggableStatus,
            }}
            withIndicators
          >
            {gridDataMobile.map((slideItems, slideIndex) => (
              <Carousel.Slide key={slideIndex}>
                <Grid grow className={styles.gridContainer}>
                  {slideItems.map((item) => (
                    <Grid.Col
                      key={item.id}
                      span={gridSpan}
                      className={styles.imageFrame}
                    >
                      <Button
                        color={item.borderColor}
                        className={styles.imageBorder}
                      >
                        <img
                          src={item.url}
                          alt={item.alt}
                          className={styles.image}
                        />
                      </Button>
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
            styles={{
              controls: { opacity: 0 },
            }}
            emblaOptions={{
              watchDrag: draggableStatus,
            }}
          >
            <Carousel.Slide>
              <Grid grow className={styles.gridContainer}>
                {gridDataDefault.map((item) => (
                  <Grid.Col
                    span={gridSpan}
                    key={item.id}
                    className={styles.imageFrame}
                  >
                    <Button
                      color={item.borderColor}
                      className={styles.imageBorder}
                    >
                      <img
                        src={item.url}
                        alt={item.alt}
                        className={styles.image}
                      />
                    </Button>
                  </Grid.Col>
                ))}
              </Grid>
            </Carousel.Slide>
          </Carousel>
        );
    }
  }, [draggableStatus]);
  return <div className={styles.rightContainer}>{gridContent}</div>;
}
