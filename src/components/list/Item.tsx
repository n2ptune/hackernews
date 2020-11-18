import React from 'react'
import { Story } from '../../api'
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
        <Title>{item.title} </Title>
        <span>{item.time}</span>
      </p>
      <p>
        by{' '}
        <User onClick={() => history.push(`/user/${item.by}`)}>{item.by}</User>
      </p>
    </Wrapper>
  )
}

export default Item
