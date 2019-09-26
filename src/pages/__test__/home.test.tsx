import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Home from '../home'

describe('pages', () => {
  describe('home', () => {
    test('<Home />', () => {
      const rendered = render(
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      )
      expect(rendered).toBeTruthy()
    })
  })
})
