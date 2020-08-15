import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;

  /* &:hover > div {
    display: block;
  } */
`;
export const DropdownMenu = styled.div`
  display: none;
  ${(props) =>
    props.boolDrop &&
    css`
      display: block;
    `}

  position: absolute;
  background: rgb(var(--d87));

  /* right: 0px; */

  margin-left: -180px;
  margin-top: 10px;

  min-width: 230px;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  z-index: 1;
`;
export const DropdownButton = styled.button``;
export const DropdownItem = styled.div`
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  &:focus,
  &:active {
    outline: 0;
    background: rgb(var(--bb2));

    &:first-child {
      border-top-right-radius: 6px;
      border-top-left-radius: 6px;
    }
    &:last-child {
      border-bottom-right-radius: 6px;
      border-bottom-left-radius: 6px;
    }
  }
`;
