import React from 'react';
import TextInput from './textInput';
import AppButton from './button';
import Text from './text';
import { connect } from 'react-redux';
import { addClass } from '../actions';
import { Form } from 'react-bootstrap';

let AddClass = ({ dispatch }) => {
  var val = '';
  let input
  return (
    <div>
      <Form inline onSubmit={e => {
        e.preventDefault()
        if (!val.trim()) {
          return
        }
        dispatch(addClass(val))
        input.value = ''
      }}>
        <label className="addClass"><Text black font-size="28" tag="p">Add Classes</Text></label>
        <TextInput width="609" placeholder="e.g. CS225" className="inputField"
          ref={field => {
            input = field
          }}
          onChange={e => {
            val = e.target.value
          }}/>
        <AppButton icon="plus" text="Add Class"/>
      </Form>
    </div>
  )
}
AddClass = connect()(AddClass)

export default AddClass;
