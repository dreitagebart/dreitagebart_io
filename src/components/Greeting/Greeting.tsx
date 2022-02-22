import { Box } from '@chakra-ui/react'
import Typist from 'react-typist'

interface Props {}

export const Greeting: React.FC<Props> = ({}) => {
  return (
    <Box
      fontSize='2rem'
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <Typist>
        <Typist.Delay ms={2000}></Typist.Delay>
        <span>Hi, I&apos;m Fred</span>
        <Typist.Delay ms={800}></Typist.Delay>
        <span>...</span>
        <Typist.Delay ms={800}></Typist.Delay>
        <Typist.Backspace count={7} delay={800}></Typist.Backspace>
        <span>Stefan...</span>
      </Typist>
    </Box>
  )
}
