import React from "react";

import { Container } from "./styles";

function Footer({ color, ...props }) {
  return (
    <Container color={color} {...props}>
      <ul>
        <li>
          <a>Hakkında</a>
        </li>
        <li>
          <a>Yardım</a>
        </li>
        <li>
          <a>Basın</a>
        </li>
        <li>
          <a>API</a>
        </li>
        <li>
          <a>İş Fırsatları</a>
        </li>
        <li>
          <a>Gizlilik</a>
        </li>
        <li>
          <a>Koşullar</a>
        </li>
        <li>
          <a>Konumlar</a>
        </li>
        <li>
          <a>Başlıca Hesaplar</a>
        </li>
        <li>
          <a>Konu Etiketleri</a>
        </li>
        <li>
          <a>Dil</a>
        </li>
      </ul>

      <span>© 2020 INSTAGRAM FROM FACEBOOK</span>
    </Container>
  );
}

export default Footer;
