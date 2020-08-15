import styled from "styled-components";

export const Container = styled.article`
  border: 1px solid rgb(var(--b6a));
  border-radius: 3px;
`;
export const Header = styled.header`
  height: 62px;
  display: flex;
  align-items: center;
  padding: 16px;

  .header-author {
    display: flex;
    align-items: center;

    .header-author-info {
      margin-left: 8px;
    }
  }
  .header-more {
    margin-left: auto;
  }
`;
export const Body = styled.div``;
export const Footer = styled.div``;
export const Actions = styled.div``;
export const ViewCount = styled.div``;
export const CommetList = styled.div``;
export const DateTime = styled.div``;
export const CommetForm = styled.form``;
