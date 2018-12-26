import styled from '@emotion/styled'
import React from 'react'

const App: React.FunctionComponent = () => (
  <Logo xmlns="http://www.w3.org/2000/svg"
       width="200px" height="200px"
       viewBox="0 0 200 200">
    <circle cx="100" cy="100" r="40" fill="none" stroke="black" stroke-width="3" />
  </Logo>
)

export default App

const Logo = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
