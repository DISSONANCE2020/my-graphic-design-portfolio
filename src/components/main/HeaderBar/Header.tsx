import React from "react";
import { Image } from "@mantine/core";
import { navItems } from "./headerContent";
import styles from "./Header.module.css";
import myLogo from "../../../assets/logos/myLogo.png";

export default function Header() {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const section = document.getElementById(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={styles.headerBar}>
      <a
        className={styles.myLogoContainer}
        onClick={(e) => handleNavClick(e, "hero")}
      >
        <Image src={myLogo} className={styles.myLogo} />
      </a>
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
              <a
                className={styles.listItems}
                href={`#${item.href}`}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
