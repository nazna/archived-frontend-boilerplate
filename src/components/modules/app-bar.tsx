import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export function AppBar() {
  return (
    <Container>
      <div>{process.env.PROJECT_NAME}</div>
      <Link to="/">Home</Link>
      <Link to="/todo">Todo</Link>
      <Link to="/reddit">Reddit</Link>
    </Container>
  )
}

const Container = styled.nav`
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 800px;
  height: 64px;
  margin: 0 auto;
`
