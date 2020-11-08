import { useRecoilValue } from 'recoil'
import { todoStatsState } from '../states/todo'

export function TodoStats() {
  const { numberOfTodos, numberOfCompleted, numberOfUncompleted, completedPercentage } = useRecoilValue(todoStatsState)

  const formattedCompletedPercentage = Math.round(completedPercentage * 100)

  return (
    <ul>
      <li>Total items: {numberOfTodos}</li>
      <li>Items completed: {numberOfCompleted}</li>
      <li>Items not completed: {numberOfUncompleted}</li>
      <li>Completed percentage: {formattedCompletedPercentage}</li>
    </ul>
  )
}
