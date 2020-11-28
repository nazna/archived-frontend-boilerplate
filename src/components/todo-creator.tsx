import { ChangeEvent, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { todoState } from '../states/todo'
import { getId } from '../utils'

export function TodoCreator() {
  const [inputValue, setInputValue] = useState('')
  const setTodo = useSetRecoilState(todoState)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()

    setTodo((prevTodo) => [
      ...prevTodo,
      {
        id: getId(),
        text: inputValue,
        isCompleted: false,
      },
    ])

    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>add a new task</label>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button type="submit">add</button>
    </form>
  )
}
