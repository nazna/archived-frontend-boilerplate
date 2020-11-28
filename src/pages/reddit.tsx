import { useRecoilValueLoadable } from 'recoil'
import { RedditFilter } from '../components/reddit-filter'
import { RedditItem } from '../components/reddit-item'
import { TopNav } from '../components/top-nav'
import { selectedRedditState } from '../states/reddit'

export default function Reddit() {
  const subreddit = useRecoilValueLoadable(selectedRedditState)

  return (
    <>
      <TopNav />
      <section>
        <h2>reddit</h2>
        <RedditFilter />
        {subreddit.state === 'loading' && 'Loading...'}
        {subreddit.state === 'hasError' && 'Error occured'}
        {subreddit.state === 'hasValue' &&
          subreddit.contents.data.children.map((item: any) => <RedditItem key={item.data.id} item={item} />)}
      </section>
    </>
  )
}
