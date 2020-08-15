import React from "react";
import styled, { css } from "styled-components";

export const Image = styled.figure`
  display: inline-flex;
  border-radius: 999px;

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
`;

function Avatar({
  size = 40,
  alt = "profile",
  src = "https://scontent-frt3-2.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent-frt3-2.cdninstagram.com&_nc_ohc=d3zLaxzyOPwAX8g3inT&oh=98701cb4d682b3465c5ee4e0f7a689ac&oe=5F62C68F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2",
  gradient = false,
}) {
  return (
    <Image gradient={gradient}>
      <img src={src} alt={alt} width={size} height={size}></img>
    </Image>
  );
}

export default Avatar;
