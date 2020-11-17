import axios from 'axios'
import { url, extractStartToEnd } from './utils'

type StoryType =
  | 'newStories'
  | 'topStories'
  | 'bestStories'
  | 'askStories'
  | 'showStories'
  | 'jobStories'

async function getStories(page: number, type: StoryType): Promise<any> {
  const newStories = await axios.get(url[type])
  const { data } = newStories
  const pageStart = (page - 1) * 20
  const pageEnd = pageStart + 20
  const scope = extractStartToEnd({
    value: data,
    start: pageStart,
    end: pageEnd
  })

  return await getStoriesByItem(scope)
}

async function getStoriesByItem(items: number | number[]): Promise<any> {
  if (typeof items === 'number') {
    items = [items]
  }

  const wrapping = items.map((item) => axios.get(url.getStory(item)))

  const data = await axios.all(wrapping)

  return data
}

export { getStories }
