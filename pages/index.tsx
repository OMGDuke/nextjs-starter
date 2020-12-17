import { ReactElement } from 'react'
import styled from 'styled-components'
import GoogleSignIn from '../components/GoogleSignIn'

import { signOut, useAuth } from '../lib/auth/auth'

import type { ExampleType } from '../types'

const exampleData: ExampleType = {
  title: 'My Next Project',
}

export default function Home(): ReactElement {
  const { user, userLoading } = useAuth()
  if (userLoading) {
    return <div>Loading</div>
  } else if (!user) {
    return <GoogleSignIn></GoogleSignIn>
  }
  return (
    <div>
      <Title>{exampleData.title}</Title>
      <div>{user.displayName}</div>
      <button type="button" onClick={signOut}>
        Sign out
      </button>
    </div>
  )
}

const Title = styled.h1`
  font-size: 50px;
`
