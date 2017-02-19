import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Text from '../components/text';
import MainNavbar from '../components/navbar';
import AppButton from '../components/button';
import SearchBar from '../components/searchBar';

class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  //example button functionality
  appButtonClick(){
    console.log("You clicked my button!");
  }

  render() {
    return (
      <div>
        <MainNavbar />
        <Grid>
          <Row>
            <Col md={12} xs={12}>
              <center>
                <SearchBar width="609" placeholder="e.g. CS225" />
                <AppButton purple text="Auto-Schedule" onClick={this.appButtonClick} icon="magic"/>
                <Text black font-size="40" tag="p">Hello, it's me.</Text>
              </center>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Root;
