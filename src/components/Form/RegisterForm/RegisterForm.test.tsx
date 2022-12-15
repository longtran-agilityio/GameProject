// libs
import { render } from '@webapp/utils/testUtils'
import { faker } from '@faker-js/faker'
// component
import RegisterForm from '.'

import { IUserRegister } from '@webapp/interfaces/user'

const handleUserRegister = () => {
  const registerRequest: IUserRegister = {
    id: faker.datatype.number(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  }
  return registerRequest
}
const error = faker.datatype.string()
const RegisterFormComponent = () => {
  return render(<RegisterForm handleRegister={handleUserRegister} error={error} />)
}

describe('Register Form', () => {
  test('should matches snapshot', () => {
    const { container } = RegisterFormComponent()
    expect(container).toMatchSnapshot()
  })
  test('should show error when user login failed', () => {
    const { getByText } = RegisterFormComponent()
    expect(getByText(error)).toBeInTheDocument()
  })
})
