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
  getStory(id: number) {
    return `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  }
}

function extractStartToEnd(option: ExtractOption): number[] {
  return option.value.slice(option.start, option.end)
}

export { url }

export { extractStartToEnd }
