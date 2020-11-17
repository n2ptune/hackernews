import React, { useEffect, useState } from 'react'
import { getStories, Story } from '../api'
import Wrapper from '../components/ListWrapper'

const Main: React.FC = () => {
  const [stories, setStories] = useState<Story[]>([])

  useEffect(() => {
    const fetchStories = async () => {
      const data = await getStories(1, 'newStories')

      setStories(data)
    }

    fetchStories()

    return () => setStories([])
  }, [])

  return (
    <>
      {stories.length ? (
        <Wrapper items={stories}></Wrapper>
      ) : (
        <div>Loading....</div>
      )}
    </>
  )
}

export default Main
