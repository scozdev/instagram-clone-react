import React from "react";
// import styled from "styled-components";

import {
  Link,
  Route,
  Switch,
  useRouteMatch,
  useLocation as locations,
} from "react-router-dom";

import ProfilePost from "./post";
import ProfileSave from "./save";
import ProfileTag from "./tag";
import ProfileIgtv from "./igtv";
import { Avatar, Footer, ProfilLayout } from "../../components";
import {
  Ayarlar,
  Gonderiler,
  GonderilerFill,
  İgtv,
  İgtvFill,
  Kaydedildi,
  KaydedildiFill,
  Etiket,
  EtiketFill,
} from "../../components/icons";

import { Container } from "./styles";

function Profile() {
  let { url } = useRouteMatch();
  let router = locations();

  return (
    <Container>
      <header>
        <Avatar size={150} />
        <section>
          <div>
            <h2 style={{ fontWeight: "300", fontSize: "28px" }}>selcuk</h2>
            <button className="Profile-header-button">Profil Düzenle</button>
            <button style={{ padding: "8px" }}>
              <Ayarlar style={{ fontSize: "24px" }} />
            </button>
          </div>
          <div>
            <div>
              <span>0</span> gönderi
            </div>
            <div>
              <span>0</span> gönderi
            </div>
            <div>
              <span>0</span> gönderi
            </div>
          </div>
          <div>
            <h1>selçuk özdemir</h1>
            <span>Ktü Yazılım Mühendisliği</span>
          </div>
        </section>
      </header>
      <nav>
        <Link to={`${url}`}>
          {router.pathname === "/profile" ? <GonderilerFill /> : <Gonderiler />}
          Gönderiler
        </Link>
        <Link to={`${url}/igtv`}>
          {router.pathname === "/profile/igtv" ? <İgtvFill /> : <İgtv />}
          igtv
        </Link>
        <Link to={`${url}/save`}>
          {router.pathname === "/profile/save" ? (
            <KaydedildiFill />
          ) : (
            <Kaydedildi />
          )}
          Kaydedilenler
        </Link>
        <Link to={`${url}/tag`}>
          {router.pathname === "/profile/tag" ? <EtiketFill /> : <Etiket />}
          Etiketlenenler
        </Link>
      </nav>

      <ProfilLayout>
        <Switch>
          <Route path="/profile" component={ProfilePost} exact />
          <Route path="/profile/save" component={ProfileSave} />
          <Route path="/profile/tag" component={ProfileTag} />
          <Route path="/profile/igtv" component={ProfileIgtv} />
        </Switch>
      </ProfilLayout>

      <Footer color style={{ marginTop: "20%" }} />
    </Container>
  );
}

export default Profile;
