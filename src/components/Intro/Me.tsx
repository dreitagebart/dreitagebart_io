import React, { useState } from 'react'

import {
  Body,
  Cappy,
  Chair,
  Character,
  Eyes,
  Glasses,
  Head,
  LeftArm,
  LeftShoe,
  Legs,
  Notebook,
  RightArm,
  RightShoe,
  Steam,
  Tea,
  Torso
} from './styled'

interface Props {}

export const Me: React.FC<Props> = () => {
  const [hovered, setHovered] = useState(false)

  return (
    <Character
      id='me'
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      <Steam />
      <Tea />
      <Chair />
      <LeftShoe />
      <RightShoe paused={hovered} />
      <Legs />
      <Torso paused={false}>
        <Body />
        <LeftArm paused={hovered} />
        <RightArm paused={hovered} />
        <Head paused={false}>
          <Cappy />
          <Glasses />
          <Eyes />
        </Head>
      </Torso>
      <Notebook paused={hovered} />
    </Character>
  )
}
