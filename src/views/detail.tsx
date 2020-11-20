import React from 'react'
import { RouteComponentProps, useParams } from 'react-router-dom'
import styled from 'styled-components'

const DetailContainer = styled.div`
  border-radius: 7px;
  background: white;
  padding: 1rem;
`

const DetailLayout: React.FC<RouteComponentProps> = () => {
  const { id } = useParams<{ id: string }>()

  return <DetailContainer className="container">{id}</DetailContainer>
}

export default DetailLayout
