import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../routes'
import styled from 'styled-components'

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 5rem;
  background-color: var(--head-color);
  color: white;
  padding: 0 10px;
`

const Inner = styled.nav`
  display: block;
`

const StyledHeading = styled.h2`
  display: inline-block;
`

const Header = () => (
  <StyledHeader>
    <Inner className="container">
      <StyledHeading>HN</StyledHeading>
      {routes.map((route) => (
        <Link to={route.path} key={route.name}>
          {route.name}
        </Link>
      ))}
    </Inner>
  </StyledHeader>
)

export default Header
