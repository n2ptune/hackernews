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

function distanceDateFromNow(ts: number, now?: number): string | boolean {
  const from = now || Date.now()

  if (ts > from) {
    return false
  }

  if (ts.toString().length !== from.toString().length) {
    ts = ts * 1000
  }

  const distance = from - ts
  const diffMinutes = distance / 60 / 1000

  if (diffMinutes >= 1440) {
    return `${Math.floor(diffMinutes / 60 / 24)}일 전`
  } else {
    const hours = diffMinutes / 60

    if (hours >= 0.6) {
      return `${Math.floor(hours) || Math.floor(hours) + 1}시간 전`
    } else {
      const fi = hours.toFixed(2).split('.')[1]

      if (fi[0] === '0') {
        if (fi[1] === '0') {
          return `몇초 전`
        }
        return `${fi[1]}분 전`
      }
      return `${fi[0]}${fi[1]}분 전`
    }
  }
}

export { url }

export { extractStartToEnd }

export { distanceDateFromNow }
