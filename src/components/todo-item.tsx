import { ChangeEvent } from 'react'
import { useRecoilState } from 'recoil'
import { Todo, todoState } from '../states/todo'
import { removeItemAtIndex, replaceItemAtIndex } from '../utils'

interface Props {
  item: Todo
}

export function TodoItem({ item }: Props) {
  const [todo, setTodo] = useRecoilState(todoState)

  const index = todo.findIndex((todoItem) => todoItem === item)

  const handleEdit = (event: ChangeEvent<HTMLInputElement>) => {
    setTodo(replaceItemAtIndex(todo, index, { ...item, text: event.target.value }))
  }

  const handleCompleted = () => {
    setTodo(replaceItemAtIndex(todo, index, { ...item, isCompleted: !item.isCompleted }))
  }

  const handleDelete = () => {
    setTodo(removeItemAtIndex(todo, index))
  }

  return (
    <div className="item">
      <input type="text" value={item.text} onChange={handleEdit} />
      <input type="checkbox" checked={item.isCompleted} onChange={handleCompleted} />
      <button onClick={handleDelete}>X</button>
      <style jsx>{`
        .item {
          display: flex;
        }
      `}</style>
    </div>
  )
}
