import { render } from '@redwoodjs/testing/web'

import SubscriptionCheckoutPage from './SubscriptionCheckoutPage'

describe('SubscriptionCheckoutPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SubscriptionCheckoutPage />)
    }).not.toThrow()
  })
})
