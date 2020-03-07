import React from "react";

import { withFirebase } from "../Firebase";

import { Menu } from "semantic-ui-react";
import { Button } from "semantic-ui-react";

const SignOutButton = ({ firebase }) => (
  /*<Menu.Menu position="right">
    <Menu.Item name="Logout" onClick={firebase.doSignOut} />
  </Menu.Menu> */
  <Button onClick={firebase.doSignOut} basic color="black">
    Sign Out
  </Button>
);

export default withFirebase(SignOutButton);
