import { NextPage } from 'next'
import { Heading, Text } from '@chakra-ui/react'

import { Me, Greeting } from '../components'

const Page: NextPage = () => {
  return (
    <>
      <Heading>Hi there, I&apos;m Stefan alias dreitagebart</Heading>
      <Text>Thank you for nothing</Text>
      <Greeting></Greeting>
      <Me></Me>
    </>
  )
}

export default Page
