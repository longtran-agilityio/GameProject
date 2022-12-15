import { GameEndpoint } from './endpoint'
export const pathGame = `${import.meta.env.VITE_API_GAME_URL}/${GameEndpoint.GAMES}?key=${
  import.meta.env.VITE_API_KEY
}`

export const pathCarts = `${import.meta.env.VITE_API_JSON_SERVER_URL}`
