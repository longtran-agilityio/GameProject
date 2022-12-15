import { IGame } from '@webapp/interfaces/game'

export const game: IGame[] = [
  {
    id: 3498,
    name: 'Grand Theft Auto V',
    prices: 50.12,
    released: '2013-09-17',
    background_image: 'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
    description_raw: '',
    genres: [
      {
        name: 'Action',
      },
      {
        name: 'Adventure',
      },
    ],
    developers: [
      {
        id: 3524,
        name: 'Rockstar North',
        slug: 'rockstar-north',
      },
      {
        id: 10,
        name: 'Rockstar Games',
        slug: 'rockstar-games',
      },
    ],
    platforms: [
      {
        platform: {
          id: 4,
          name: 'PC',
          slug: 'pc',
        },
      },
    ],
    publishers: [
      {
        id: 2155,
        name: 'Rockstar Games',
      },
    ],
  },
]
