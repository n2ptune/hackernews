import React, { useEffect, useState } from 'react'
import { getStories } from '../api'

const Main: React.FC = () => {
  const [stories, setStories] = useState([])

  useEffect(() => {
    const fetchStories = async () => {
      const data = await getStories(1, 'newStories')

      setStories(data)
    }

    fetchStories()
  }, [])

  return <div>{stories.length}</div>
}

export default Main
