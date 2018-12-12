import { createStore } from 'redux'
import reducers from './reducers'
import generations from '../content/generations'

const initialState = {
  generations,
}

const store = createStore(reducers, initialState)

export default store