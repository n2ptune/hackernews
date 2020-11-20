import React, { useEffect, useState } from 'react'
import { RouteComponentProps, useParams, withRouter } from 'react-router-dom'
import { getStories, Story, StoryType } from '../api'
import Loading from '../components/list/Loading'
import Wrapper from '../components/list/Wrapper'

interface ViewLayoutProps extends RouteComponentProps {
  target: StoryType
}

const ViewLayout: React.FC<ViewLayoutProps> = ({ target }) => {
  const [stories, setStories] = useState<Story[]>([])
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    const fetchStories = async () => {
      const data = await getStories(id ? parseInt(id) : 1, target)

      setStories(data)
    }

    fetchStories()

    return () => setStories([])
  }, [target, id])

  return (
    // <>{stories.length ? <Wrapper items={stories}></Wrapper> : <Loading />}</>
    <Loading />
  )
}

export default withRouter(ViewLayout)
