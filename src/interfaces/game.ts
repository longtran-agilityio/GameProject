export interface IGame {
  id: number
  name: string
  prices: number
  released: string
  background_image: string
  description_raw: string
  genres: {
    name: string
  }[]
  platforms: {
    platform: {
      id: number
      slug: string
      name: string
    }
  }[]
  developers: {
    id: number
    name: string
    slug: string
  }[]
  publishers: {
    id: number
    name: string
  }[]
}

export interface ICartGame {
  userId: number
  cartGames: IGame[]
  id: number
}
