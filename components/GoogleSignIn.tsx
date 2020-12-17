import React, { ReactElement } from 'react'

import { signIn } from 'lib/auth/auth'

export default function GoogleSignIn(): ReactElement {
  return (
    <button type="button" onClick={signIn}>
      Sign in with Google
    </button>
  )
}
