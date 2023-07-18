import Link from 'next/link';
import Date from '../components/date';
import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout';
import utilStyles from '../styles/utils.module.css';

import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>BLOG</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title })=>(
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
        <p>This is a website belonging to Nathaniel Sun. He copied nearly all the code for it off of next.js's tutorial.</p>
        <p>This is definitely a test <a href='/posts/first-post'>website</a>. If you manage to somehow find this in twenty years (right now it is 2023) you are very fortunate. This is the first website he ever coded.</p>
        <p>He followed <a href='https://nextjs.org/learn'>THIS</a> tutorial</p>
      </section>
    </Layout>
  )
}