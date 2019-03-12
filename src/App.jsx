import React, { Component } from "react";

import "semantic-ui-css/semantic.min.css";

import { Segment, Button, Menu, Container, Divider, Grid, Header } from "semantic-ui-react";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Segment inverted vertical textAlign="center">
          <Container as="nav">
            <Header inverted as="h1">
              Cover
            </Header>
            <Menu borderless compact inverted>
              <Menu.Item active>Home</Menu.Item>
              <Menu.Item>Feature</Menu.Item>
              <Menu.Item>Contact</Menu.Item>
            </Menu>
          </Container>
          <Container className="content">
            <Header inverted as="h1">
              Cover your page.
            </Header>
            <Grid stackable padded>
              <Grid.Column width={10}>
                <p>.ten.wide.column</p>
              </Grid.Column>
              <Grid.Column width={6}>
                <p>.six.wide.column</p>
              </Grid.Column>
            </Grid>
            <Button size="huge">Learn more</Button>
          </Container>
          <Segment inverted vertical as="footer">
            Cover template for <a href="http://semantic-ui.com">Semantic-UI</a>,
            by{" "}
            <a href="https://github.com/semantic-ui-forest">
              @Semantic-UI-Forest
            </a>
            .
          </Segment>
        </Segment>
      </div>
    );
  }
}

export default App;
