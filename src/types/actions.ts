import { IGame } from '@webapp/interfaces/game'
type TAddGame = {
  id: number
  cardGame: IGame
  type: 'AddGame'
}

type TRemoveGame = {
  id: number
  type: 'RemoveGame'
}

type TClearGames = {
  type: 'ClearGames'
}

export type actions = TAddGame | TRemoveGame | TClearGames
