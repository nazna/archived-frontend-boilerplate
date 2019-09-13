import React from 'react'
import { useStore } from 'effector-react'
import { PageBody } from '../components/abstracts/page-body'
import { PageHeader } from '../components/abstracts/page-header'
import { TodoItem } from '../components/modules/todo-item'
import { todoStore } from '../store/todo'

export default function Todo() {
  const todos = useStore(todoStore)

  return (
    <React.Fragment>
      <PageHeader>Todo</PageHeader>
      <PageBody>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </PageBody>
    </React.Fragment>
  )
}
