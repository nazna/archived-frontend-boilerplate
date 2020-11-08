import { useRecoilValue } from 'recoil'
import { TodoCreator } from '../components/todo-creator'
import { TodoFilters } from '../components/todo-filters'
import { TodoItem } from '../components/todo-item'
import { TodoStats } from '../components/todo-stats'
import { TopNav } from '../components/top-nav'
import { filteredTodoState } from '../states/todo'

export default function Todo() {
  const todos = useRecoilValue(filteredTodoState)

  return (
    <>
      <TopNav />
      <section>
        <h2>todo</h2>
        <TodoStats />
        <TodoFilters />
        <TodoCreator />
        <span>todo list</span>
        {todos.map((item) => (
          <TodoItem key={item.id} item={item} />
        ))}
      </section>
    </>
  )
}
