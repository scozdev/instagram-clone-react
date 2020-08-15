import React, { useState } from "react";

import {
  Container,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
  Wrapper,
} from "./styles";

function Dropdown({ DropButton, children, ...props }) {
  const [boolDrop, setboolDrop] = useState(null);
  return (
    <Container onClick={() => setboolDrop((e) => !e)} {...props}>
      <DropdownButton>{DropButton}</DropdownButton>
      {boolDrop && <Wrapper onClick={() => setboolDrop(true)} />}
      <DropdownMenu boolDrop={boolDrop}>{children}</DropdownMenu>
    </Container>
  );
}

export default Dropdown;
