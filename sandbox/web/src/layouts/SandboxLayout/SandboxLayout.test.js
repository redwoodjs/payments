import { render } from '@redwoodjs/testing'

import SandboxLayout from './SandboxLayout'

describe('SandboxLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SandboxLayout />)
    }).not.toThrow()
  })
})
