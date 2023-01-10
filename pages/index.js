import Intro from '../components/intro'
import Sidebar from '../components/sidebar'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import DateComponent from '../components/date'
import Image from 'next/image'

export default function Index({ preview, allPosts }) {
  return (
    <div id='wrapper'>
      <Layout
        preview={preview}
        title={'Home - MikeTsamis.com'}
        description={'I am a Senior Software Engineer based in NYC. This blog is used to share my own projects, findings, and opinions. My objective is to share fun, interesting, and useful tech projects and break them down as simple as possible to inspire more interest in STEM.'}
      >
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
                            <div className="authorImage">
                              <Image
                                src={post.author.picture.url}
                                alt={`An image of the author ${post.author.name}`}
                                loading='lazy'
                                fill
                                className={'nextImage'}
                              />
                            </div>
                        </div>
                    </div>
                </header>
                <a className="image featured" href={`/posts/${post.slug}`}>
                    <Image
                      src={post.coverImage.url}
                      alt={`The cover image for the article '${post.title}'`}
                      aria-label={`The cover image for the article '${post.title}'`}
                      fill
                      className={'nextImage'}
                    />
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
