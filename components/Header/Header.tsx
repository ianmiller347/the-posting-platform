import { useSession } from "next-auth/react";
import classNames from "classnames/bind";
import styles from "./Header.module.css";
import Nav from "../Nav";
import SignInStatus from "./SignInStatus";

const cx = classNames.bind(styles);

export default function Header() {
  const { status } = useSession();
  const isLoading = status === "loading";

  return (
    <header className={cx("header")}>
      <Nav />
      <SignInStatus isLoading={isLoading} />
    </header>
  );
}
