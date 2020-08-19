import styled from "styled-components";

export const Container = styled.div`
  main {
    ul {
      display: flex;
      flex-wrap: wrap;
      margin: 2vmin;
    }

    li {
      height: 40vh;
      flex-grow: 1;
      margin: 2vmin;
    }

    li:last-child {
      // There's no science in using "10" here. In all my testing, this delivered the best results.
      flex-grow: 10;
    }

    img {
      max-height: 100%;
      min-width: 100%;
      object-fit: cover;
      vertical-align: bottom;
      border-radius: 1vmin;
    }

    // ADVANCED

    // Portrait

    @media (max-aspect-ratio: 1/1) {
      li {
        height: 30vh;
      }
    }

    // Short screens

    @media (max-height: 480px) {
      li {
        height: 80vh;
      }
    }

    // Smaller screens in portrait

    @media (max-aspect-ratio: 1/1) and (max-width: 480px) {
      ul {
        flex-direction: row;
      }

      li {
        height: auto;
        width: 100%;
      }
      img {
        width: 100%;
        max-height: 75vh;
        min-width: 0;
      }
    }
  }
`;
