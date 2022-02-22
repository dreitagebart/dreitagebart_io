import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Box, Link as CLink, useStyleConfig } from '@chakra-ui/react'

interface Props {
  href: string
}

export const MainMenuLink: React.FC<Props> = ({ href, children }) => {
  const { pathname } = useRouter()
  const [active, setActive] = useState(false)

  const styles = useStyleConfig('MainMenuLink', { active })

  useEffect(() => {
    if (href === '/') {
      return setActive(href === pathname)
    }

    if (pathname.startsWith(href)) {
      return setActive(true)
    }

    return setActive(false)
  }, [pathname, href])

  return (
    <Box __css={styles}>
      <Link href={href} passHref>
        <CLink
          variant={active ? 'active' : 'base'}
          __css={styles}
          // transition='all 300ms ease-in'
          // _hover={{
          //   color: 'blue.600',
          //   // background: 'gray.50',
          //   borderBottomColor: 'blue.600'
          // }}
          // color={dark ? 'blue.400' : 'blue.800'}
          // borderBottomLeftRadius={6}
          // borderBottomRightRadius={6}
          // paddingX='.6rem'
          // paddingY='.2rem'
          // borderBottomWidth='2px'
          // borderBottomStyle='solid'
          // borderBottomColor={active ? 'blue.800' : 'transparent'}
        >
          {children}
        </CLink>
      </Link>
    </Box>
  )
}
