import Head from 'next/head';
import { ReactElement } from 'react';
import classNames from 'classnames/bind';
import styles from './Page.module.css';

const cx = classNames.bind(styles);
 
interface PageProps {
  children: ReactElement;
  description: string;
  title: string;
}

const Page = ({ children, description, title }: PageProps) => (
  <div className={cx('container')}>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={cx('main')}>
      <h1>{title}</h1>
      {children}
    </main>

    <footer className={cx('footer')}>
      The Posting Platform
    </footer>
  </div>
)

export default Page;
