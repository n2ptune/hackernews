import React, { useEffect, useState } from 'react'
import { RouteComponentProps, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { getUserByName, User as UserType } from '../api'
import User, { UserLoading } from '../components/detail/User'

const Wrapper = styled.div`
  background-color: white;
  margin: 0 auto;
`

const UserComponent: React.FC<RouteComponentProps> = () => {
  const [user, setUser] = useState<UserType>({})
  const [loading, setLoading] = useState<boolean>(true)
  const { name } = useParams<{ name: string }>()

  useEffect(() => {
    async function fetchUser() {
      const userData = await getUserByName(name)
      setUser(userData)
      setLoading(false)
    }

    fetchUser()

    return () => setLoading(false)
  }, [name])

  return (
    <>
      {loading ? (
        <UserLoading />
      ) : (
        <Wrapper className="container">
          <User user={user} />
        </Wrapper>
      )}
    </>
  )
}

export default UserComponent
