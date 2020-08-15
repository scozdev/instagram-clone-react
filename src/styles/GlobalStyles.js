import { createGlobalStyle } from "styled-components";

import "./variables.css";

export default createGlobalStyle`
  

  * {
  margin: 0;
  padding: 0;
  border: 0;
  font-family: inherit;

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
}

html {
  font-size: 14px;
  box-sizing: border-box;
}

body {
  font-size: 1rem;
  font-weight: normal;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  padding-top: var(--header-height);
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  background-color: transparent;
  cursor: pointer;
  outline: 0;
}

img {
  max-width: 100%;
  vertical-align: middle;
}

h1,
h2,
h3,
h4,
h5,
h6,
b,
strong,
label {
  font-weight: 600;
}

.container {
  max-width: 975px;
  margin-left: auto;
  margin-right: auto;
}


.normal {
    }
.small {
  font-size: 12px;
}
.xsmall {
  font-size: 11px;
}
.xxsmall {
  font-size: 10px;
}

.fontAwesome {
  font-family: 'Helvetica', FontAwesome, sans-serif;
}

`;
