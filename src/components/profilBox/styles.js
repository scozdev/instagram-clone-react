import styled, { css } from 'styled-components'

export const Container = styled.article`
  height: 62px;
  display: flex;
  align-items: center;
  padding: 16px;

  ${(props) =>
    props.bg &&
    css`
      background: ${props.bg};
    `}

  .profil-author {
    display: flex;
    align-items: center;

    .profil-author-info {
      margin-left: 20px;
      cursor: pointer;

      span {
        color: rgba(var(--f52));
      }
    }
    .profil-author-info > div:first-child:hover {
      text-decoration: underline;
    }
  }
  .profil-more {
    margin-left: auto;
    font-weight: 600;
    font-size: 12px;
  }
`
