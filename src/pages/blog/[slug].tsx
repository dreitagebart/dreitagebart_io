import { MDXRemote } from 'next-mdx-remote'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { Heading } from '@chakra-ui/react'
import { ParsedUrlQuery } from 'querystring'

import { getMdxFileBySlug, getStaticPathsSlug } from '../../utils'
import { ABAP, TypeScript } from '../../components'
import { DreitagePage } from '../../types'

interface Params extends ParsedUrlQuery {
  slug: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getStaticPathsSlug('blog'),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as Params

  const props = await getMdxFileBySlug('blog', slug)

  return {
    props
  }
}

const Page: DreitagePage = ({
  frontMatter,
  mdxSource
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Heading>{frontMatter.title}</Heading>
      <MDXRemote {...mdxSource} components={{ TypeScript, ABAP }}></MDXRemote>
    </>
  )
}

Page.title = 'Blog'

export default Page
