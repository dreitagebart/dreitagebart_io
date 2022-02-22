import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'

import { config } from './config'
import { FrontMatter, Post } from '../types'

export const getFilePath = (name: string) => {
  return path.join(config.cmsPath, name)
}

export const getStaticPathsSlug = (name: string) => {
  return fs.readdirSync(getFilePath(name)).map((file) => ({
    params: {
      slug: file.replace('.mdx', '')
    }
  }))
}

export const getStaticPathsTag = (name: string) => {
  return getTagList(getMdxFiles(name)).map((tag) => ({
    params: {
      tag
    }
  }))
}

export const getTagList = (posts: Array<Post>) => {
  const tags: Array<string> = []

  posts.map((post) => {
    return post.frontMatter.tags.map((tag) => tags.push(tag.toLowerCase()))
  })

  return Array.from(new Set(tags))
}

export const getMdxFiles = (name: string): Array<Post> => {
  const filePath = getFilePath(name)

  const files = fs.readdirSync(filePath)

  const posts = files.map((file) => {
    const markdownWithMeta = fs.readFileSync(path.join(filePath, file))

    const { data: frontMatter } = matter(markdownWithMeta)

    return {
      frontMatter: frontMatter as FrontMatter,
      slug: file.split('.')[0]
    }
  })

  return posts
}

export const getMdxFileBySlug = async (name: string, slug: string) => {
  const filePath = path.join(getFilePath(name), `${slug}.mdx`)

  const markdownWithMeta = fs.readFileSync(filePath, 'utf-8')

  const { data: frontMatter, content } = matter(markdownWithMeta)
  const mdxSource = await serialize(content)

  return {
    frontMatter,
    slug,
    mdxSource
  }
}

export const getMdxFilesByTag = async (name: string, tag: string) => {
  const posts = getMdxFiles(name)

  return posts.filter((post) => post.frontMatter.tags.includes(tag))
}
