import { render } from '@redwoodjs/testing'

import CustomPaymentFlowPage from './CustomPaymentFlowPage'

describe('CustomPaymentFlowPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CustomPaymentFlowPage />)
    }).not.toThrow()
  })
})
