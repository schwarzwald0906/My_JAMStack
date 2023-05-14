import Container from 'components/container'
import Posts from 'components/oraganism/posts'
import Meta from 'components/templates/meta'
import PostHeader from 'components/templates/postHeader'
import { getAllPostsBySmallCategory, getAllSmallCategories } from 'lib/api'
import { eyecatchLocal } from 'lib/constants'
import { getPlaiceholder } from 'plaiceholder'

export default function Category({ name, posts }) {
  return (
    <Container>
      <Meta pageTitle="小カテゴリ" pageDesc="小カテゴリの一覧" />
      <PostHeader title={name} subtitle="Blog Category" />
      <Posts posts={posts} />
    </Container>
  )
}

export async function getStaticPaths() {
  const allCats = await getAllSmallCategories(5)
  return {
    paths: allCats.map(({ slug }) => `/blog/smallcategory/${slug}`),
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const catSlug = context.params.slug

  const allCats = await getAllSmallCategories()
  const cat = allCats.find(({ slug }) => slug === catSlug)
  const posts = await getAllPostsBySmallCategory(cat.id)

  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64
  }
  return {
    props: {
      name: cat.name,
      largecategory: cat.largecategory.name,
      posts: posts,
    },
  }
}
