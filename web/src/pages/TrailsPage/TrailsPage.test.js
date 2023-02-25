import { render } from '@redwoodjs/testing/web'

import TrailsPage from './TrailsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TrailsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TrailsPage />)
    }).not.toThrow()
  })
})
