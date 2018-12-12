import { createStore } from 'redux'
import reducers from './reducers'
import generations from '../content/generations'

const posts = generations.reduce((gacc, g) => {
  const generation = g.members.reduce(
    (macc, m) => ({
      ...macc,
      [m.id]: {
        list: m.posts,
        map: m.posts.reduce(
          (pacc, p) => ({
            ...pacc,
            [p.id]: p,
          }),
          {}
        ),
      },
    }),
    {}
  )

  return {
    ...gacc,
    ...generation,
  }
}, {})

const initialState = {
  generations,
  posts,
}

const store = createStore(reducers, initialState)

export default store
