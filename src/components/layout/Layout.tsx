import { ChakraProvider } from '@chakra-ui/react'

import { theme } from '../../styles'
import { Content } from './Content'
import { Footer } from './Footer'
import { Header } from './Header'

interface Props {}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <Header></Header>
      <Content>{children}</Content>
      <Footer></Footer>
    </ChakraProvider>
  )
}
