import Link from 'next/link'
import { Badge, HStack, Link as CLink } from '@chakra-ui/react'

interface Props {
  tags: Array<string>
}

export const TagList: React.FC<Props> = ({ tags }) => {
  return (
    <HStack>
      {tags.map((tag: string) => (
        <Link href={`/blog/tag/${tag}`} key={tag} passHref>
          <CLink>
            <Badge colorScheme='twitter'>{tag}</Badge>
          </CLink>
        </Link>
      ))}
    </HStack>
  )
}
