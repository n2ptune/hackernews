import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

interface PagenationProps {
  path: string
  page: number
}

const StyledPagenation = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  text-align: center;
  margin: 0 auto;
  padding: 1.5rem 10px;
`

const Direction = styled.div`
  color: rgba(0, 0, 0, 0.6);
  font-size: 1.3rem;
  cursor: pointer;

  &:hover {
    color: rgb(0, 0, 0);
  }
`

const StyledTitle = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
`

const Pagenation: React.FC<PagenationProps> = ({ page, path }) => {
  const [isLeft, setLeft] = useState(false)
  const [isRight, setRight] = useState(false)
  const history = useHistory()

  useEffect(() => {
    if (page >= 10) {
      setRight(false)
      setLeft(true)
    } else if (page > 1) {
      setRight(true)
      setLeft(true)
    } else if (page <= 1) {
      setRight(true)
      setLeft(false)
    }
  }, [page, path])

  function handleLeftClick() {
    history.push(`/${path}/${page - 1}`)
  }

  function handleRightClick() {
    history.push(`/${path}/${page + 1}`)
  }

  return (
    <StyledPagenation className="container">
      <Direction onClick={handleLeftClick}>{isLeft ? '<' : ''}</Direction>
      <StyledTitle>{page}/10</StyledTitle>
      <Direction onClick={handleRightClick}>{isRight ? '>' : ''}</Direction>
    </StyledPagenation>
  )
}

export default Pagenation
