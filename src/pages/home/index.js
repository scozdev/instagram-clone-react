import React from "react";
import StickyBox from "react-sticky-box";

import { Container, Sidebar, Timeline } from "./styles";
import Post from "../../components/post";

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
            <p>
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              lorem lorem lorem lorem
            </p>
          </StickyBox>
        </Timeline>
      </Container>
    </>
  );
}

export default Home;
