import React from "react";
import { Route, Switch } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./components/layout";
import { Home, Explore, Direct, Profile, Error } from "./pages";

function Router() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/direct" exact component={Direct} />
          <Route path="/explore" exact component={Explore} />
          <Route path="/profile" component={Profile} />
          <Route component={Error} />
        </Switch>
      </Layout>

      <GlobalStyles />
    </>
  );
}

export default Router;
