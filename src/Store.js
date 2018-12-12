import { createStore } from 'redux'
import reducers from './reducers'
import generations from '../content/generations'

const members = generations.reduce((gacc, g) => {
  const generation = g.members.reduce(
    (macc, m) => ({
      ...macc,
      [m.id]: m,
    }),
    {}
  )

  return {
    ...gacc,
    ...generation,
  }
}, {})

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
  members,
  posts,
}

const store = createStore(reducers, initialState)

export default store
