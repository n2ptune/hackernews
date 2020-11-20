import React from 'react'
import { Story } from '../../api'
import { distanceDateFromNow } from '../../api/utils'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

interface ItemProps {
  item: Story
}

const Wrapper = styled.li`
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

const Item: React.FC<ItemProps> = ({ item }) => {
  const history = useHistory()

  return (
    <Wrapper>
      <p>
        <Title>
          <a href={item.url} target="_blank" rel="noreferrer">
            {item.title}
          </a>{' '}
        </Title>
        <span>{distanceDateFromNow(item.time * 1000, Date.now())}</span>
      </p>
      <p>
        by{' '}
        <User onClick={() => history.push(`/user/${item.by}`)}>{item.by}</User>
      </p>
    </Wrapper>
  )
}

export default Item
