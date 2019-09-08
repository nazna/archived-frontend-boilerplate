import React from 'react'
import { render } from '@testing-library/react'
import Home from '../home'

describe('pages', () => {
  describe('home', () => {
    test('<Home />', () => {
      const rendered = render(<Home />)
      expect(rendered).toBeTruthy()
    })
  })
})
