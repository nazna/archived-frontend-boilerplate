import { atom, selector } from 'recoil'

export interface RedditApiResponse {
  kind: string
  data: any
}

export type SubredditFilter = 'Competitiveoverwatch' | 'Tokyo' | 'japanpics' | 'webdev' | 'aww'

export const subredditFilterState = atom<SubredditFilter>({
  key: 'redditFilterState',
  default: 'Competitiveoverwatch',
})

export const selectedRedditState = selector({
  key: 'redditState',
  get: async ({ get }): Promise<RedditApiResponse> => {
    const filter = get(subredditFilterState)

    const response = await fetch(`${process.env.redditApi}/r/${filter}/top.json?limit=10`)
    return await response.json()
  },
})
