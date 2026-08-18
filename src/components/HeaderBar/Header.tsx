import React from "react";
import { UnstyledButton, Image } from "@mantine/core";
import { navItems } from "./headerContent";
import styles from "./Header.module.css";
import myLogo from "../../assets/logos/myLogo.png";

export default function Header() {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string,
  ) => {};

  return (
    <header className={styles.headerBar}>
      <UnstyledButton className={styles.myLogoContainer}>
        <Image src={myLogo} className={styles.myLogo}/>
      </UnstyledButton>
      <nav>
        <ul
          style={{
            display: "flex",
            gap: "2rem",
            margin: 0,
            padding: 0,
            listStyle: "none",
          }}
        >
          {navItems.map((item) => (
            <li key={item.label}>
              <a className={styles.listItems}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
