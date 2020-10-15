import React from 'react'
import styled, { css } from 'styled-components'

export const Image = styled.figure`
  display: inline-flex;
  border-radius: 999px;
  cursor: pointer;

  ${(props) =>
    props.gradient &&
    css`
      padding: 2px;
      background: linear-gradient(
        219deg,
        rgba(184, 63, 140, 1) 0%,
        rgba(237, 158, 90, 1) 100%
      );
      img {
        border: 2px solid white;
      }
    `}

  img {
    border-radius: inherit;
  }
`

function Avatar({
  size = 40,
  alt = 'profile',
  src = 'https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png',
  gradient = false
}) {
  return (
    <Image gradient={gradient}>
      <img src={src} alt={alt} width={size} height={size}></img>
    </Image>
  )
}

export default Avatar
