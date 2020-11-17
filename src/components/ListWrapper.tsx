import React from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
  &:not(:last-child) {
    border-bottom: 1px solid red;
  }
`

interface ListProps {
  items: any[]
}

const Wrapper: React.FC<ListProps> = (props) => {
  return (
    <StyledWrapper>
      {props.items.map((item, index, _) => (
        <div key={index}>{item.id}</div>
      ))}
    </StyledWrapper>
  )
}

export default Wrapper
