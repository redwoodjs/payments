import { render } from '@redwoodjs/testing'

import SuccessPage from './SuccessPage'

describe('SuccessPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SuccessPage />)
    }).not.toThrow()
  })
})
