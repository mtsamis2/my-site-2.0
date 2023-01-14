import Intro from '../../components/intro'
import Sidebar from '../../components/sidebar'
import Layout from '../../components/layout'
import { getAllPostsForHome, getAllPostsForPagination } from '../../lib/api'
import Articles from '../../components/articles'
import Pagination from '../../components/pagination'
import { useRouter } from 'next/router'

export default function Page({ preview, allPosts, pagination }) {
  const router = useRouter()

  if (!router.isFallback && !allPosts) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <div id='wrapper'>
      {router.isFallback ?
      (<h1>Loading…</h1>) :
      (
        <Layout
          preview={preview}
          title={'Home - MikeTsamis.com'}
          description={'I am a Senior Software Engineer based in NYC. This blog is used to share my own projects, findings, and opinions. My objective is to share fun, interesting, and useful tech projects and break them down as simple as possible to inspire more interest in STEM.'}
        >
          <Intro className="introIndex" />
          <Articles allPosts={allPosts} />
          <Pagination pagination={pagination} />
        </Layout>
      )}
      <Sidebar/>
    </div>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const page = params.page;
  const pageNumber = page ? page * 2 : 0;

  const allPosts = (await getAllPostsForPagination(pageNumber, preview)) ?? { items: [], total: 0};

  const currentPage = pageNumber / 2;
  const previousPage = currentPage - 1 == 0 ? "" : currentPage - 1;
  const nextPage = parseInt(currentPage, 10) + 1;

  const previousDisabled = previousPage < 0;
  const nextDisabled = allPosts.total <= nextPage * 2;

  return {
    props: {
      preview,
      allPosts: allPosts?.items,
      pagination: {
        previousPage: previousPage,
        nextPage: nextPage,
        previousDisabled: previousDisabled,
        nextDisabled: nextDisabled
    }
    }
  }
}

export async function getStaticPaths({ params, preview = false }) {
    const allPosts = (await getAllPostsForHome(preview)) ?? [];
  
    var paths = [];

    for (var i = 1; i < allPosts.length / 2; i++) {
      paths.push(`/pages/${i}`);
    }

    console.log(paths)

    return {
      paths: paths ?? [],
      fallback: false
    }
  }