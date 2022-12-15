import { render, screen } from '@webapp/utils/testUtils'
import { faker } from '@faker-js/faker'

import { StyledInputBase } from './Input.module'

const onChange = jest.fn()
const InputProps = {
  placeholder: faker.name.fullName(),
  value: faker.commerce.product(),
}
const InputComponent = () => {
  return render(
    <StyledInputBase
      placeholder={InputProps.placeholder}
      value={InputProps.value}
      type={'email'}
      onChange={onChange}
    />,
  )
}

describe('Input', () => {
  test('should matches snapshot', () => {
    const { container } = InputComponent()
    expect(container).toMatchSnapshot()
  })

  test('should be get placeholder', () => {
    const { getByPlaceholderText } = InputComponent()
    expect(getByPlaceholderText(InputProps.placeholder)).toBeInTheDocument()
  })

  test('should be get value', () => {
    InputComponent()
    const messageTextArea = screen.getByDisplayValue(InputProps.value)
    expect(messageTextArea).toBeInTheDocument()
  })
})
