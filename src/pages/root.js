import React from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import Text from '../components/text';
import MainNavbar from '../components/navbar';
import AppButton from '../components/button';
import TextInput from '../components/textInput';
import ClassSectionBox from '../components/classSectionBox';
import ClassResultBox from '../components/classResultBox';
import AddClass from '../components/AddClass';
import HorizontalLine from '../components/horizontalLine';

class Root extends React.Component {
  constructor(props) {
    super(props);
  }

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
                <AddClass/>
                <HorizontalLine className="divideAddAndAuto" width="609" />
                <AppButton className="autoSchedule" purple text="Auto-Schedule" onClick={this.appButtonClick} icon="magic" />
                <Text black tag="p" font-size="18">My Classes</Text>
                <ClassResultBox name="CS 196" sections={[ { name: "ADF", time:"19:00 - 19:50",
                  selected: true, rejected: false},
                    { name: "ADG", time:"19:00 - 19:50", selected: false, rejected: false},
                      { name: "ADH", time:"19:00 - 19:50", selected: false, rejected: true} ]}/>
                <Link to="review-schedule">
                  <AppButton large text="Review Schedule" onClick={this.appButtonClick} icon="calendar" />
                </Link>
              </center>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Root;
