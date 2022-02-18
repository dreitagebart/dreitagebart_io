import { ColorModeScript } from '@chakra-ui/react'
import Document, { Head, Html, Main, NextScript } from 'next/document'

import { theme } from '../styles'

class DreitageDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Patua+One&family=Roboto:wght@100;400&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <ColorModeScript
            initialColorMode={theme.config.initialColorMode}
          ></ColorModeScript>
          <Main></Main>
          <NextScript></NextScript>
        </body>
      </Html>
    )
  }
}

export default DreitageDocument
