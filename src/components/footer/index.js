import React from 'react'

import { Container } from './styles'

function Footer({ color, ...props }) {
  return (
    <Container color={color} {...props}>
      <ul>
        <li>
          <span>Hakkında</span>
        </li>
        <li>
          <span>Yardım</span>
        </li>
        <li>
          <span>Basın</span>
        </li>
        <li>
          <span>API</span>
        </li>
        <li>
          <span>İş Fırsatları</span>
        </li>
        <li>
          <span>Gizlilik</span>
        </li>
        <li>
          <span>Koşullar</span>
        </li>
        <li>
          <span>Konumlar</span>
        </li>
        <li>
          <span>Başlıca Hesaplar</span>
        </li>
        <li>
          <span>Konu Etiketleri</span>
        </li>
        <li>
          <span>Dil</span>
        </li>
      </ul>

      <span>© 2020 INSTAGRAM FROM FACEBOOK</span>
    </Container>
  )
}

export default Footer
