import styled from "styled-components";

export const Container = styled.header`
  z-index: 90;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;

  background-color: white;
  border-bottom: 1px solid rgb(var(--b6a));
`;

export const Wrapper = styled.div`
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: center;

  padding-left: 20px;
  padding-right: 20px;

  > a.logo {
    /* flex: 1 9999 0%; */
    @media (min-width: 980px) {
      flex-grow: 1;
      flex-shrink: 9999;
      flex-basis: 0%;
    }

    display: flex;
    min-width: 40px;
    margin-top: 7px;

    img {
      max-height: 100px;
      max-width: 103px;
      object-fit: contain;
    }
  }
`;

export const SearchForm = styled.form`
  display: none;
  position: relative;
  color: rgba(var(--f52, 142, 142, 142), 1);

  @media (min-width: 980px) {
    display: block;
    text-align: center;
    width: 215px;
    height: 28px;
    border: 1px solid rgb(var(--b6a));
    background-color: rgb(var(--b3f));
    border-radius: 4px;

    > input {
      outline: 0;
      width: 100%;
      height: 100%;
      background: inherit;
      padding: 3px 25px 3px 36px;

      ::placeholder {
        text-align: center;
        color: rgb(var(--f52));
        font-size: 12px;
      }
    }
  }
`;

export const Nav = styled.div`
  /* flex: 1 0 0%; */
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 0%;

  z-index: 90;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  border-top: 1px solid rgb(var(--b6a));
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  > a {
    font-size: 22px;
    display: flex;
    align-items: center;
  }

  @media (min-width: 980px) {
    height: auto;
    border: 0;
    justify-content: flex-end;
    position: static;

    > a {
      margin-left: 20px;
    }
  }
`;
