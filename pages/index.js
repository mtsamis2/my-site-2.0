import Intro from '../components/intro'
import Sidebar from '../components/sidebar'
import Layout from '../components/layout'
import { getAllPostsForPagination } from '../lib/api'
import Articles from '../components/articles'
import Pagination from '../components/pagination'

export default function Index({ preview, allPosts, pagination }) {
  return (
    <div id='wrapper'>
      <Layout
        preview={preview}
        title={'Home - MikeTsamis.com'}
        description={'I am a Senior Software Engineer based in NYC. This blog is used to share my own projects, findings, and opinions. My objective is to share fun, interesting, and useful tech projects and break them down as simple as possible to inspire more interest in STEM.'}
      >
        <Intro className="introIndex" />
        <Articles allPosts={allPosts} />
        <Pagination pagination={pagination} />
      </Layout>
      <Sidebar/>
    </div>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForPagination(0, preview)) ?? []

  return {
    props: {
      preview,
      allPosts: allPosts.items,
      pagination: {
        previousPage: 0,
        nextPage: 1,
        previousDisabled: true,
        nextDisabled: false
    }
    }
  }
}
