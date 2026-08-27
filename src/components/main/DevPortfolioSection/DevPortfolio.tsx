import { UnstyledButton } from "@mantine/core";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { devPortfolioText, devPortfolioLink } from "./devPortfolioContent";
import styles from "./DevPortfolio.module.css";

export default function DevPortfolio() {
  return (
    <section className={styles.devPortfolioContainer} id="devPortfolio">
      <div className={styles.text}>
        <div>{devPortfolioText.lineOne}</div>
        <div>{devPortfolioText.lineTwo}</div>
      </div>
      <UnstyledButton component="a" href={devPortfolioLink} target="_blank">
        <ArrowForwardIcon className={styles.arrowIcon} />
      </UnstyledButton>
    </section>
  );
}
