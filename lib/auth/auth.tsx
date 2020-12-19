import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactElement,
} from 'react'
import nookies from 'nookies'
import firebase from 'firebase/app'
import { firebaseClient } from './firebaseClient'

const AuthContext = createContext<{
  user: firebaseClient.User | null
  userLoading: boolean
}>({
  user: null,
  userLoading: true,
})

export function AuthProvider({
  children,
}: {
  children: ReactElement
}): ReactElement {
  const [user, setUser] = useState<firebaseClient.User | null>(null)
  const [userLoading, setUserLoading] = useState(true)

  useEffect(() => {
    if (typeof window !== undefined) {
      const wind = window as any
      wind.nookies = nookies
    }
    return firebaseClient.auth().onIdTokenChanged(async (user) => {
      if (!user) {
        setUser(null)
        setUserLoading(false)
        nookies.destroy(null, 'token')
        nookies.set(null, 'token', '', { path: '/' })
        return
      }
      const token = await user.getIdToken()
      setUser(user)
      setUserLoading(false)
      nookies.destroy(null, 'token')
      nookies.set(null, 'token', token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
    })
  }, [])

  // force refresh the token every 10 minutes
  useEffect(() => {
    const handle = setInterval(async () => {
      const user = firebaseClient.auth().currentUser
      if (user) await user.getIdToken(true)
    }, 10 * 60 * 1000)
    return () => clearInterval(handle)
  }, [])

  return (
    <AuthContext.Provider value={{ user, userLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): {
  user: firebaseClient.User | null
  userLoading: boolean
} => {
  return useContext(AuthContext)
}

export const signIn = (): void => {
  const provider = new firebase.auth.GoogleAuthProvider()
  firebaseClient.auth().signInWithPopup(provider)
}

export const signOut = (): Promise<void> => firebaseClient.auth().signOut()
