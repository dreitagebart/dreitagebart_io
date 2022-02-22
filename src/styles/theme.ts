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
  heading: 'Ubuntu, sans-serif',
  body: '"Open Sans", sans-serif'
}

const components: { [component: string]: ComponentStyleConfig } = {
  Link: {
    baseStyle: {
      _hover: {
        textDecoration: 'none'
      }
    }
  },
  Heading: {
    baseStyle: (props) => ({
      letterSpacing: 1,
      fontWeight: 300
    })
  },
  Button: {
    baseStyle: (props) => ({
      fontWeight: 'light',
      fontSize: mode('24px', '11px')(props)
    })
  },
  Article: {
    baseStyle: (props) => ({
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: mode('gray.200', 'gray.600')(props),
      background: mode('gray.50', 'gray.700')(props),
      marginY: '1rem',
      display: 'flex',
      borderRadius: '8px'
    })
  },
  MainMenuLink: {
    baseStyle: (props) => {
      return {
        fontWeight: 'bold',
        display: 'inline-block',
        color: mode('blue.800', 'blue.400')(props),
        paddingX: '.6rem',
        paddingY: '.2rem',
        borderBottomWidth: '2px',
        borderBottomStyle: 'solid',
        borderBottomColor: props.active
          ? mode('blue.400', 'blue.600')(props)
          : 'transparent',
        transition: 'all 300ms ease-in',
        _hover: {
          color: mode('blue.600', 'blue.200')(props),
          // background: 'gray.50',
          borderBottomColor: mode('blue.800', 'blue.200')(props)
        }
      }
    }
  }
}

const shadows = {
  outline: {
    border: '2px solid red'
  }
}

const styles = {
  global: (props: StyleFunctionProps) => ({
    // 'html, body, body > div:first-child, div#__next, div#__next > div': {},
    body: {
      bgGradient: mode(
        'linear(to-br, gray.50, gray.200)',
        'linear(to-br, gray.700, gray.900)'
      )(props),
      border: '1px solid transparent',
      height: '100vh',
      width: '100vw',
      fontWeight: 300,
      fontSize: '18px',
      color: mode('gray.800', 'whiteAlpha.900')(props)
    },
    '.postThumbnail': {
      borderTopRightRadius: '8px',
      borderBottomRightRadius: '8px'
    },
    '.dreitageLogo': {
      cursor: 'pointer',
      fill: mode('blue.800', 'blue.900')(props),
      width: '48px',
      height: '48px',
      background: mode('transparent', 'gray.50')(props),
      borderRadius: '4px'
    }
  })
}

export const theme = extendTheme({ components, fonts, styles, config, shadows })
