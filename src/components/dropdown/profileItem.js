import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const DropdownItem = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: 8px 16px;

  svg {
    margin-right: 12px;
  }

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
