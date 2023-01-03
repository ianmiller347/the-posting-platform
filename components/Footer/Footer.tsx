import classNames from "classnames/bind";
import styles from './Footer.module.css';

const cx = classNames.bind(styles);

export default function Footer() {
  return (
    <footer className={cx('footer')}>
      The Posting Platform
    </footer>
  );
}
