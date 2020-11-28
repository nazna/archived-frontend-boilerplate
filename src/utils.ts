import { Todo } from './states/todo'

let id = 0

export function getId() {
  return id++
}

export function replaceItemAtIndex(arr: Todo[], index: number, newValue: Todo) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)]
}

export function removeItemAtIndex(arr: Todo[], index: number) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)]
}
