import React, { Component } from "react";

import "semantic-ui-css/semantic.min.css";

import { Segment, Card, Image, Button, Menu, Container, Divider, Grid, Header } from "semantic-ui-react";
import Typist from 'react-typist';
import CountUp from 'react-countup';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid stackable>
          <Grid.Row>
          <Grid.Column width={2} >
          </Grid.Column>

          <Grid.Column width={7} >
        <Segment inverted vertical>
          <Container as="nav" >
            <Header inverted as="h1" >
              <Typist>
                NMT Demo
              </Typist>
            </Header>
          </Container>

          <Container className="content">
            <Grid stackable>
              <Grid.Row>
                <Grid.Column width={7} >
                  <Card color="yellow">
                    <Image
                      bordered
                      rounded
                      size="large"
                      src="http://www.image-net.org/nodes/12/07723559/6f/6fb8d13f217201e5603e3de708e9444877da3b64.thumb"
                    />

                    <Card.Content>
                      <Card.Header>Original</Card.Header>
                    </Card.Content>

                  </Card>
                </Grid.Column>

                <Grid.Column width={7} >
                  <Card color="green">
                    <Image
                      bordered
                      rounded
                      size="large"
                      src="http://www.image-net.org/nodes/12/07723559/6f/6fb8d13f217201e5603e3de708e9444877da3b64.thumb"
                    />

                    <Card.Content>
                      <Card.Header>Processed</Card.Header>
                    </Card.Content>

                  </Card>
                </Grid.Column>

              </Grid.Row>
            </Grid>

          </Container>
          <Segment inverted vertical as="footer">

          </Segment>

        </Segment>

      </Grid.Column>

      <Grid.Column width={3} >
        <Container className="content">
          <Header inverted as="h1">
            <CountUp
              start={0.0}
              end={3507.012}
              duration={2.75}
              separator=" "
              decimals={4}
              decimal="."
              suffix=" ms"
              onEnd={() => console.log('Ended! 👏')}
              onStart={() => console.log('Started! 💨')}
            >

              {({ countUpRef, start }) => (
              <div>
                  <span ref={countUpRef}  />
                  <Divider horizontal></Divider>
                <Button onClick={start}>Start</Button>
                </div>
              )}
            </CountUp>
          </Header>
        </Container>
      </Grid.Column>

      </Grid.Row>
    </Grid>

      </div>
    );
  }
}

export default App;
