import React from 'react'
import { Story } from '../../api'
import styled from 'styled-components'

interface ItemProps {
  item: Story
}

const StyledItem = styled.li`
  padding: 1.3rem 1rem;
`

const Item: React.FC<ItemProps> = ({ item }) => (
  <StyledItem>{item.id}</StyledItem>
)

export default Item
