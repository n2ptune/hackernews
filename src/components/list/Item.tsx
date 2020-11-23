import React from 'react'
import { Story } from '../../api'
import { distanceDateFromNow } from '../../api/utils'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { device } from '../../styles/responsive'

interface ItemProps {
  item: Story
}

const Wrapper = styled.li`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1.3rem 1rem;
  word-break: break-all;
`

const Title = styled.span`
  font-weight: bold;
`

const User = styled.span`
  text-decoration: underline;
  cursor: pointer;
`

const Separate = styled.span`
  margin: 0 0.2rem;
`

const Comments = styled(User)``

const Score = styled.div`
  align-self: center;
  flex-basis: 7%;
  margin-right: 1.5rem;
  height: 100%;
  font-size: 1.2rem;
  font-weight: bold;
  display: none;
  color: var(--head-color);
  text-align: center;

  @media ${device.tablet} {
    display: block;
  }
`

const Item: React.FC<ItemProps> = ({ item }) => {
  const history = useHistory()

  const goUser = (): void => history.push(`/user/${item.by}`)
  const goStory = (): void => history.push(`/story/${item.id}`)

  return (
    <Wrapper>
      <Score>{item.score || 0}</Score>
      <div>
        <div style={{ marginBottom: '0.5rem' }}>
          <Title>
            <a href={item.url} target="_blank" rel="noreferrer">
              {item.title}
            </a>{' '}
          </Title>
          <span style={{ fontSize: '0.9rem' }}>
            {distanceDateFromNow(item.time * 1000, Date.now())}
          </span>
        </div>
        <div>
          by <User onClick={goUser}>{item.by}</User>
          <Separate />
          <Comments onClick={goStory}>
            {item.kids && item.kids?.length + ' comments'}
          </Comments>
        </div>
      </div>
    </Wrapper>
  )
}

export default Item
