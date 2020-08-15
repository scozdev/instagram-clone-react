import * as React from "react";

function SvgMore(props) {
  return (
    <svg
      aria-label="Di\u011Fer se\xE7enekler"
      height="1em"
      viewBox="0 0 48 48"
      width="1em"
      {...props}
    >
      <circle
        fill="currentColor"
        clipRule="evenodd"
        cx={8}
        cy={24}
        fillRule="evenodd"
        r={4.5}
      />
      <circle
        fill="currentColor"
        clipRule="evenodd"
        cx={24}
        cy={24}
        fillRule="evenodd"
        r={4.5}
      />
      <circle
        fill="currentColor"
        clipRule="evenodd"
        cx={40}
        cy={24}
        fillRule="evenodd"
        r={4.5}
      />
    </svg>
  );
}

export default SvgMore;
