import _ from 'lodash'
export const classReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CLASS':
      return _.uniqBy([
        ...state,
        {
          text: action.text
        }
      ], classData => classData.text)
    case 'REMOVE_CLASS':
      return _.remove(state, classData => classData.text !== action.text)
    default:
      return state
  }
}
