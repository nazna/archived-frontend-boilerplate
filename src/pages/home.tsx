import React from 'react'
import { useLocation } from 'react-router-dom'
import { PageBody } from '../components/abstracts/page-body'
import { PageHeader } from '../components/abstracts/page-header'

export default function Home() {
  const location = useLocation()

  return (
    <React.Fragment>
      <PageHeader>Home</PageHeader>
      <PageBody>Current location: {location.pathname}</PageBody>
    </React.Fragment>
  )
}
