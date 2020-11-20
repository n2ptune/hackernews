import React, { useEffect, useState } from 'react'
import {
  RouteComponentProps,
  useLocation,
  useParams,
  withRouter
} from 'react-router-dom'
import styled from 'styled-components'
import { getStories, Story, StoryType } from '../api'
import Loading from '../components/list/Loading'
import Pagenation from '../components/list/Pagenation'
import Wrapper from '../components/list/Wrapper'

interface ViewLayoutProps extends RouteComponentProps {
  target: StoryType
}

const Container = styled.div`
  /* background: white; */
`

const ViewLayout: React.FC<ViewLayoutProps> = ({ target }) => {
  const [page, setPage] = useState(1)
  const [path, setPath] = useState('')
  const { pathname } = useLocation()
  const [stories, setStories] = useState<Story[]>([])
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    if (pathname === '/') {
      setPath('news')
    } else {
      setPath(pathname.substr(1).replace(/\/|[0-9]+/gm, ''))
    }

    const match = pathname.match(/[0-9]+/g)

    if (!match) {
      setPage(1)
    } else {
      setPage(parseInt(match[0]) || 1)
    }

    const fetchStories = async () => {
      const data = await getStories(id ? parseInt(id) : 1, target)

      setStories(data)
    }

    fetchStories()

    return () => setStories([])
  }, [target, id, pathname])

  return (
    <Container className="container">
      <Pagenation page={page} path={path} />
      {stories.length ? <Wrapper items={stories}></Wrapper> : <Loading />}
      <Pagenation page={page} path={path} />
    </Container>
  )
}

export default withRouter(ViewLayout)
