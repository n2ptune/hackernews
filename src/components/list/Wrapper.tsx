import React from 'react'
import styled from 'styled-components'
import { Story } from '../../api'
import Item from './Item'

const StyledWrapper = styled.ul`
  list-style: none;
  margin: 0.25rem 0;
  padding: 0;
  background-color: white;

  & > li:not(:last-child) {
    border-bottom: 1px solid #ddd;
  }
`

interface ListProps {
  items: Story[]
}

const Wrapper: React.FC<ListProps> = (props) => {
  return (
    <StyledWrapper>
      {props.items.map((item, index, _) => (
        <Item item={item} key={index} />
      ))}
    </StyledWrapper>
  )
}

export default Wrapper
