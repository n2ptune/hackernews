import React from 'react'
import { NavLink } from 'react-router-dom'
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
  width: 100%;
`

const StyledLink = styled(NavLink)`
  color: rgba(255, 255, 255, 0.5);
  display: inline-block;
  text-decoration-line: none;
  margin-left: 1rem;

  &.active {
    color: white;
    font-weight: bold;
  }

  &:hover {
    color: white;
  }
`

const GithubIcon = styled.a`
  text-decoration: none;
  color: white;
  float: right;
  transform: translateY(20%);
`

const Header = () => (
  <StyledHeader>
    <Inner className="container">
      <StyledLink to="/" style={{ fontSize: '1.3rem', margin: '0' }}>
        HN
      </StyledLink>
      {routes.map((route) => (
        <StyledLink to={route.path} key={route.name} exact={route.exact}>
          {route.name}
        </StyledLink>
      ))}
      <GithubIcon href="https://github.com/n2ptune/hackernews" target="_blank">
        Github
      </GithubIcon>
    </Inner>
  </StyledHeader>
)

export default Header
