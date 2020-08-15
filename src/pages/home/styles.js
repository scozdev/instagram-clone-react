import styled from "styled-components";

export const Container = styled.div`
  @media (min-width: 980px) {
    display: grid;
    grid-template-columns: 1fr 295px;
    grid-gap: 30px;
  }
`;
export const Timeline = styled.div`
  display: none;
  @media (min-width: 980px) {
    display: block;
  }
`;
export const Sidebar = styled.div``;
