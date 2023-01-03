import { useSession } from "next-auth/react";
import Link from "next/link";
import classNames from "classnames/bind";
import styles from "./Nav.module.css";

const cx = classNames.bind(styles);

export default function Nav() {
  const { data: session } = useSession();
  return (
    <nav className={cx("nav")}>
      <ul className={cx("nav__list")}>
        <li className={cx("nav__list-item")}>
          <Link href="/">Home</Link>
        </li>
        <li className={cx("nav__list-item")}>
          <Link href="/posts">Posts</Link>
        </li>
        <li className={cx("nav__list-item")}>
          <Link href="/users">Users</Link>
        </li>
      </ul>
    </nav>
  );
}
