import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Reddit from '../reddit'

describe('pages', () => {
  test('<Reddit />', () => {
    const rendered = render(
      <MemoryRouter>
        <Reddit />
      </MemoryRouter>
    )
    expect(rendered).toBeTruthy()
  })
})
