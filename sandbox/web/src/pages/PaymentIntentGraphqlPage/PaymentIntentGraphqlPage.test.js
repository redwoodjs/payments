import { render } from '@redwoodjs/testing'

import PaymentIntentGraphqlPage from './PaymentIntentGraphqlPage'

describe('PaymentIntentGraphqlPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PaymentIntentGraphqlPage />)
    }).not.toThrow()
  })
})
