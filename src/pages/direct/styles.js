import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 20px;
  > div {
    display: grid;
    grid-template-columns: 350px 1fr;

    border: 1px solid rgb(var(--b6a));
    background: rgba(var(--d87));

    .Direct-left-page {
      height: 85vh;
      border-right: 1px solid rgb(var(--b6a));

      overflow-y: auto;
    }

    .Direct-right-page {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
