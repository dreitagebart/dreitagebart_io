import { MDXRemote } from 'next-mdx-remote'
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage
} from 'next'
import { Heading, HStack } from '@chakra-ui/react'
import { ParsedUrlQuery } from 'querystring'

import { ABAP, Article, TypeScript } from '../../../components'
import { getMdxFilesByTag, getStaticPathsTag } from '../../../utils'

interface Params extends ParsedUrlQuery {
  tag: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getStaticPathsTag('blog'),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { tag } = context.params as Params

  const posts = await getMdxFilesByTag('blog', tag)

  return {
    props: { posts }
  }
}

const Page: NextPage = ({
  posts
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Heading>Blog</Heading>
      {posts.map((post: any, index: number) => {
        return <Article post={post} key={index}></Article>
      })}
    </>
  )
}

export default Page
