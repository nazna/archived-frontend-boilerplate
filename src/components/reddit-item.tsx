import Link from 'next/link'

interface Props {
  item: any
}

export function RedditItem({ item }: Props) {
  return (
    <div>
      {item.data.thumbnail === 'self' && <mark>self</mark>}
      {item.data.thumbnail === 'spoiler' && <mark>spoiler</mark>}
      {item.data.thumbnail === 'default' && <mark>default</mark>}
      {item.data.thumbnail !== 'self' && item.data.thumbnail !== 'spoiler' && item.data.thumbnail !== 'default' && (
        <img src={item.data.thumbnail} />
      )}
      <Link href={`https://www.reddit.com/${item.data.permalink}`}>
        <a>{item.data.title}</a>
      </Link>
    </div>
  )
}
