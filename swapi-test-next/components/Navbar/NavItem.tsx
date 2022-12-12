import Link from "next/link";
import styles from '../../styles/NavBar.module.scss'

interface NavItems {
  text: string,
  href: string,
  active: boolean
}

function NavItem({ text, href, active }: NavItems) {
  return (
    <Link href={href}>
      <p className={`${styles.navItem} ${active ? "active" : ""
        }`}>{text}</p>
    </Link>
  );
};

export default NavItem;