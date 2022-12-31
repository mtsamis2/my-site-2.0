import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Layout from '../../components/layout'
import { getAllCategories, getPostsByCategory, getCategoryBySlug } from '../../lib/api'
import PostTitle from '../../components/post-title'
import DateComponent from '../../components/date'
import Script from "next/script";

export default function Category({ posts, category, preview }) {
  const router = useRouter()

  if (!router.isFallback && !category) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <div className='single'>
      <div className="align-center">
        <Script
          id="Adsense-id"
          data-ad-client="ca-pub-5287798851641238"
          async="true"
          strategy="beforeInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          slot='7619023422'
          style={{ display:'block'}}
          format='auto'
          responsive='true'
        />
      </div>
     <div id='wrapper'>
      <Layout preview={preview}>
        {router.isFallback ?
          (<PostTitle>Loading…</PostTitle>) :
          (
            <>
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
                      <img src={post.coverImage.url}/>
                    </a>
                  </article>
                ))}
              </div>
            </>
          )
        }
      </Layout>
     </div>
     <div className="align-center">
      <Script
        id="Adsense-id"
        data-ad-client="ca-pub-5287798851641238"
        async="true"
        strategy="beforeInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        slot='6152036699'
        style={{ display:'block'}}
        format='auto'
        responsive='true'
      />
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
