import { createGlobalStyle } from 'styled-components'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { AuthProvider } from 'lib/auth/auth'

const GlobalStyle = createGlobalStyle`
 :root {
  --background: #1b1a20;
  --on-background: #FFFFFF;
  --primary: #FF0E39;
  --on-primary: #FFFFFF; 
  --surface: #201f25;
  --on-surface: #FFFFFF;
 }
  html {
    background: var(--background);
  }
  html,
  body {
    position: relative;
    color: var(----on-background);
    padding: 0;
    margin: 0;
    font-family: Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }

  input {
    font-family: Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  button {
    background: var(--primary);
    color: var(--on-primary);
    border: none;
    border-radius: 3px;
    padding: 6px 12px;
    font-family: Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    &:hover {
      cursor: pointer;
    }
  }
`

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>My Next Site</title>
      </Head>
      <GlobalStyle />
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  )
}

export default MyApp
