import React from "react";

import Avatar from "../avatar";
import { More } from "../icons";
import Text from "../text";
import { Container } from "./styles";

import {} from "./styles";

function ProfilBox({
  src,
  size = 32,
  name = "selcuk",
  location = "Montreal, Quebec",
  icon,
  gradient,
  bg,
}) {
  return (
    <Container bg={bg}>
      <div className="profil-author">
        <Avatar src={src} size={size} gradient={gradient} />

        <div className="profil-author-info">
          <div>
            <Text tag="b">{name}</Text>
          </div>
          <div>
            <Text size="xsmall">{location}</Text>
          </div>
        </div>
      </div>

      {icon && <button className="profil-more">{icon}</button>}
    </Container>
  );
}

export default ProfilBox;
