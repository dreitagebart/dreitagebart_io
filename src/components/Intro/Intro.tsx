import { Box } from '@chakra-ui/react'

import { Greeting } from './Greeting'
import { Me } from './Me'

interface Props {}

export const Intro: React.FC<Props> = () => {
  return (
    <Box
      display='flex'
      flexDirection='row'
      alignItems='center'
      justifyContent='center'
    >
      <Greeting></Greeting>
      <Me></Me>
    </Box>
  )
}
