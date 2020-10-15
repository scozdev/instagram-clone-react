import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const DropdownItem = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: 8px 16px;

  svg {
    margin-right: 12px;
    font-size: 16px;
  }

  :last-child {
    border-top: 1px solid rgb(var(--b6a));
  }

  :hover {
    background: rgb(var(--b3f));
  }

  &:focus,
  &:active,
  &:hover {
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
`
