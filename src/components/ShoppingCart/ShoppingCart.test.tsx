// libs
import { render, screen } from '@webapp/utils/testUtils'

// component
import ShoppingCart from '.'

import { game } from '@webapp/mocks/mockGamesStore'

const onClick = jest.fn()
const ShoppingCartComponent = () =>
  render(<ShoppingCart onDelete={onClick} games={game} onOpen={onClick} onDeleteAll={onClick} />)

describe('Shopping Cart', () => {
  test('should matches snapshot', () => {
    const { container } = ShoppingCartComponent()
    expect(container).toMatchSnapshot()
  })

  test('should render correctly', () => {
    ShoppingCartComponent()
    expect(screen.getByText('Clear')).toBeInTheDocument()
  })
})
