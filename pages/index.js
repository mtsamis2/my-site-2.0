import Intro from '../components/intro'
import Sidebar from '../components/sidebar'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import DateComponent from '../components/date'

export default function Index({ preview, allPosts }) {
  return (
    <div id='wrapper'>
      <Layout preview={preview}>
        <Intro className="introIndex" />
        <div id='main'>
         {allPosts.map((post, key) => (
            <article className="post" key={key}>
                <header>
                    <div className="title">
                        <h2>
                            <a href={`/posts/${post.slug}`} >
                                {post.title}
                            </a>
                        </h2>
                        <p>{post.subtitle}</p>
                    </div>
                    <div className="meta">
                        <time className="published">
                            <DateComponent dateString={post.date} />
                        </time>
                        <div className="author">
                            <span className="name">{post.author.name}</span>
                            <img src={post.author.picture.url}/>
                        </div>
                    </div>
                </header>
                <a className="image featured" href={`/posts/${post.slug}`}>
                    <img src={post.coverImage.url}/>
                </a>
                <p>{post.excerpt}</p>
                <footer>
                    <ul className="actions">
                        <li>
                            <a className="button big" href={`/posts/${post.slug}`}>
                                Continue Reading
                            </a>
                        </li>
                    </ul>
                    <ul className="stats">
                      <li>
                          <a href={`/categories/${post.category.slug}`}>
                              {post.category.title}
                          </a>
                      </li>
                    </ul>
                </footer>
            </article>
          ))}
        </div>
      </Layout>
      <Sidebar/>
    </div>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? []
  return {
    props: { preview, allPosts },
  }
}
