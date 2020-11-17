import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  background-color: white;
  border-radius: 8px;
`

const Pagenation = styled(StyledContainer)`
  margin: 0 auto;
  padding: 1.5rem 10px;
  border-radius: 0;
`

const Wrapper = styled.div`
  margin-bottom: 3rem;
`

const Container: React.FC = ({ children }) => (
  <Wrapper>
    <Pagenation className="container">Top Pagenation</Pagenation>
    <StyledContainer className="container">{children}</StyledContainer>
    <Pagenation className="container">Bottom Pagenation</Pagenation>
  </Wrapper>
)

export default Container
