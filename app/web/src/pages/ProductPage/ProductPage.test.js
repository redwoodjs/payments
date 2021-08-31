import { render } from '@redwoodjs/testing/web'

import ProductPage from './ProductPage'

describe('ProductPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProductPage />)
    }).not.toThrow()
  })
})
