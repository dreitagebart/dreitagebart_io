import { Container } from '@chakra-ui/react'

interface Props {}

export const Content: React.FC<Props> = ({ children }) => {
  return <Container maxWidth='container.xl'>{children}</Container>
}
