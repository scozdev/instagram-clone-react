import React from "react";

import {
  Ayarlar,
  Kaydedildi,
  More,
  Profil,
  Like,
  Comment,
  Save,
  Direct,
} from "../icons";
import { Avatar, Text, ProfilBox, Dropdown } from "../";
import { DropdownItem } from "../dropdown/profileItem";

import { Container, Header, Body, Footer } from "./styles";

function Post({
  name = "selçuk özdemir",
  img = "https://instagram.fsaw1-5.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/117394957_302631394154110_5886118661349164425_n.jpg?_nc_ht=instagram.fsaw1-5.fna.fbcdn.net&_nc_cat=1&_nc_ohc=2c7dXA_0AmkAX8u0zpx&oh=097563feab47484173c6198126c5ce8f&oe=5F62B1A4",
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
        <img src={img} alt="" />
      </Body>

      <Footer>
        <div>
          <div className="Post-footer-actions">
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
          </div>
          <div className="Post-footer-viewcount">
            <button>
              <span>19.000</span>
              <span>beğenme</span>
            </button>
          </div>
        </div>
        <form className="Post-footer-form">
          <textarea placeholder="Yorum ekle.."></textarea>
          <button>Paylaş</button>
        </form>
      </Footer>
    </Container>
  );
}

export default Post;
