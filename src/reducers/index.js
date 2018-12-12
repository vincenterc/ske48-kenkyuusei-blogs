import { combineReducers } from 'redux'
import generations from './Generations'
import members from './Members'
import posts from './Posts'

export default combineReducers({
  generations,
  members,
  posts,
})
