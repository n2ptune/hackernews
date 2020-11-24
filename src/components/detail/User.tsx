import React from 'react'
import { List } from 'react-content-loader'
import styled from 'styled-components'
import { User as UserType } from '../../api'
import { distanceDateFromNow } from '../../api/utils'
import { device } from '../../styles/responsive'

const LoadingWrapper = styled.div`
  background-color: white;
  margin: 0 auto;
  padding: 2rem 1rem;
`

const ContentWrapper = styled.div`
  padding: 2rem;
`

const StyledName = styled.div`
  color: var(--head-color);
  font-size: 1.4rem;
  font-weight: bold;

  @media ${device.laptop} {
    font-size: 2rem;
  }
`

const Item = {
  Wrapper: styled.ul`
    list-style: none;
    margin: 1rem 0;
    padding: 0;
  `,
  Label: styled.span`
    display: inline-block;
    min-width: 4rem;
  `,
  Value: styled.div`
    display: inline-block;
  `
}

interface UserComponentProps {
  user: UserType
}

const User: React.FC<UserComponentProps> = ({ user }) => {
  const list = [
    {
      label: 'Created: ',
      value: distanceDateFromNow(user.created_time as number, Date.now())
    },
    {
      label: 'Karma: ',
      value: user.karma
    }
  ]

  return (
    <ContentWrapper>
      <StyledName>{user.id}</StyledName>
      <Item.Wrapper>
        {list.map((item) => (
          <li key={item.label}>
            <Item.Label className="label">{item.label}</Item.Label>
            <Item.Value>{item.value}</Item.Value>
          </li>
        ))}
        {user.about && <p dangerouslySetInnerHTML={{ __html: user.about }} />}
      </Item.Wrapper>
    </ContentWrapper>
  )
}

export const UserLoading: React.FC = () => (
  <LoadingWrapper className="container">
    <List />
  </LoadingWrapper>
)

export default User
