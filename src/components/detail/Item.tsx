import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface DetailStory {
  id?: number
  title?: string
  points?: number
  user?: string
  time?: number
  time_ago?: string
  url?: string
  [key: string]: any
}

interface DetailItemComponentProps {
  story: DetailStory
}

const Wrapper = styled.div`
  background-color: white;
  padding: 2rem 1rem;
  margin-bottom: 0.5rem;

  & .top {
    margin-bottom: 1rem;

    & span {
      margin-right: 0.5rem;
    }
  }
`

const Title = styled.span`
  font-size: 1.3rem;
  font-weight: bold;
  color: var(--head-color);
`

const UserLink = styled.span`
  text-decoration: underline;
  margin-right: 0.5rem;
`

const formatTimeAgo = (time: string | undefined): string => {
  if (typeof time === 'undefined') {
    return ''
  }
  return time
    .replace('hours', '시간')
    .replace('ago', '전')
    .replace('days', '일')
    .replace(' ', '')
}

const Item: React.FC<DetailItemComponentProps> = (props) => {
  return (
    <Wrapper>
      <div className="top">
        <Title>
          <a href={props.story.url} target="_blank" rel="noreferrer">
            {props.story.title}
          </a>
        </Title>
        <span>{props.story.domain}</span>
      </div>
      <div className="bottom">
        <span>{props.story.points} points | by </span>
        <UserLink>
          <Link to={`/user/${props.story.user}`}>{props.story.user}</Link>
        </UserLink>
        <span>{formatTimeAgo(props.story.time_ago)}</span>
      </div>
    </Wrapper>
  )
}

export default Item
