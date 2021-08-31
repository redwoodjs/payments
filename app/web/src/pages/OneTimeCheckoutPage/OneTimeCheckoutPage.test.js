import { render } from '@redwoodjs/testing/web'

import OneTimeCheckoutPage from './OneTimeCheckoutPage'

describe('OneTimeCheckoutPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OneTimeCheckoutPage />)
    }).not.toThrow()
  })
})
