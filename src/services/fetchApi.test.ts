// libs
import { faker } from '@faker-js/faker'
import { v4 as uuidv4 } from 'uuid'

// fetch api
import { getData, postData, putData } from '@webapp/services/fetchApi'
import { baseUrl } from '@webapp/constants/API'

const games = [
  {
    id: faker.datatype.number(),
    name: faker.name.firstName(),
    prices: faker.datatype.number(),
    released: faker.commerce.product(),
    background_image: faker.image.cats(),
    description_raw: faker.commerce.product(),
    genres: [
      {
        name: faker.name.firstName(),
      },
    ],
    developers: [
      {
        id: faker.datatype.number(),
        name: faker.name.firstName(),
        slug: faker.name.firstName(),
      },
    ],
    platforms: [
      {
        platform: {
          id: faker.datatype.number(),
          name: faker.name.firstName(),
          slug: faker.name.firstName(),
        },
      },
    ],
    publishers: [
      {
        id: faker.datatype.number(),
        name: faker.name.firstName(),
      },
    ],
  },
]

describe('Test fetch function', () => {
  test('get data', async () => {
    global.fetch = jest.fn().mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve(games),
      }),
    )
    const response = await getData(`${baseUrl}`, 'games')
    expect(games).toEqual(response)
    expect(fetch).toHaveBeenCalledTimes(1)
  })

  test('post data', async () => {
    global.fetch = jest.fn().mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve({ data: games }),
      }),
    )
    const response = await postData({ url: `${baseUrl}`, endpoint: 'carts', data: games })
    expect({ data: games }).toEqual(response)
  })

  test('delete data', async () => {
    global.fetch = jest.fn().mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve({ data: games }),
      }),
    )

    const response = await putData({
      url: `${baseUrl}`,
      endpoint: `carts/${faker.datatype.uuid()}`,
      data: games,
    })
    expect({ data: games }).toEqual(response)
  })
})
