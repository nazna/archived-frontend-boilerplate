import { atom, selector } from 'recoil'

export interface Todo {
  id: number
  text: string
  isCompleted: boolean
}

export type TodoFilter = 'Show all' | 'Show completed' | 'Show uncompleted'

export const todoState = atom<Todo[]>({
  key: 'todoState',
  default: [],
})

export const todoFilterState = atom<TodoFilter>({
  key: 'todoFilterState',
  default: 'Show all',
})

export const filteredTodoState = selector({
  key: 'filteredTodoState',
  get: ({ get }) => {
    const filter = get(todoFilterState)
    const list = get(todoState)

    switch (filter) {
      case 'Show completed':
        return list.filter((item) => item.isCompleted)
      case 'Show uncompleted':
        return list.filter((item) => !item.isCompleted)
      default:
        return list
    }
  },
})

export const todoStatsState = selector({
  key: 'todoStatsState',
  get: ({ get }) => {
    const todos = get(todoState)
    const numberOfTodos = todos.length
    const numberOfCompleted = todos.filter((item) => item.isCompleted).length
    const numberOfUncompleted = numberOfTodos - numberOfCompleted
    const completedPercentage = numberOfTodos === 0 ? 0 : numberOfCompleted / numberOfTodos

    return {
      numberOfTodos,
      numberOfCompleted,
      numberOfUncompleted,
      completedPercentage,
    }
  },
})
