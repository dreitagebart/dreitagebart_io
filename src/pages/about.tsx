import { Code, Heading, Text } from '@chakra-ui/react'

import { DreitagePage } from '../types'

const Page: DreitagePage = () => {
  return (
    <>
      <Heading>About</Heading>
      <Text>Fullstack Developer</Text>
      <Heading size='md'>
        about.json
        <Code>&#123;</Code>
      </Heading>
      <Text>Thank you for nothing</Text>
    </>
  )
}

Page.title = 'About'

export default Page
