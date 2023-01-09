import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Layout from '../../components/layout'
import { getAllCategories, getPostsByCategory, getCategoryBySlug } from '../../lib/api'
import DateComponent from '../../components/date'

export default function Category({ posts, category, preview }) {
  const router = useRouter()

  if (!router.isFallback && !category) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <div className='single'>
     <div id='wrapper'>
      {router.isFallback ?
        (<h1>Loading…</h1>) :
        (
          <Layout
            preview={preview}
            title={`${category.title} - MikeTsamis.com`}
            description={`Posts with the category "${category.title}"`}
          >
            <header>
                <h3>Posts with the category "{category.title}"</h3>
            </header>
            <div className="categories">
              {posts.map((post, key) => (
                <article className="mini-post" key={key}>
                  <header>
                    <h3>
                        <a href={`/posts/${post.slug}`} >{post.title}</a>
                    </h3>
                    <time className="published">
                      <DateComponent dateString={post.date}/>
                    </time>
                  </header>
                  <a className="image" href={`/posts/${post.slug}`}>
                    <img src={post.coverImage.url} alt={`The cover image for the article '${post.title}'`} loading='lazy'/>
                  </a>
                </article>
              ))}
            </div>
          </Layout>
        )
      }
     </div>
  </div>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const category = await getCategoryBySlug(preview, params.category)
  const posts = category ? await getPostsByCategory(preview, category.slug) : null

  return {
    props: {
      posts,
      category,
      preview
    } 
  }
}

export async function getStaticPaths() {
  const allCategories = await getAllCategories()
  return {
    paths: allCategories?.map(({ slug }) => `/categories/${slug}`) ?? [],
    fallback: false
  }
}
