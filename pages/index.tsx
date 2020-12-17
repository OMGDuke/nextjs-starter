import { ReactElement } from 'react'
import styled from 'styled-components'

import type { ExampleType } from '../types'

const exampleData: ExampleType = {
  title: 'My Next Project',
}

export default function Home(): ReactElement {
  return <Title>{exampleData.title}</Title>
}

const Title = styled.h1`
  color: red;
  font-size: 50px;
`
