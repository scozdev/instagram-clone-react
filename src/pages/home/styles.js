import styled from 'styled-components'

export const Container = styled.div`
  @media (min-width: 980px) {
    display: grid;
    grid-template-columns: 1fr 295px;
    grid-gap: 30px;
  }
`
export const Timeline = styled.div`
  display: none;
  @media (min-width: 980px) {
    display: block;
  }
  article {
    margin-top: 18px;
    margin-bottom: 10px;
    height: auto;
    padding: 0;

    .profil-author {
      padding-left: 5px;
    }

    .profil-more {
      color: rgba(var(--d69));
    }
  }
  .Timeline-suggestions {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 12px;
    padding-top: 4px;
    padding-bottom: 4px;

    font-weight: 600;

    span:first-child {
      color: rgba(var(--f52));
    }
    a {
      color: rgba(var(--i1d));
    }
  }
`
export const Sidebar = styled.div``
