import { NextPage } from 'next'
import { AppProps } from 'next/dist/shared/lib/router/router'

export type DreitagePage = NextPage & {
  title: string
}

export type DreitageApp = AppProps & {
  Component: DreitagePage
}

export interface FrontMatter {
  title: string
  description: string
  date: string
  thumbnailUrl: string
  tags: Array<string>
}

export interface Post {
  slug: string
  frontMatter: FrontMatter
}
