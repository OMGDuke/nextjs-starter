import React, { ReactElement } from 'react'
import Head from 'next/head'

export default function Meta(): ReactElement {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
    </div>
  )
}
