import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  background-color: white;
  padding: 10px;
`

const Pagenation = styled(StyledContainer)`
  margin: 0 auto;
  padding: 1.5rem 10px;
`

const Container: React.FC = ({ children }) => (
  <>
    <Pagenation className="container">Top Pagenation</Pagenation>
    <StyledContainer className="container">{children}</StyledContainer>
    <Pagenation className="container">Bottom Pagenation</Pagenation>
  </>
)

export default Container
