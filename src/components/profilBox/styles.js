import styled, { css } from "styled-components";

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

      span {
        color: rgba(var(--f52));
      }
    }
  }
  .profil-more {
    margin-left: auto;
    font-weight: 600;
    font-size: 12px;
  }
`;
