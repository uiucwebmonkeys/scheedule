import React from 'react';
import TextInput from './textInput';
import AppButton from './button';
import { connect } from 'react-redux';
import { addClass } from '../actions';
import { Form } from 'react-bootstrap';

let AddClass = ({ dispatch }) => {
  let input
  return (
    <div>
      <Form inline onSubmit={e => {
        e.preventDefault()
        var val = input.state.value;
        if (!val.trim()) {
          return
        }
        dispatch(addClass(val))
        input.value = ''
      }}>
        <TextInput width="609" placeholder="e.g. CS225" className="inputField"
          ref={field => {
            input = field
          }} />
        <AppButton icon="plus" text="Add Class"/>
      </Form>
    </div>
  )
}
AddClass = connect()(AddClass)

export default AddClass;
