import React, { useEffect, useState } from 'react'
import { getStories, Story } from '../api'
import Wrapper from '../components/list/Wrapper'

const Top: React.FC = () => {
  const [stories, setStories] = useState<Story[]>([])

  useEffect(() => {
    const fetchStories = async () => {
      const data = await getStories(1, 'topStories')

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

export default Top
