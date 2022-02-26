import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

describe('Home', () => {
  it('should be true', () => {
    expect(true).toBeTruthy()
  })

  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /documentation/i,
    })
    expect(heading).toBeInTheDocument()
  })
})
