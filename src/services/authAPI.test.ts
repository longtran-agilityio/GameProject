// lib
import { faker } from '@faker-js/faker'

// service
import { postUser } from '@webapp/services/authAPI'

// constant
import { baseUrl } from '@webapp/constants/api'

const user = {
  email: faker.internet.email(),
  password: faker.internet.password(),
}
describe('AuthAPI', () => {
  test('post user', async () => {
    global.fetch = jest.fn().mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve(user),
      }),
    )
    const response = await postUser(`${baseUrl}`, 'login', user)
    expect(user).toEqual(response)
  })
})
