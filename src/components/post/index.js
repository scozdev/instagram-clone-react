import React from 'react'

import { More, Like, Comment, Save, Direct } from '../icons'
import { ProfilBox, Dropdown } from '../'
import { DropdownItem } from '../dropdown/profileItem'

import { Container, Body, Footer } from './styles'
import { Link } from 'react-router-dom'

function Post({
  name = 'selçuk özdemir',
  alt = '',
  img = 'https://gazetekarinca.com/wp-content/uploads/2020/01/Picasso.jpg'
}) {
  return (
    <Container>
      <ProfilBox
        icon={
          <Dropdown DropButton={<More />}>
            <DropdownItem to="/">Uygunsuz İçeriği Şikayet Et</DropdownItem>
            <DropdownItem to="/">Takibi Bırak</DropdownItem>
            <DropdownItem to="/">Gönderiye Git</DropdownItem>
            <DropdownItem to="/">İptal</DropdownItem>
          </Dropdown>
        }
        gradient
      />

      <Body>
        <img src={img} alt={alt} />
      </Body>

      <Footer>
        <div>
          <section className="Post-footer-actions">
            <button>
              <Like />
            </button>
            <button>
              <Comment />
            </button>
            <button>
              <Direct />
            </button>
            <button>
              <Save />
            </button>
          </section>
          <section className="Post-footer-viewcount">
            <button>
              <span>19.000</span>
              <span>beğenme</span>
            </button>
          </section>
          <section className="Post-footer-comment">
            <Link className="Post-footer-comment-link" to="/selcuk">
              webtekno
            </Link>
            <span>Evet bu gönderilorem lorem</span>
            <Link to="/" className="Post-footer-comment-tag">
              #Etiket
            </Link>
            <Link to="/" className="Post-footer-comment-tag">
              #Etiket
            </Link>
            <Link to="/" className="Post-footer-comment-tag">
              #Etiket
            </Link>
          </section>
        </div>
        <form className="Post-footer-form">
          <textarea placeholder="Yorum ekle.."></textarea>
          <button>Paylaş</button>
        </form>
      </Footer>
    </Container>
  )
}

export default Post
