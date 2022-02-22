import { Box } from '@chakra-ui/react'

import { MainMenu } from '../Menu'

interface Props {}

export const Header: React.FC<Props> = () => {
  return (
    <Box as='header'>
      <MainMenu></MainMenu>
    </Box>
  )
}
