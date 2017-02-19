import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Text from '../components/text';
import MainNavbar from '../components/navbar';
import AppButton from '../components/button';
import SearchBar from '../components/searchBar';
import ClassSectionBox from '../components/classSectionBox';
import ClassResultBox from '../components/classResultBox';

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
                <ClassResultBox name="CS 196" sections={[ { name: "ADF", time:"19:00 - 19:50", selected: true}, { name: "ADG", time:"19:00 - 19:50", selected: false}, { name: "ADH", time:"19:00 - 19:50", selected: false} ]}/>
              </center>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Root;
