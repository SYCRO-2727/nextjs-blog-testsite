
import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
const name = 'Nathaniel Sun'
export const siteTitle = 'Next.js website test'
import Link from 'next/link';
import Image from 'next/image';

export default function Layout({ children, home }) {
    return (<div className={styles.container}>
        <Head>
            <Link rel='icon' href='/favicon.ico'/>
            <meta name='description'
                  content='Learn how to build a personal website using next'/>
            <meta
                property='og:image'
                content={`https://og-image.vercel.app/${encodeURI(siteTitle,)}.png?theme=;ight&md=0&fontSize75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name='twitter:card' content="summary_large_image" /> 
        </Head>
        <header className={styles.header}>
            {home ? (
                <>
                    <Image
                    priority
                    src='/images/profile.png'
                    className={utilStyles.borderCircle}
                    height={144}
                    width={144}
                    alt='profile image'
                />
                <h1 className={utilStyles.heading2Xl}>{name}</h1>
                </>
            ) : (
                <>
                    <Link href='/'>
                        <Image
                            priority
                            src='/images/profile.png'
                            className={utilStyles.borderCircle}
                            height={108}
                            width={108}
                            alt='profile image'
                        />
                    </Link>
                    <h2 className={utilStyles.headingLg}>
                        <Link href='/' className={utilStyles.colorInherit}>
                            {name}
                        </Link>
                    </h2>
                </>
            )}
        </header>
        <main>{children}</main>
        {!home && (
            <div className={styles.backToHome}>
                <Link href='/'>Back to home</Link>
            </div>
        )}
        </div>
        );
}