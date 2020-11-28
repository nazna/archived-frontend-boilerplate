import { ChangeEvent } from 'react'
import { useRecoilState } from 'recoil'
import { SubredditFilter, subredditFilterState } from '../states/reddit'

export function RedditFilter() {
  const [filter, setFilter] = useRecoilState(subredditFilterState)

  const handleFilter = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value as SubredditFilter)
  }

  return (
    <section>
      Filter:
      <select value={filter} onChange={handleFilter}>
        <option value="Competitiveoverwatch">Competitiveoverwatch</option>
        <option value="Tokyo">Tokyo</option>
        <option value="japanpics">japanpics</option>
        <option value="webdev">webdev</option>
        <option value="aww">aww</option>
      </select>
    </section>
  )
}
