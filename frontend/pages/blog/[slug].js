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
import { getPostBySlug, getAllSlugs } from 'lib/api'
import Image from 'next/image'
import { eyecatchLocal } from 'lib/constants'
import { getPlaiceholder } from 'plaiceholder'
import { prevNextPost } from 'lib/prevNextPost'
import Pagination from 'components/oraganism/pagination'
import Meta from 'components/templates/meta'

export default function Post({
  title,
  publish,
  content,
  eyecatch,
  categories,
  smallCategories,
  prevPost,
  nextPost,
}) {
  return (
    <Container>
      <Meta pageTitle="ブログ詳細" pageDesc="記事の詳細" />
      <article>
        <PostHeader title={title} subtitle="Blog Article" publish={publish} />
        <figure>
          <Image
            key={eyecatch.url}
            src={eyecatch.url}
            alt=""
            layout="responsive"
            width={eyecatch.width}
            height={eyecatch.height}
            sizes="(min-width:1152px) 1152px,100vw"
            priority
            placeholder="blur"
            blurDataURL="{eyecatch.blurDataURL}"
          />
        </figure>
        <TwoColumn>
          <TwoColumnMain>
            <PostBody>
              <ConvertBody contentHTML={content} />
            </PostBody>
          </TwoColumnMain>
          <TwoColumnSidebar>
            <PostCategories
              categories={categories}
              smallCategories={smallCategories}
            />
          </TwoColumnSidebar>
        </TwoColumn>
        <Pagination
          prevText={prevPost.title}
          prevUrl={`/blog/${prevPost.slug}`}
          nextText={nextPost.title}
          nextUrl={`/blog/${nextPost.slug}`}
        />
      </article>
    </Container>
  )
}

export async function getStaticPaths() {
  const allSlugs = await getAllSlugs(5)
  return {
    paths: allSlugs.map(({ slug }) => `/blog/${slug}`),
    fallback: 'blocking',
  }
}

export async function getStaticProps(context) {
  const slug = context.params.slug
  const post = await getPostBySlug(slug)

  if (!post) {
    return { notFound: true }
  } else {
    const eyecatch = post.eyecatch ?? eyecatchLocal

    const { base64 } = await getPlaiceholder(eyecatch.url)
    eyecatch.blurDataURL = base64

    const allSlugs = await getAllSlugs()
    const [prevPost, nextPost] = prevNextPost(allSlugs, slug)

    return {
      props: {
        title: post.title,
        publish: post.publishDate,
        content: post.content,
        eyecatch: eyecatch,
        categories: post.categories,
        smallCategories: post.smallcategories,
        prevPost: prevPost,
        nextPost: nextPost,
      },
    }
  }
}
