import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

interface PagenationProps {
  path: string
  page: number
}

const StyledPagenation = styled.div`
  background-color: white;
  text-align: center;
  margin: 0 auto;
  padding: 1.5rem 10px;
`

const Pagenation: React.FC<PagenationProps> = ({ page, path }) => {
  const [isLeft, setLeft] = useState(false)
  const [isRight, setRight] = useState(false)

  useEffect(() => {})

  return (
    <StyledPagenation className="container">
      {page}, {path}
    </StyledPagenation>
  )
}

export default Pagenation
