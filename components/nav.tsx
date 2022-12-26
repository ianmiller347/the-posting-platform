import { useSession } from "next-auth/react";
import Link from "next/link"
import styles from "./nav.module.css"


export default function Nav() {
  const { data: session } = useSession();
  return (
    <nav>
        <ul className={styles.navItems}>
          <li className={styles.navItem}>
            <Link href="/">
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/documentation">
              Documentation
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about">
              About2
            </Link>
          </li>
        </ul>
      </nav>
  );
}