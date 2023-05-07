import React from 'react'
import Container from 'components/container'
import { getAllPosts } from 'lib/api'
import Posts from 'components/oraganism/posts'
import { eyecatchLocal } from 'lib/constants'
import { getPlaiceholder } from 'plaiceholder'
import Meta from 'components/templates/meta'

export default function Blog({ posts }) {
  return (
    <>
      <Container>
        <Meta pageTitle="ブログ一覧" pageDesc="記事の一覧" />
        <Posts posts={posts} />
      </Container>
    </>
  )
}

export async function getStaticProps(ctx) {
  const posts = await getAllPosts()

  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64
  }

  return {
    props: {
      posts: posts,
    },
  }
}
