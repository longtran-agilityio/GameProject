// service
import { postCart, putCart } from '@webapp/services/cartAPI'

// constant
import { baseUrl } from '@webapp/constants/api'

// mock
import { games } from '@webapp/mocks/mockGameApi'

const fetchGlobal = () =>
  (global.fetch = jest.fn().mockImplementationOnce(() =>
    Promise.resolve({
      json: () => Promise.resolve(games),
    }),
  ))

describe('Cart Api', () => {
  test('post cart', async () => {
    fetchGlobal()
    const response = await postCart(`${baseUrl}`, 'carts', games)
    expect(games).toEqual(response)
  })

  test('put cart', async () => {
    fetchGlobal()
    const response = await putCart(`${baseUrl}`, 'carts', games)
    expect(games).toEqual(response)
  })
})
