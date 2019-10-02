import React from 'react'
import styled from '@emotion/styled'
import { PageBody } from '../components/abstracts/page-body'
import { PageHeader } from '../components/abstracts/page-header'

export default function NotFound() {
  return (
    <React.Fragment>
      <PageHeader>NotFound</PageHeader>
      <PageBody>
        <Container>
          <Image src="/static/images/404.webp" />
          <Message>404</Message>
          <Copyright>
            Photo by <a href="https://unsplash.com/@miklevasilyev">Mikhail Vasilyev</a> on{' '}
            <a href="https://unsplash.com/">Unsplash</a>
          </Copyright>
        </Container>
      </PageBody>
    </React.Fragment>
  )
}

const Container = styled.div`
  position: relative;
`

const Image = styled.img`
  max-width: 100%;
`

const Message = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 0;
  margin: 0;
  font-size: 16rem;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`

const Copyright = styled.span`
  position: absolute;
  right: 24px;
  bottom: 24px;
  padding: 0;
  margin: 0;
  color: rgba(255, 255, 255, 0.8);
`
