import Head from 'next/head';
import { ReactElement } from 'react';
import classNames from 'classnames/bind';
import styles from './Page.module.css';
import Footer from '../Footer';
import Header from '../Header';

const cx = classNames.bind(styles);

interface PageProps {
  children: ReactElement; // page content/body
  description?: string; // page description
  title?: string;
}

const siteTitle = 'The Posting Platform';
const siteDescription =
  'Post things on the posting platform. It is the platform for posting. Check out the posts on the posting platform.';

/**
 * Page holds the layout and contents of a page on the application.
 * It holds page data like the title, description, and body contents
 * It holds the layout of hte page as well.
 *
 * Head is the html head attribute that gets populated for metadata
 * Header is the header of the page
 * Main is the main body of the page
 * Footer is the footer of the page
 *
 * @returns Page
 */
const Page = ({
  children,
  description = siteDescription,
  title = siteTitle,
}: PageProps) => (
  <div className={cx('container', 'page')}>
    <Head>
      <title>{title === siteTitle ? title : `${title} | ${siteTitle}`}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <main className={cx('main')}>
      <h1 className={cx('page__title')}>{title}</h1>
      {children}
    </main>

    <Footer />
  </div>
);

export default Page;
