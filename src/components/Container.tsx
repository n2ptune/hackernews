import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Pagenation from './list/Pagenation'

const StyledContainer = styled.div`
  background-color: white;
  border-radius: 8px;
`

const Wrapper = styled.div`
  margin-bottom: 3rem;
`

const Container: React.FC = ({ children }) => {
  // 현재 페이지
  const [page, setPage] = useState(1)
  const [path, setPath] = useState('')
  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname === '/') {
      setPath('news')
    } else {
      setPath(pathname.substr(1).replace(/\/+[0-9]/g, ''))
    }

    const match = pathname.match(/[0-9]+/g)

    if (!match) {
      setPage(1)
    } else {
      setPage(parseInt(match[0]) || 1)
    }
  }, [pathname])

  return (
    <Wrapper>
      <Pagenation page={page} path={path} />
      <StyledContainer className="container">{children}</StyledContainer>
      <Pagenation page={page} path={path} />
    </Wrapper>
  )
}

export default Container
