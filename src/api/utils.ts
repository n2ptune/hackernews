interface ExtractOption {
  start: number
  end: number
  value: number[]
}

const url = {
  newStories: 'https://hacker-news.firebaseio.com/v0/newstories.json',
  topStories: 'https://hacker-news.firebaseio.com/v0/topstories.json',
  bestStories: 'https://hacker-news.firebaseio.com/v0/beststories.json',
  askStories: 'https://hacker-news.firebaseio.com/v0/askstories.json',
  showStories: 'https://hacker-news.firebaseio.com/v0/showstories.json',
  jobStories: 'https://hacker-news.firebaseio.com/v0/jobstories.json',
  getStory(id: number): string {
    return `https://api.hackerwebapp.com/item/${id}`
  },
  getStoryOrigin(id: number): string {
    return `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  }
}

function extractStartToEnd(option: ExtractOption): number[] {
  return option.value.slice(option.start, option.end)
}

function distanceDateFromNow(ts: number, now: number = 1605765464624): string {
  const oneday = 24 * 60 ** 2 * 1000
  const from = now || Date.now()
  const distance = from - ts
  const diff = distance / oneday

  // 하루 이상
  if (diff >= 1) {
    return `${Math.floor(diff)}일 전`
  } else {
    const to = new Date(ts)
    const fromDate = new Date(from)
    const hourDistance = fromDate.getHours() - to.getHours()

    if (hourDistance <= 0) {
      return `몇분 전`
    }

    return `${fromDate.getHours() - to.getHours()}시간 전`
  }
}

export { url }

export { extractStartToEnd }

export { distanceDateFromNow }
