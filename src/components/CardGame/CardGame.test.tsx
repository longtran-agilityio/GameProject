// libs
import { render, screen } from '@webapp/utils/testUtils'

// component
import CardGame from '.'

import { game } from '@webapp/mocks/mockGamesStore'

const onClick = jest.fn()
const CardGameComponent = () => render(<CardGame game={game[0]} addGame={onClick} />)

describe('CardGame', () => {
  test('should matches snapshot', () => {
    const { container } = CardGameComponent()
    expect(container).toMatchSnapshot()
  })

  test('should render correctly', () => {
    CardGameComponent()
    expect(screen.getByText(`$${game[0].prices}`)).toBeInTheDocument()
  })
})
