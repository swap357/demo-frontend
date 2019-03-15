import React, { Component } from "react";

import "semantic-ui-css/semantic.min.css";

import { Segment, Card, Image, Button, Menu, Container, Divider, Grid, Header } from "semantic-ui-react";
import Typist from 'react-typist';
import CountUp from 'react-countup';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import axios from 'axios';

import "./App.css";

var links = [
  { url: 'http://www.image-net.org/nodes/8/12050533/25/25d5a3cf3a7faf767727ec49dc3ef5a88a9743cf.thumb' },
  { url: 'http://www.image-net.org/nodes/3/03954731/27/27a059a6ab1abd5b9025f4fb9ef387fda0561e27.thumb' },
  { url: 'http://www.image-net.org/nodes/3/02086079/5c/5ccac5a3495f01a5fc9c307b22ee56692a689a91.thumb' },
  { url: 'http://www.image-net.org/nodes/8/02898711/01/011f2a66c52e198205eeb3e4cf4bf7a24aec2cab.thumb' }
];

var router_url = 'http://10.105.159.221:31283';
var function_name = 'call-incept';

const data = [{iteration: '0', exec_time: 3.24}, {iteration: '1', exec_time: 3.25}, {iteration: '2', exec_time: 4.5}, {iteration: '3', exec_time: 4.23},{iteration: '4', exec_time: 2.23},{iteration: '5', exec_time: 3.73},{iteration: '6', exec_time: 4.63},{iteration: '7', exec_time: 3.23}];
class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = {current_image:"http://www.image-net.org/nodes/14/02120079/69/69486b2ac434fe7e850e9e6c550d5ea4cab3d443.thumb"};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('The link was clicked.');
        links.forEach(function (link) {
            
            var url = link.url
            console.log(url);
            url = router_url + '/' + function_name + '?key=' + url
            axios.get(url,  {
                headers: {
                'Access-Control-Allow-Origin': '*',
                }})
                .then(function (response) {
                console.log(response)
                })
                .catch(function (error) {
                console.log(error)
                });

         });
    

  }
 


  render() {
    return (
      <div className="App">
        <Grid stackable>
          <Grid.Row>
          <Grid.Column width={2} >
          </Grid.Column>

          <Grid.Column width={7} >
        
          <Container as="nav" >
            <Header inverted as="h1" >
              <Typist>
                FaaS Demo
              </Typist>
            </Header>
          </Container>

          <Container className="content">
            <Grid stackable>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Card color="yellow">
                    <Card className="inputdata">
                        <Image
                        bordered
                        rounded
                        size="large"
                        src="http://www.image-net.org/nodes/13/02101006/cc/ccc963e3b15bd195cd0de21d621791f9ec7cf41a.thumb"
                        />
                    </Card>
                    <Card.Content className="labels">
                      <Card.Header>Input</Card.Header>
                    </Card.Content>

                  </Card>
                </Grid.Column>

                <Grid.Column >
                  <Card color="green">
                    <Card className="inputdata">
                    
                    <Header>
                     Dog
                    </Header>
                    </Card>
                    <Card.Content className="labels">
                      <Card.Header>Output</Card.Header>
                    </Card.Content>

                  </Card>
                </Grid.Column>

              </Grid.Row>
            <Grid.Row>
                <Container>
                <Button onClick={this.handleClick}>Start</Button>
                <Divider></Divider>
                    <Card className="status">
                    <Card.Content><strong>Iteration 2:</strong> pulling image...<br/><strong>Iteration 2:</strong> sending request </Card.Content>
                    </Card>
                </Container>
            </Grid.Row>
            </Grid>

          </Container>
        
        

      </Grid.Column>

      <Grid.Column width={7}>
            
            
            <Container className="content graph">
            <Header className="chart-title">Performance chart</Header>
            <LineChart width={500} height={250} data={data} margin={{ top: 0, right: 30, bottom: 0, left: 0 }}>
                <Line type="monotone" dataKey="exec_time" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
          
        </Container>
      </Grid.Column>

      </Grid.Row>
    </Grid>

      </div>
    );
  }
}

export default App;
