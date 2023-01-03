import { useSession } from 'next-auth/react';
import classNames from 'classnames/bind';
import Nav from '../Nav';
import SignInStatus from './SignInStatus';
import styles from './Header.module.css';

const cx = classNames.bind(styles);

export default function Header() {
  const { status } = useSession();
  const isLoading = status === 'loading';

  return (
    <header className={cx('header')}>
      <Nav />
      <SignInStatus isLoading={isLoading} />
    </header>
  );
}
