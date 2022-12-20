// libs
import { render, screen } from '@webapp/utils/testUtils'

// component
import Header from '.'

const onClick = jest.fn()
const HeaderComponent = () => {
  return render(<Header authenticated={true} open={false} onOpen={onClick} />)
}

describe('Header', () => {
  test('should matches snapshot', () => {
    const { container } = HeaderComponent()
    expect(container).toMatchSnapshot()
  })

  test('should get correct value', () => {
    HeaderComponent()
    expect(screen.getByText('Game Store')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Search game')).toBeInTheDocument()
  })
})
