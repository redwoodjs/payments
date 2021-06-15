import { render } from '@redwoodjs/testing'

import CancelPage from './CancelPage'

describe('CancelPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CancelPage />)
    }).not.toThrow()
  })
})
