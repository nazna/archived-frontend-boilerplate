import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { PageBody } from '../components/abstracts/page-body'
import { PageHeader } from '../components/abstracts/page-header'

export default function Home(): JSX.Element {
  const location = useLocation()

  return (
    <React.Fragment>
      <PageHeader>Home</PageHeader>
      <PageBody>
        <div>Current location: {location.pathname}</div>
        <div>
          <Link to="/unknown">Go to unknown link</Link>
        </div>
      </PageBody>
    </React.Fragment>
  )
}
