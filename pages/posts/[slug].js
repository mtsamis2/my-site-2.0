import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Layout from '../../components/layout'
import { getAllPostsWithSlug, getPost } from '../../lib/api'
import DateComponent from '../../components/date'
import marked from 'marked'
import getYouTubeID from 'get-youtube-id'
import Video from '../../components/video'
import { DiscussionEmbed } from 'disqus-react'
import Image from 'next/image'

const WEBSITE = "https://www.miketsamis.com";

export default function Post({ preview, post, videoId, disqusShortname, disqusConfig }) {
  const router = useRouter()

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <div className='single'>
      <div id='wrapper'>
        <div id='main'>
          {router.isFallback ? (
            <h1>Loading…</h1>
          ) : (
            <Layout
              preview={preview}
              title={`${post.title} - MikeTsamis.com`}
              description={post.excerpt}
            >
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
                <span className="image featured">
                  <Image
                    src={post.coverImage.url}
                    alt={`The cover image for the article '${post.title}'`}
                    aria-label={`The cover image for the article '${post.title}'`}
                    fill
                    className={'nextImage'}
                  />
                </span>
                <div dangerouslySetInnerHTML={createMarkup(post.body)} />
                {videoId != null ?
                  <div>
                      <Video videoId={videoId} />
                  </div>
                  : null}
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
              <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
            </Layout>
          )}
        </div>
      </div>
    </div>
  )
}

function createMarkup(body) {
  return {__html: marked.parse(body, {sanitize: true})};
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPost(params.slug, preview)

  const videoId = getYouTubeID(data?.post?.body);
  const currentUrl = WEBSITE + `/posts/${params.slug}`;

  const disqusShortname = 'MikeTsamis';
  const disqusConfig = {
    url: currentUrl,
    identifier: data?.post.sys.id,
    title: data?.post.title,
  };

  return {
    props: {
      preview,
      post: data?.post ?? null,
      videoId,
      disqusShortname,
      disqusConfig
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
