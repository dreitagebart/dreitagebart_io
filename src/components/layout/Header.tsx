import { Button, useColorMode } from '@chakra-ui/react'
import React from 'react'

interface Props {}

export const Header: React.FC<Props> = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Button onClick={toggleColorMode}>
        {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </>
  )
}
