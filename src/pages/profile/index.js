import React from "react";
// import styled from "styled-components";

import { Link, Route, Switch, useRouteMatch } from "react-router-dom";

import ProfilePost from "./post";
import ProfileSave from "./save";
import ProfileTag from "./tag";
import ProfileIgtv from "./igtv";

function Profile() {
  // const Container = styled.div`
  //   > a {
  //     color: blue;
  //     margin: 20px;
  //   }
  // `;

  // let { topicId } = useParams();

  let { url } = useRouteMatch();

  return (
    <>
      <div>Profile</div>
      <Link to={`${url}`}>Profile</Link>
      <Link to={`${url}/save`}>save</Link>
      <Link to={`${url}/tag`}>tag</Link>
      <Link to={`${url}/igtv`}>igtv</Link>

      <Switch>
        <Route path="/profile" component={ProfilePost} exact />
        <Route path="/profile/save" component={ProfileSave} />
        <Route path="/profile/tag" component={ProfileTag} />
        <Route path="/profile/igtv" component={ProfileIgtv} />
      </Switch>
    </>
  );
}

export default Profile;
