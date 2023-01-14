const POST_GRAPHQL_FIELDS = `
  sys {
    id
  }
  slug
  title
  subtitle
  coverImage {
    url
  }
  date
  author {
    name
    picture {
      url
    }
  }
  category {
    title
    slug
  }
  excerpt
  body
`

const CATEGORY_GRAPHQL_FIELDS = `
  title
  slug
`

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json())
}

function extractPost(fetchResponse) {
  return fetchResponse?.data?.postCollection?.items?.[0]
}

function extractPostEntries(fetchResponse) {
  return fetchResponse?.data?.postCollection?.items
}

function extractPostPaginationEntries(fetchResponse) {
  return {
    items: fetchResponse?.data?.postCollection?.items,
    total: fetchResponse?.data?.postCollection?.total
  }
}

function extractCategory(fetchResponse) {
  return fetchResponse?.data?.categoryCollection?.items?.[0]
}

function extractCategories(fetchResponse) {
  return fetchResponse?.data?.categoryCollection?.items
}

function extractPostEntriesFromCategory(fetchResponse) {
  return fetchResponse?.data?.categoryCollection?.items?.[0].linkedFrom?.postCollection?.items
}

export async function getPreviewPostBySlug(slug) {
  const entry = await fetchGraphQL(
    `query {
      postCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    true
  )
  return extractPost(entry)
}

export async function getAllPostsWithSlug() {
  const entries = await fetchGraphQL(
    `query {
      postCollection(where: { slug_exists: true }, order: date_DESC) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`
  )
  return extractPostEntries(entries)
}

export async function getAllPostsForHome(preview) {
  const entries = await fetchGraphQL(
    `query {
      postCollection(order: date_DESC, preview: ${preview ? 'true' : 'false'}) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  )
  return extractPostEntries(entries)
}

export async function getAllPostsForPagination(page, preview) {
  const entries = await fetchGraphQL(
    `query {
      postCollection(order: date_DESC, limit: 2, skip: ${page}, preview: ${preview ? 'true' : 'false'}) {
        total
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  )
  return extractPostPaginationEntries(entries)
}

export async function getPost(slug, preview) {
  const entry = await fetchGraphQL(
    `query {
      postCollection(where: { slug: "${slug}" }, preview: ${
      preview ? 'true' : 'false'
    }, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  )
  return {
    post: extractPost(entry)
  }
}

export async function getAllCategories(preview) {
  const entries = await fetchGraphQL(
    `query {
      categoryCollection(preview: ${preview ? 'true' : 'false'}) {
        items {
          ${CATEGORY_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  )
  return extractCategories(entries)
}

export async function getCategoryBySlug(preview, slug) {
  const entries = await fetchGraphQL(
    `query {
      categoryCollection(preview: ${preview ? 'true' : 'false'}, where: { slug: "${slug}" }, limit: 1) {
        items {
          ${CATEGORY_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  )
  return extractCategory(entries)
}

export async function getPostsByCategory(preview, category) {
  const entries = await fetchGraphQL(
    `query {
      categoryCollection(preview: ${preview ? 'true' : 'false'}, where: { slug: "${category}" }, limit: 1) {
        items {
          linkedFrom {
            postCollection {
              items {
                ${POST_GRAPHQL_FIELDS}
              }
            }
          }
        }
      }
    }`,
    preview
  )

  return extractPostEntriesFromCategory(entries)
}
