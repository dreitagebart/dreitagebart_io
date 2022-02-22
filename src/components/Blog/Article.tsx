import Link from 'next/link'
import Image from 'next/image'
import {
  Box,
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
  useStyleConfig
} from '@chakra-ui/react'

import { Post } from '../../types'
import { TagList } from '.'

interface Props {
  post: Post
}

export const Article: React.FC<Props> = ({ post }) => {
  const styles = useStyleConfig('Article')

  return (
    <LinkBox>
      <Box __css={styles} as='article'>
        <Box
          padding='1.5rem'
          display='flex'
          flexDirection='column'
          justifyContent='space-between'
          width='100%'
        >
          <Box>
            <Heading size='md'>
              <Link href={`/blog/${post.slug}`} passHref>
                <LinkOverlay>{post.frontMatter.title}</LinkOverlay>
              </Link>
            </Heading>
            <Text>{post.frontMatter.description}</Text>
          </Box>
          <Text textTransform='uppercase' fontSize='.8rem'>
            {post.frontMatter.date}
          </Text>
          <TagList tags={post.frontMatter.tags}></TagList>
        </Box>
        <Image
          src={post.frontMatter.thumbnailUrl}
          alt='post thumbnail'
          className='postThumbnail'
          width={420}
          height={240}
          objectFit='cover'
        ></Image>
      </Box>
    </LinkBox>
  )
}
