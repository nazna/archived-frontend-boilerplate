import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import NotFound from '../not-found'

describe('pages', () => {
  test('<NotFound />', () => {
    const rendered = render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    )
    expect(rendered).toBeTruthy()
  })
})
