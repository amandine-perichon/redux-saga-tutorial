import { combineReducers } from 'redux'

export default combineReducers({
  counter,
  quote
})

function counter (state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'INCREMENT_IF_ODD':
      return (state % 2 !== 0) ? state + 1 : state
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

function quote (state= "", action) {
  switch (action.type) {
    case 'QUOTE_REQUEST_SUCCEEDED':
      return `This is a quote: ${action.quote}`
    case 'QUOTE_REQUEST_FAILED':
      return `There was an error: ${action.error}`
    default:
      return state
  }
}
