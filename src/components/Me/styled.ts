import styled from '@emotion/styled'
import { keyframes, css } from '@emotion/react'

import me from '../../assets/images/me.png'

interface PauseProps {
  paused: boolean
}

const typeLeft = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  25% {
    transform: rotateZ(7deg);
  }
  75% {
    transform: rotateZ(-6deg);
  }
  100% {
    transform: rotateZ(0deg);
  }
`

const tapRight = keyframes`
  0%   {
    transform: rotateZ(0deg);
  }
  90%  {
    transform: rotateZ(-6deg);
  }
  100% {
    transform: rotateZ(0deg);
  }
`

const wobble = keyframes`
  0% {
    transform: rotateZ(-0.2deg);
  }
  50% {
    transform: rotateZ(0.2deg);
  }
  100% {
    transform: rotateZ(-0.2deg);
  }
`

const blink = keyframes`
  0% {
    background-position: -162px -350px;
  }
  94% {
    background-position: -162px -350px;
  }
  98% {
    background-position: -162px -368px;
  }
  100% {
    background-position: -162px -350px;
  }
`

const headTilt = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  20% {
    transform: rotateZ(0deg);
  }
  25% {
    transform: rotateZ(-4deg);
  }
  35% {
    transform: rotateZ(-4deg);
  }
  38% {
    transform: rotateZ(2deg);
  }
  42% {
    transform: rotateZ(2deg);
  }
  45% {
    transform: rotateZ(-4deg);
  }
  50% {
    transform: rotateZ(0deg);
  }
  70% {
    transform: rotateZ(0deg);
  }
  82% {
    transform: rotateZ(0deg);
  }
  85% {
    transform: rotateZ(4deg);
  }
  90% {
    transform: rotateZ(4deg);
  }
  100% {
    transform: rotateZ(0deg);
  }
`

const sway = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  20% {
    transform: rotateZ(0deg);
  }
  25% {
    transform: rotateZ(4deg);
  }
  45% {
    transform: rotateZ(4deg);
  }
  50% {
    transform: rotateZ(0deg);
  }
  70% {
    transform: rotateZ(0deg);
  }
  75% {
    transform: rotateZ(-4deg);
  }
  90% {
    transform: rotateZ(-4deg);
  }
  100% {
    transform: rotateZ(0deg);
  }
`

const steam = keyframes`
  0% {
    top: 100px;
    opacity: 0.1;
    visibility: visible;
  }
  20% {
    top: 80px;
    opacity: 0.2;
  }
  40% {
    top: 60px;
    opacity: 0.4;
  }
  60% {
    top: 40px;
    opacity: 0.2;
  }
  80% {
    top: 20px;
    opacity: .075;
  }
  100% {
    top: 0px;
    opacity: 0;
    visibility: hidden;
  }
`

const swayIt = ({ paused }: PauseProps) =>
  paused
    ? css`
        animation-name: ${sway};
        animation-duration: 1s;
        animation-timing-function: ease;
        animation-play-state: paused;
      `
    : css`
        animation-name: ${sway};
        animation-duration: 20s;
        animation-timing-function: ease;
        animation-iteration-count: infinite;
      `

const steamIt = () => css`
  animation-name: ${steam};
  animation-duration: 5s;
  animation-timing-function: ease-in;
  animation-iteration-count: infinite;
  animation-delay: 3s;
`

const tiltIt = ({ paused }: PauseProps) =>
  paused
    ? css`
        animation-name: ${headTilt};
        animation-duration: 20s;
        animation-timing-function: ease;
        animation-iteration-count: infinite;
        animation-play-state: paused;
      `
    : css`
        animation-name: ${headTilt};
        animation-duration: 20s;
        animation-timing-function: ease;
        animation-iteration-count: infinite;
      `

const typeIt = ({ paused }: PauseProps) =>
  paused
    ? css`
        animation-name: ${typeLeft};
        animation-duration: 0.4s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-play-state: paused;
      `
    : css`
        animation-name: ${typeLeft};
        animation-duration: 0.4s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
      `

const wobbleIt = ({ paused }: PauseProps) =>
  paused
    ? css`
        animation-name: ${wobble};
        animation-duration: 0.4s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-play-state: paused;
      `
    : css`
        animation-name: ${wobble};
        animation-duration: 0.4s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
      `

const tapIt = ({ paused }: PauseProps) =>
  paused
    ? css`
        animation-name: ${tapRight};
        animation-duration: 1s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-play-state: paused;
      `
    : css`
        animation-name: ${tapRight};
        animation-duration: 1s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
      `

export const Steam = styled.div`
  /* color: red; */
  /* background-color: brown; */
  /* border: 1px solid #666; */
  position: absolute;
  top: 460px;
  left: 460px;
  ${steamIt}

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 500px;
    left: -25px;
    border-right: 0px solid transparent;
    border-top: 2px solid black;
    border-left: 5px solid #111;
    border-bottom: 2px solid transparent;
    width: 40px;
    height: 70px;
    z-index: 4;
    border-radius: 80% 0 10% 10%;
    transform: rotate(168deg) skewY(10deg);
    filter: blur(7px);
  }

  &::after {
    top: 460px;
    left: -45px;
    z-index: 4;
    border-radius: 80% 0 10% 10%;
    transform: rotate(315deg) skewY(10deg);
    filter: blur(7px);
  }
