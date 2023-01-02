import Head from 'next/head'
import Link from 'next/link'
import DateFormat from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import HelloWorld from '../components/HelloWorld'
import { GetStaticProps } from 'next'

export default function Home({ allPostsData }: { allPostsData: {date: string, title: string, id: string }[] }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <Link href="/posts/first-post" className="text-xl text-blue-500">first-post</Link>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <HelloWorld />

      <section className="m-3">
        <h2 className="text-2xl">Blog</h2>
        <ul className="">
          {allPostsData.map(({id, date, title}) => (
            <li className="border border-solid" key={id}>
              <Link href={`/posts/${id}`} className="text-xl text-blue-500">{title}</Link>
              <br />
              <small className="text-gray-500">
                <DateFormat dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  }
}