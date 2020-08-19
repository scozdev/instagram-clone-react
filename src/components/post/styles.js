import styled from "styled-components";

export const Container = styled.article`
  background: #fff;

  border: 1px solid rgb(var(--b6a));
  border-radius: 3px;

  margin-bottom: 60px;
`;
export const Header = styled.header`
  height: 62px;
  display: flex;
  align-items: center;
  padding: 16px;
`;
export const Body = styled.div``;

export const Footer = styled.div`
  > div:first-child {
    padding-left: 16px;
    padding-right: 16px;
  }
  font-size: 14px;

  .Post-footer-actions {
    display: flex;
    align-items: center;

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 24px;
      padding: 8px;
    }
    button:first-child {
      margin-left: -8px;
    }
    button:last-child {
      margin-left: auto;
      margin-right: -10px;
    }
  }
  .Post-footer-viewcount {
    span {
      font-weight: 600;
    }
    span:last-child {
      margin-left: 5px;
    }
  }
  .Post-footer-form {
    display: flex;

    border-top: 1px solid rgba(var(--ce3));
    border-bottom: 1px solid rgba(var(--ce3));

    margin-top: 4px;

    padding-left: 16px;
    padding-right: 16px;

    textarea {
      width: 100%;
      height: 18px;
      min-height: 56px;

      padding-top: 18px;

      resize: none;

      display: flex;
      align-items: center;

      outline: 0;
    }

    button {
      color: rgba(var(--d69));
    }
  }
`;

export const Actions = styled.div``;

export const ViewCount = styled.div``;
export const CommetList = styled.div``;
export const DateTime = styled.div``;
export const CommetForm = styled.form``;
