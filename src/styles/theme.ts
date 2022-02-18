import {
  ComponentStyleConfig,
  extendTheme,
  ThemeConfig
} from '@chakra-ui/react'
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'

const config: ThemeConfig = {
  cssVarPrefix: 'dtb',
  initialColorMode: 'light',
  useSystemColorMode: false
}

const fonts = {
  heading: 'Patua One',
  body: 'Roboto'
}

const components: { [component: string]: ComponentStyleConfig } = {
  Button: {
    baseStyle: (props) => ({
      fontWeight: 'light',
      fontSize: mode('24px', '11px')(props)
    }),
    variants: {
      solid: (props) => ({
        _hover: {
          color: mode('#00ff00', '#ff0000')(props),
          backgroundColor: mode('#ff0000', 'blue.500')(props)
        },
        color: mode('#0000ff', '#ff0000')(props),
        backgroundColor: mode('#ff0000', '#00ff00')(props)
      })
    }
  }
}

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      fontFamily: 'body',
      fontSize: '18px',
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('white', 'gray.700')(props)
    }
  })
}

export const theme = extendTheme({ components, fonts, styles, config })
