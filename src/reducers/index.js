export const classReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CLASS':
      return [
        ...state,
        {
          text: action.text
        }
      ]
    default:
      return state
  }
}
