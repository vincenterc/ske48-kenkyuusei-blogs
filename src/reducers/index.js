import { combineReducers } from 'redux'
import generations from './Generations'
import posts from './Posts'

export default combineReducers({
  generations,
  posts,
})
