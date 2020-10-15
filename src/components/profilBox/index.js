import React from 'react'

import { Avatar } from '../'

import { Container } from './styles'

function ProfilBox({
  src,
  size = 32,
  name = 'selcuk',
  location = 'Turkey, Istanbul',
  icon,
  gradient,
  bg
}) {
  return (
    <Container bg={bg}>
      <div className="profil-author">
        <Avatar src={src} size={size} gradient={gradient} />

        <div className="profil-author-info">
          <div>
            <b>{name}</b>
          </div>
          <div>
            <span size="xsmall">{location}</span>
          </div>
        </div>
      </div>

      {icon && <button className="profil-more">{icon}</button>}
    </Container>
  )
}

export default ProfilBox
