import { render } from '@redwoodjs/testing'

import PrebuiltCheckoutPage from './PrebuiltCheckoutPage'

describe('PrebuiltCheckoutPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PrebuiltCheckoutPage />)
    }).not.toThrow()
  })
})
