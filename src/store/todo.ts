import { createStore, createEvent } from 'effector'

export const add = createEvent<string>()
export const toggle = createEvent<Todo['id']>()

const initialState: TodoData = [
  {
    id: 0,
    text: 'I wanna astronaut',
    completed: false
  },
  {
    id: 1,
    text: 'I was here',
    completed: true
  }
]

export const todoStore = createStore(initialState)
  .on(add, (state, text) => [...state, { id: state.length, text, completed: false }])
  .on(toggle, (state, id) =>
    state.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  )
