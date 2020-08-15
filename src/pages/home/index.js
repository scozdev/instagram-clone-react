import React from "react";
import StickyBox from "react-sticky-box";

import { Container, Sidebar, Timeline } from "./styles";
import Post from "../../components/post";
import ProfilBox from "../../components/profilBox";
import Text from "../../components/text";

function Home() {
  return (
    <>
      <Container>
        <Sidebar>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </Sidebar>
        <Timeline>
          <StickyBox offsetTop={84}>
            <ProfilBox size={56} />
            <div className="Timeline-suggestions">
              <Text>Senin İçin Öneriler</Text>
              <Text size="small">Tümünü Gör</Text>
            </div>

            <ProfilBox icon="Takip Et" />
            <ProfilBox gradient icon="Takip Et" />
            <ProfilBox icon="Takip Et" />
          </StickyBox>
        </Timeline>
      </Container>
    </>
  );
}

export default Home;
