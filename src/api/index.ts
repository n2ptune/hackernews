import axios from 'axios'
import { url, extractStartToEnd } from './utils'

// id	The item's unique id.
// deleted	true if the item is deleted.
// type	The type of item. One of "job", "story", "comment", "poll", or "pollopt".
// by	The username of the item's author.
// time	Creation date of the item, in Unix Time.
// text	The comment, story or poll text. HTML.
// dead	true if the item is dead.
// parent	The comment's parent: either another comment or the relevant story.
// poll	The pollopt's associated poll.
// kids	The ids of the item's comments, in ranked display order.
// url	The URL of the story.
// score	The story's score, or the votes for a pollopt.
// title	The title of the story, poll or job. HTML.
// parts	A list of related pollopts, in display order.
// descendants	In the case of stories or polls, the total comment count.
interface Story {
  id: number
  deleted?: boolean
  type?: string
  by?: string
  time: number
  text?: string
  dead?: boolean
  parent?: number
  poll?: any
  kids?: number[]
  url?: string
  score?: number
  title?: string
  parts?: number[]
  descendants?: number
}

type StoryType =
  | 'newStories'
  | 'topStories'
  | 'bestStories'
  | 'askStories'
  | 'showStories'
  | 'jobStories'

async function getStories(page: number, type: StoryType): Promise<Story[]> {
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

async function getStoriesByItem(items: number | number[]): Promise<Story[]> {
  if (typeof items === 'number') {
    items = [items]
  }
  const wrapping = items.map((item) => axios.get(url.getStoryOrigin(item)))
  const data = (await axios.all(wrapping)).map((res) => res.data)

  return data
}

async function getStroyByID(id: number): Promise<any> {
  return (await axios.get(url.getStory(id))).data
}

async function getUserByName(name: string): Promise<any> {
  return (await axios.get(url.getUser(name))).data
}

export type { Story, StoryType }

export { getStories, getStroyByID, getUserByName }
