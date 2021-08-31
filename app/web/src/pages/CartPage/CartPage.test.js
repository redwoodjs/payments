import { render } from '@redwoodjs/testing/web'

import CartPage from './CartPage'

describe('CartPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CartPage />)
    }).not.toThrow()
  })
})
