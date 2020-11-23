import React from 'react'
import styled from 'styled-components'

interface CommentsComponentProps {
  comments: Array<any>
}

const Wrapper = styled.div`
  background-color: white;
  padding: 2rem 1rem;
`

const Comments: React.FC<CommentsComponentProps> = () => {
  return <Wrapper>Comments</Wrapper>
}

export default Comments