`

export const LeftShoe = styled.div`
  background: url('/me.png') 0 0 no-repeat;
  background-size: 750px;
  background-position: -315px -749px;
  position: absolute;
  display: block;
  top: 591px;
  left: 54px;
  width: 130px;
  height: 92px;
`

export const RightShoe = styled.div<PauseProps>`
  display: block;
  position: absolute;
  top: 594px;
  left: 187px;
  width: 135px;
  height: 81px;
  background: url('/me.png') 0 0 no-repeat;
  background-position: -453px -749px;
  background-size: 750px;
  transform-origin: 35% 12%;
  ${tapIt}
`

export const LeftArm = styled.div<PauseProps>`
  background: url('/me.png') 0 0 no-repeat;
  background-size: 750px;
  background-position: -265px -341px;
  position: absolute;
  display: block;
  top: 159px;
  left: 0;
  width: 165px;
  height: 73px;
  transform-origin: 9% 35%;
  transform: rotateZ(0deg);
  ${typeIt}
`

export const RightArm = styled.div<PauseProps>`
  background: url('/me.png') 0 0 no-repeat;
  background-size: 750px;
  background-position: -442px -323px;
  position: absolute;
  display: block;
  top: 148px;
  left: 231px;
  width: 157px;
  height: 91px;
  transform-origin: 90% 25%;
  ${typeIt}
`

export const Notebook = styled.div<PauseProps>`
  background: url('/me.png') 0 0 no-repeat;
  background-size: 750px;
  position: absolute;
  top: 186px;
  left: 9px;
  width: 365px;
  height: 216px;
  background-position: -2px -466px;
  transform-origin: 50% 100%;
  ${wobbleIt}
`

export const Legs = styled.div`
  position: absolute;
  top: 378px;
  left: 4px;
  width: 370px;
  height: 247px;
  background: url('/me.png') 0 0 no-repeat;
  background-position: -381px -443px;
  background-size: 750px;
  display: block;
`

export const Head = styled.div<PauseProps>`
  background: url('/me.png') 0 0 no-repeat;
  background-size: 750px;
  position: absolute;
  display: block;
  top: -148px;
  left: 106px;
  width: 160px;
  height: 194px;
  background-position: 0px -265px;
  transform-origin: 50% 85%;
  ${tiltIt}
`

export const Glasses = styled.div`
  background: url('/me.png') 0 0 no-repeat;
  /* width: 200px;
  height: 200px; */
  background-size: 750px;
  position: absolute;
  display: block;
  /* border: 1px solid red; */
  /* top: 640px;
  left: 380px; */
  /* width: 128px; */
  /* height: 100px; */
  /* background-position: -162px -350px; */
  width: 130px;
  height: 80px;

  /* background: url('/me.png') 0 0 no-repeat; */
  /* background-size: 750px; */
  /* position: absolute; */
  /* display: block; */
  top: 45px;
  left: 5px;
  /* width: 73px; */
  /* height: 18px; */
  background-position: -448px -900px;
  /* background-position: -162px -350px; */
`

export const Eyes = styled.div`
  background: url('/me.png') 0 0 no-repeat;
  background-size: 750px;
  position: absolute;
  display: block;
  top: 92px;
  left: 34px;
  width: 73px;
  height: 18px;
  background-position: -162px -350px;
  animation: ${blink} 10s steps(1) infinite, pan 10s ease-in-out infinite;
`

export const Character = styled.div`
  width: 400px;
  height: 800px;
  left: 50%;
  top: 0;
  margin-left: -200px;
  background-size: 750px;
  position: relative;
  display: block;
  cursor: pointer;

  @media only screen and (max-width: 600px) {
    & {
      transform: scale(0.7);
      top: -120px;
    }
  }
`

export const Chair = styled.div`
  background: url('/me.png') 0 0 no-repeat;
  background-size: 750px;
  position: absolute;
  display: block;
  top: 430px;
  left: 55px;
  width: 260px;
  height: 365px;
  background-position: -12px -697px;
`

export const Cappy = styled.div`
  background: url('/me.png') 0 0 no-repeat;
  background-size: 750px;
  position: absolute;
  display: block;
  width: 200px;
  height: 100px;
  top: -10px;
  left: 0;
  background-position: -492px -60px;
  z-index: 2;
`

export const Body = styled.div`
  position: absolute;
  display: block;
  top: 0px;
  left: 0px;
  width: 389px;
  height: 253px;
  background: url('/me.png') 0 0 no-repeat;
  background-size: 750px;
  display: block;
`

export const Tea = styled.div`
  background: url('/me.png') 0 0 no-repeat;
  width: 200px;
  height: 200px;
  background-size: 750px;
  position: absolute;
  display: block;
  top: 640px;
  left: 380px;
  width: 128px;
  height: 100px;
  background-position: -286px -900px;
`

export const Torso = styled.div<PauseProps>`
  /* transition: all 0.6s ease-in; */
  background-size: 750px;
  display: block;
  position: absolute;
  display: block;
  top: 138px;
  left: 0px;
  width: 389px;
  height: 252px;
  ${swayIt}
  transform-origin: 50% 100%;
`
