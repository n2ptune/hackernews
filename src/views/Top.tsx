import React, { useEffect, useState } from 'react'
import { RouteComponentProps, useParams, withRouter } from 'react-router-dom'
import { getStories, Story } from '../api'
import Loading from '../components/list/Loading'
import Wrapper from '../components/list/Wrapper'

const Top: React.FC<RouteComponentProps> = () => {
  const [stories, setStories] = useState<Story[]>([])
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    const fetchStories = async () => {
      const data = await getStories(id ? parseInt(id) : 1, 'topStories')

      setStories(data)
    }

    fetchStories()

    return () => setStories([])
  }, [id])

  return (
    <>{stories.length ? <Wrapper items={stories}></Wrapper> : <Loading />}</>
  )
}

export default withRouter(Top)
