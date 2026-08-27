import styles from "./About.module.css";
import { UnstyledButton } from "@mantine/core";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import {
  myPhoto,
  headerText,
  descriptionText,
  songLink,
  songTitle,
  songArtist,
} from "./aboutContent";

export default function About() {
  return (
    <section id="about" className={styles.aboutContainer}>
      <div className={styles.leftContainer}>
        <img src={myPhoto} alt="myPhoto.png" className={styles.myPhoto} />
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.textContainer}>
          <div className={styles.headerContainer}>
            <div className={styles.headerTextContainer}>
              <img
                src={headerText}
                alt="headerText"
                className={styles.headerText}
              />
            </div>
            <div className={styles.headerImageContainer}>
              <img src={myPhoto} alt="myPhoto.png" className={styles.myPhoto} />
            </div>
          </div>
          <div className={styles.descriptionText}>{descriptionText}</div>
        </div>
        <div className={styles.musicContainer}>
          <UnstyledButton
            component="a"
            href={songLink}
            target="_blank"
            className={styles.playButtonContainer}
          >
            <PlayArrowIcon fontSize="large" className={styles.playButton} />
          </UnstyledButton>
          <div className={styles.songContainer}>
            <div className={styles.songTitle}>Now Playing: {songTitle}</div>
            <div className={styles.songArtist}>{songArtist}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
