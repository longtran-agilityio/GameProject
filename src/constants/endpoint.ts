export enum GameEndpoint {
  GAMES = 'games',
  CARTS = 'carts',
}

export const cartsEndPoint = (id: number) => {
  return `${GameEndpoint.CARTS}/${id}`
}
