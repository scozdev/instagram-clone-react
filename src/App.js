import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages";
import Direct from "./pages/direct";
import Explore from "./pages/explore";
import Profile from "./pages/profile";
import Error from "./pages/error";

import Layout from "./components/layout";

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/direct" component={Direct} />
          <Route path="/explore" component={Explore} />
          <Route path="/profile" component={Profile} />
          <Route path="/" exact={true} component={Home} />
          <Route component={Error} />
        </Switch>
      </Layout>
    </>
  );
}

export default App;
