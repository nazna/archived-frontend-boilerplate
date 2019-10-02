import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Todo from '../todo'

describe('pages', () => {
  test('<Todo />', () => {
    const rendered = render(
      <MemoryRouter>
        <Todo />
      </MemoryRouter>
    )
    expect(rendered).toBeTruthy()
  })
})
