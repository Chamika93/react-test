import React, { Component } from "react";
//import { PasswordForgetForm } from '../PasswordForget';
//import PasswordChangeForm from '../PasswordChange';
import { withAuthorization, AuthUserContext } from "../Session";

import {
  Grid,
  Card,
  Header,
  Message,
  Form,
  Button,
  Image
} from "semantic-ui-react";
import PasswordChangeForm from "../PasswordChange";

/*const AccountPage = () => (
  <UserConsumer>
    {authUser => (
      <div style={{ marginTop: "100px" }}>
        <div style={{ width: "28%", margin: "0 auto" }}>
          <Card>
            <Image
              src="https://image.shutterstock.com/image-vector/man-character-face-avatar-glasses-260nw-562077406.jpg"
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header> {authUser.email}</Card.Header>
              <Card.Meta>
                <span className="date">{authUser.email}</span>
              </Card.Meta>
            </Card.Content>
          </Card>
        </div>
        <Grid columns={1} style={{ padding: "50px" }}>
          <Grid.Column>
            <Card fluid={true}>
              <Card.Content>
                <Card.Header>New Password</Card.Header>
                <Card.Description>
                  <PasswordChangeForm />
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </div>
    )}
  </UserConsumer>
);*/

class AccountPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authUser: {}
    };
  }

  componentDidMount() {
    /* this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    }); */

    this.listener = this.props.firebase.onAuthUserListener(authUser => {
      authUser ? this.setState({ authUser }) : this.setState({ authUser: {} });
    });
  }

  render() {
    return (
      <div style={{ marginTop: "100px" }}>
        <div style={{ width: "28%", margin: "0 auto" }}>
          <Card>
            <Image
              src="https://image.shutterstock.com/image-vector/man-character-face-avatar-glasses-260nw-562077406.jpg"
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header> {this.state.authUser.username}</Card.Header>
              <Card.Meta>
                <span className="date">{this.state.authUser.email}</span>
              </Card.Meta>
            </Card.Content>
          </Card>
        </div>
        <Grid columns={1} style={{ padding: "50px" }}>
          <Grid.Column>
            <Card fluid={true}>
              <Card.Content>
                <Card.Header>New Password</Card.Header>
                <Card.Description>
                  <PasswordChangeForm />
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const condition = authUser => !!authUser;
export default withAuthorization(condition)(AccountPage);
