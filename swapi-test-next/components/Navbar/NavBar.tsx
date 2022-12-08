import Link from "next/link"
import React, { useState } from "react"
import NavItem from './NavItem'
import styles from './NavBar.module.scss'


const NAV_ITEMS = [
  { text: "Home", href: "/home" },
  { text: "Search", href: "/search" },
];

function NavBar() {
  const [navActive, setNavActive] = useState(false);
  const [activeItem, setActiveItem] = useState(-1);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href={"/"}>
          <h1 className="logo">SWAPI</h1>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={styles.navMenuBar}
        >
        </div>
        <div className={`${navActive ? "active" : ""} ${styles.navMenuList}`}>
          {NAV_ITEMS.map((menu, index) => (
            <div
              onClick={() => {
                setActiveItem(index);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeItem === index} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;