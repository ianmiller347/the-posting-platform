import { signIn, signOut, useSession } from 'next-auth/react';
import classNames from 'classnames/bind';
import styles from './SignInStatus.module.css';

const cx = classNames.bind(styles);

interface SignInStatusProps {
  isLoading: boolean;
}

const SignInStatus = ({ isLoading }: SignInStatusProps) => {
  const { data: session } = useSession();
  const isSignedIn = !!session?.user;
  let signInText = 'You are not signed in';

  if (isSignedIn) {
    signInText = `Signed in as ${session?.user?.email || session?.user?.name}`;
  }

  if (isLoading) {
    signInText = 'Loading...';
  }

  const buttonLink = isSignedIn ? '/api/auth/signout' : '/api/auth/signin';
  const buttonText = isSignedIn ? 'Sign Out' : 'Sign In';

  return (
    <div className={cx('sign-in-status')}>
      <p className={cx('sign-in-status__text')}>{signInText}</p>
      <div className={cx('sign-in-status__button-container')}>
        <a
          href={buttonLink}
          className={cx('button sign-in-status__button')}
          onClick={(e) => {
            e.preventDefault();
            if (isSignedIn) {
              signOut();
            } else {
              signIn();
            }
          }}
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default SignInStatus;
