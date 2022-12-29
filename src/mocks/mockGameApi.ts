import { faker } from '@faker-js/faker'

export const games = [
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
