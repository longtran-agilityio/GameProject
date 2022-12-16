import { GameEndpoint } from './endpoint'
export const pathGame = `${process.env.VITE_API_GAME_URL}/${GameEndpoint.GAMES}?key=${process.env.VITE_API_KEY}`

export const pathCarts = `${process.env.VITE_API_JSON_SERVER_URL}`
