import { ChakraProvider, Container } from '@chakra-ui/react'
import Head from 'next/head'
import { theme } from '../../styles'

import { Content } from './Content'
import { Footer } from './Footer'
import { Header } from './Header'

interface Props {
  title: string
}

export const Layout: React.FC<Props> = ({ children, title }) => {
  let pageTitle = 'dreitagebart.io'

  if (title) {
    pageTitle = `${title} ~ ${pageTitle}`
  }

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>{pageTitle}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Header></Header>
      <Content>{children}</Content>
      <Footer></Footer>
    </ChakraProvider>
  )
}
