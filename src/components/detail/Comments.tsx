import React from 'react'
import styled from 'styled-components'

interface CommentsComponentProps {
  comments: Array<{ [key: string]: any }>
  count?: number
}

const Wrapper = styled.div`
  background-color: white;
  padding: 1rem;
`

const CommentInformation = styled.div`
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  font-weight: bold;
  border-bottom: 1px solid #eee;
  color: var(--head-color);
`

const ItemWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const Item = styled.li``

const CommentItemWrapper: React.FC<CommentsComponentProps> = ({ comments }) => {
  return (
    <ItemWrapper>
      {comments.map((comment) => (
        <CommentItem comment={comment} key={comment.id} />
      ))}
    </ItemWrapper>
  )
}

const CommentItem: React.FC<{ comment: any }> = ({ comment }) => {
  return (
    <Item style={{ paddingLeft: `${comment.level * 6}px` }}>
      {comment.id}, {comment.level}
      <>
        {comment.comments && <CommentItemWrapper comments={comment.comments} />}
      </>
    </Item>
  )
}

const Comments: React.FC<CommentsComponentProps> = ({ comments, count }) => {
  return (
    <Wrapper>
      <CommentInformation>{count} Comments</CommentInformation>
      <CommentItemWrapper comments={comments} />
    </Wrapper>
  )
}

export default Comments
