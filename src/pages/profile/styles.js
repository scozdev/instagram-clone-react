import styled, { css } from 'styled-components'
const alignCenter = css`
  display: flex;
  align-items: center;
`

export const Container = styled.main`
  height: 100vh;

  header {
    display: flex;
    color: rgba(var(--i1d));
    justify-content: space-evenly;

    padding-bottom: 30px;

    @media (min-width: 980px) {
      width: 60%;
    }

    section {
      div:nth-child(1) {
        ${alignCenter};
        justify-content: space-between;

        > h2,
        > button {
          margin-right: 20px;
        }
      }
      div:nth-child(2) {
        margin-top: 10px;
        ${alignCenter};
        justify-content: space-between;

        span {
          font-weight: 600;
          margin-right: 8px;
        }
      }
      div:nth-child(3) {
        margin-top: 8px;
      }

      .Profile-header-button {
        border: 1px solid rgba(var(--ca6));
        border-radius: 4px;
        padding: 5px 9px;
        font-weight: 600;
      }
    }
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    border-top: 1px solid rgba(var(--b38));

    padding-top: 10px;

    a {
      display: flex;
      align-items: center;
      color: rgba(var(--f52));

      svg {
        margin-right: 6px;
      }
    }

    .profile--active {
      color: rgba(var(--i1d));
    }
  }
`
