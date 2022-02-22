import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { Heading } from '@chakra-ui/react'

import { getMdxFiles, getTagList } from '../../utils'
import { Article, TagList } from '../../components'
import { DreitagePage } from '../../types'

export const getStaticProps: GetStaticProps = async () => {
  const posts = getMdxFiles('blog')

  const tags = getTagList(posts)

  return {
    props: { posts, tags }
  }
}

const Page: DreitagePage = ({
  posts,
  tags
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Heading>Blog</Heading>
      <TagList tags={tags}></TagList>
      {posts.map((post: any, index: number) => {
        return <Article post={post} key={index}></Article>
      })}
    </>
  )
}

Page.title = 'Blog'

export default Page
