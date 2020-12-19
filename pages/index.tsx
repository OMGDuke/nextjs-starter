import { ReactElement } from 'react'
import styled from 'styled-components'
import GoogleSignIn from 'components/GoogleSignIn'

import { signOut, useAuth } from 'lib/auth/auth'

import type { ExampleType } from 'types'

const exampleData: ExampleType = {
  title: 'My Next Project',
}

export default function Home(): ReactElement {
  const { user, userLoading } = useAuth()
  if (userLoading) {
    return <div>Loading</div>
  }
  if (!user) {
    return <GoogleSignIn />
  }
  return (
    <Container>
      <Title>{exampleData.title}</Title>
      <div>{user.displayName}</div>
      <button type="button" onClick={signOut}>
        Sign out
      </button>
    </Container>
  )
}

const Title = styled.h1`
  font-size: 50px;
`

const Container = styled.div`
  padding: 20px;
`
