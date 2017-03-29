import React, {Component} from 'react';
import TextInput from './textInput';
import AppButton from './button';
import Text from './text';
import { connect } from 'react-redux';
import { addClass } from '../actions';
import { Form } from 'react-bootstrap';

class AddClass extends Component {
  constructor(){
    super()
    this.state = {
      val: ''
    }
  }

  render() {
    return (
      <div>
        <Form inline onSubmit={e => {
          e.preventDefault()
          if (!this.state.val.trim()) {
            return
          }
          this.props.dispatch(addClass(this.state.val))
          this.setState({
            val: ''
          })
        }}>
          <label className="addClass"><Text black font-size="28" tag="p">Add Classes</Text></label>
          <TextInput width="609" placeholder="e.g. CS225" className="inputField"
            value={this.state.val}
            onChange={e => {
              this.setState({
                val: e.target.value
              })
            }}/>
          <AppButton 
            icon="plus"
            text="Add Class"
            className="add-class-btn" />
        </Form>
      </div>
    );
  }
}

AddClass = connect()(AddClass)

export default AddClass;
