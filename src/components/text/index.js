import React from "react";

function Text({ tag, size, children }) {
  const Comp = tag ? tag : "span";

  return <Comp className={size}>{children}</Comp>;
}

export default Text;
