import { render, fireEvent } from '@webapp/utils/testUtils'
import { faker } from '@faker-js/faker'

import { StyledButton } from './Button.module'

const onClick = jest.fn()
const ButtonProps = {
  children: faker.name.fullName(),
}
const ButtonComponent = () => {
  return render(<StyledButton onClick={onClick}>{ButtonProps.children}</StyledButton>)
}

describe('Button', () => {
  test('should matches snapshot', () => {
    const { container } = ButtonComponent()
    expect(container).toMatchSnapshot()
  })

  test('It should render correctly', () => {
    const { getByText } = ButtonComponent()
    expect(getByText(ButtonProps.children)).toBeInTheDocument()
  })

  test('On click function should be called once when click button', () => {
    const { getByText } = ButtonComponent()
    fireEvent.click(getByText(ButtonProps.children))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
  test('Button should be enabled', () => {
    const { getByText } = ButtonComponent()
    expect(getByText(ButtonProps.children)).toBeEnabled()
  })
})
