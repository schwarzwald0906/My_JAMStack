import Container from 'components/container'
import PostBody from 'components/post-body'
import ConvertBody from 'components/templates/convertBody'
import PostCategories from 'components/templates/postCategories'
import PostHeader from 'components/templates/postHeader'
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from 'components/templates/twoColumn'
import { getPostBySlug } from 'lib/api'
import Image from 'next/image'

export default function Schedule({
  title,
  publish,
  content,
  eyecatch,
  categories,
}) {
  return (
    <Container>
      <article>
        <PostHeader title={title} subtitle="Blog Article" publish={publish} />
        <figure>
          <Image
            src={eyecatch.url}
            alt=""
            layout="responsive"
            width={eyecatch.width}
            height={eyecatch.height}
            sizes="(min-width:1152px) 1152px,100vw"
            priority
          />
        </figure>
        <TwoColumn>
          <TwoColumnMain>
            <PostBody>
              <ConvertBody contentHTML={content} />
            </PostBody>
          </TwoColumnMain>
          <TwoColumnSidebar>
            <PostCategories categories={categories} />
          </TwoColumnSidebar>
        </TwoColumn>
      </article>
    </Container>
  )
}

export async function getStaticProps() {
  const slug = 'schedule'
  const post = await getPostBySlug(slug)

  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: post.eyecatch,
      categories: post.categories,
    },
  }
}
