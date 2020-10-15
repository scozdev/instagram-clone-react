import React from 'react'
import { Link } from 'react-router-dom'

import { Footer } from '../../components'

import { Container } from './styles'

function Explore() {
  return (
    <Container>
      <main>
        <ul>
          <li>
            <Link>
              <img
                src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05621_zgtcco.jpg"
                alt="Interesting living room light through a window"
                loading="lazy"
              />
            </Link>
          </li>
          <li>
            <Link>
              <img
                src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05447_mvffor.jpg"
                alt="A Toyota Previa covered in graffiti"
              />
            </Link>
          </li>
          <li>
            <Link>
              <img
                src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05466_kwlv0n.jpg"
                alt="A Toyota Previa covered in graffiti"
              />
            </Link>
          </li>
          <li>
            <Link>
              <img
                src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05466_kwlv0n.jpg"
                alt="A Toyota Previa covered in graffiti"
              />
            </Link>
          </li>
          <li>
            <Link>
              <img
                src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05466_kwlv0n.jpg"
                alt="A Toyota Previa covered in graffiti"
              />
            </Link>
          </li>
          <li>
            <Link>
              <img
                src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05466_kwlv0n.jpg"
                alt="A Toyota Previa covered in graffiti"
              />
            </Link>
          </li>
          <li>
            <Link>
              <img
                src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05466_kwlv0n.jpg"
                alt="A Toyota Previa covered in graffiti"
              />
            </Link>
          </li>
          <li>
            <Link>
              <img
                src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05466_kwlv0n.jpg"
                alt="A Toyota Previa covered in graffiti"
              />
            </Link>
          </li>
        </ul>
      </main>

      <Footer color />
    </Container>
  )
}

export default Explore
