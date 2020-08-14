import React from "react";
import styled from "styled-components";

function index({ tag, size, children }) {
  const Comp = tag ? tag : "span";

  const Text = styled(Comp)`
    &.normal {
    }
    &.small {
      font-size: 12px;
    }
    &.xsmall {
      font-size: 11px;
    }
    &.xxsmall {
      font-size: 10px;
    }
  `;

  return <Text className={size}>{children}</Text>;
}

export default index;
