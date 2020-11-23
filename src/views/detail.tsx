import React, { useEffect, useState } from 'react'
import { RouteComponentProps, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { getStroyByID } from '../api'
import Comments from '../components/detail/Comments'
import Item from '../components/detail/Item'
import Loading from '../components/detail/Loading'

const DetailContainer = styled.div``

const DetailLayout: React.FC<RouteComponentProps> = () => {
  const [loading, setLoading] = useState(true)
  const [story, setStory] = useState<{ [key: string]: any }>({})
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    async function fetchStory() {
      const data = await getStroyByID(parseInt(id))
      setStory(data)
      setLoading(false)
    }

    fetchStory()
  }, [id])

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <DetailContainer className="container">
          <Item story={story} />
          <Comments comments={story.comments} />
        </DetailContainer>
      )}
    </>
  )
}

export default DetailLayout
