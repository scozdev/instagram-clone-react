import React from "react";
import StickyBox from "react-sticky-box";

import { Text, ProfilBox, Post, Footer } from "../../components";

import { Container, Sidebar, Timeline } from "./styles";

function Home() {
  return (
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
          <div>
            {" "}
            <ProfilBox size={56} />
          </div>

          <div style={{ marginBottom: "24px" }}>
            <div className="Timeline-suggestions">
              <Text>Senin İçin Öneriler</Text>
              <Text size="small">Tümünü Gör</Text>
            </div>

            <ProfilBox icon="Takip Et" />
            <ProfilBox gradient icon="Takip Et" />
            <ProfilBox icon="Takip Et" />
          </div>

          <div>
            <Footer />
          </div>
        </StickyBox>
      </Timeline>
    </Container>
  );
}

export default Home;
