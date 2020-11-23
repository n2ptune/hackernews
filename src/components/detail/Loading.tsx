import React from 'react'
import styled from 'styled-components'
import { LoadingComponent } from '../list/Loading'

const LoadingContainer = styled.div`
  background: white;
`

const Loading: React.FC = () => {
  return (
    <>
      <LoadingContainer className="container">
        <LoadingComponent />
      </LoadingContainer>
      <LoadingContainer className="container" style={{ margin: '0.5rem auto' }}>
        {new Array(10).fill(0).map((_, i, __) => (
          <LoadingComponent key={i} />
        ))}
      </LoadingContainer>
    </>
  )
}

export default Loading
