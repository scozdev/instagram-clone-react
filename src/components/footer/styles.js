import styled, { css } from "styled-components";

export const Container = styled.footer`
  font-size: 11px;
  color: rgba(var(--edc));

  span {
    ${(props) =>
      props.color &&
      css`
        color: rgba(var(--f52));
      `}
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 16px;

    li {
      a {
        cursor: pointer;
        font-weight: 400;
        line-height: 13px;
        ${(props) =>
          props.color &&
          css`
            color: rgba(var(--fe0));
          `}
      }
      a:after {
        content: "  ";
        margin: 0 0.25em 0 0.25em;
      }
    }
  }
`;
