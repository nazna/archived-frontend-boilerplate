import { ChangeEvent } from 'react'
import { useRecoilState } from 'recoil'
import { TodoFilter, todoFilterState } from '../states/todo'

export function TodoFilters() {
  const [filter, setFilter] = useRecoilState(todoFilterState)

  const handleFilter = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value as TodoFilter)
  }

  return (
    <section>
      Filter:
      <select value={filter} onChange={handleFilter}>
        <option value="Show all">All</option>
        <option value="Show completed">Completed</option>
        <option value="Show uncompleted">Uncompleted</option>
      </select>
    </section>
  )
}
