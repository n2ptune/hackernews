import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { distanceDateFromNow } from '../../api/utils'

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

const Item = styled.li`
  & .user {
    text-decoration: underline;
    margin-right: 5px;
  }

  & .date {
    font-size: 0.9rem;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.7);
  }

  & a[rel='nofollow'] {
    color: var(--head-color);
    font-weight: bold;
    text-decoration: underline;
  }
`

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
    <Item style={{ paddingLeft: `${comment.level * 7}px` }}>
      <p>
        <span className="user">
          <Link to={`/user/${comment.user}`}>{comment.user}</Link>
        </span>
        <span className="date">
          {distanceDateFromNow(comment.time, Date.now())}
        </span>
      </p>
      {<p dangerouslySetInnerHTML={{ __html: comment.content }}></p>}
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
