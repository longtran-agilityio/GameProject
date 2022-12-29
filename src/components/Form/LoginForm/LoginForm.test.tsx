// libs
import { render } from '@webapp/utils/testUtils'
import { faker } from '@faker-js/faker'

// component
import LoginForm from './index'

// interface
import { IUserLogin } from '@webapp/interfaces/user'

const handleUserLogin = () => {
  const loginRequest: IUserLogin = {
    email: faker.internet.email(),
    password: faker.internet.password(),
  }
  return loginRequest
}
const error = faker.datatype.string()
const LoginFormComponent = () => render(<LoginForm handleLogin={handleUserLogin} error={error} />)

describe('LoginForm', () => {
  test('should matches snapshot', () => {
    const { container } = LoginFormComponent()
    expect(container).toMatchSnapshot()
  })
  test('should show error when user login failed', () => {
    const { getByText } = LoginFormComponent()
    expect(getByText(error)).toBeInTheDocument()
  })
})
