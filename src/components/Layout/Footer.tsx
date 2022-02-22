import { Container } from '@chakra-ui/react'

interface Props {}

export const Footer: React.FC<Props> = () => {
  return (
    <Container as='footer' fontSize='0.9rem'>
      Ich bin ein Footer
    </Container>
  )
}
