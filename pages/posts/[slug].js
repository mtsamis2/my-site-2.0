import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'
import PostBody from '../../components/post-body'
import MoreStories from '../../components/more-stories'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import SectionSeparator from '../../components/section-separator'
import Layout from '../../components/layout'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import { CMS_NAME } from '../../lib/constants'
import DateComponent from '../../components/date'

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <div className='single'>
      <div id='wrapper'>
        <Layout preview={preview}>
          <div id='main'>
            {router.isFallback ? (
              <PostTitle>Loading…</PostTitle>
            ) : (
              <article className="post">
                <header>
                  <div className="title">
                      <h2>{post.title}</h2>
                      <p>{post.subtitle}</p>
                  </div>
                  <div className="meta">
                      <time className="published">
                          <DateComponent dateString={post.date}/>
                      </time>
                      <div className="author">
                          <span className="name">{post.author.name}</span>
                          <img src={post.author.picture.url}/>
                      </div>
                  </div>
                </header>
                <span className="image featured">
                  <img src={post.coverImage.url}/>
                </span>
                <PostBody content={post.content} />
                <footer>
                  <ul className="stats">
                    <li>
                      <a href={`/categories/${post.category.slug}`}>
                          {post.category.title}
                      </a>
                    </li>
                  </ul>
                </footer>
              </article>
            )}
            </div>
        </Layout>
      </div>
    </div>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview)

  return {
    props: {
      preview,
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? null,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths: allPosts?.map(({ slug }) => `/posts/${slug}`) ?? [],
    fallback: true,
  }
}
