import { Box, Heading, Text } from '@chakra-ui/react'
import Typist from 'react-typist'

interface Props {}

export const Greeting: React.FC<Props> = ({}) => {
  return (
    <Box
      width='100%'
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='flex-start'
    >
      <Box fontSize='2.5rem' width='100%'>
        <Typist>
          <Typist.Delay ms={4000}></Typist.Delay>
          <span>Hi, I&apos;m Fred,</span>
          <Typist.Delay ms={1500}></Typist.Delay>
          <Typist.Backspace count={5} delay={800}></Typist.Backspace>
          <span>Stefan,</span>
          <br></br>
          <Typist.Delay ms={1500}></Typist.Delay>
          <Text fontSize='1.5rem' fontWeight='bold' color='gray.600'>
            Fullstack developer
          </Text>
          <Typist.Delay ms={800}></Typist.Delay>
          <Text style={{ fontSize: '1.5rem' }}>
            Semi-vegan, nerd, webtech guy
          </Text>
        </Typist>
      </Box>
    </Box>
  )
}
