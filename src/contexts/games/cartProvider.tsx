import { createContext, ReactNode, useCallback, useContext, useMemo } from 'react'
import { IGame } from '@webapp/interfaces/game'
import { ICartGame } from '@webapp/interfaces/game'
import { pathCarts } from '@webapp/constants/path'
import { cartsEndPoint } from '@webapp/constants/endpoint'
import { useAuth } from '@webapp/contexts/useAuth'
import useSWR from 'swr'
import { putData } from '@webapp/services/fetchApi'

interface ICartContext {
  cartsList: IGame[]
  addGame: (userId: number, cartGames: IGame[]) => Promise<void>
  removeGame: (userId: number, cartGames: IGame[]) => Promise<void>
  removeAllGame: (userId: number) => Promise<void>
}
const CartContext = createContext<ICartContext>({} as ICartContext)
const useCart = () => useContext(CartContext)

const CartProvider = ({ children }: { children: ReactNode }) => {
  const authenticated = useAuth()

  const { data, mutate } = useSWR<ICartGame>(
    authenticated ? `${pathCarts}/${cartsEndPoint(authenticated.user.id)}` : null,
  )
  const addGame = useCallback(
    async (userId: number, games: IGame[]) => {
      await putData({
        url: pathCarts,
        endpoint: cartsEndPoint(userId),
        data: { userId: userId, cartGames: games },
      })
      mutate(data)
    },
    [data],
  )

  const removeGame = useCallback(
    async (userId: number, games: IGame[]) => {
      await putData({
        url: pathCarts,
        endpoint: cartsEndPoint(userId),
        data: { userId: userId, cartGames: games },
      })
      mutate(data)
    },
    [data],
  )

  const removeAllGame = useCallback(
    async (userId: number) => {
      await putData({
        url: pathCarts,
        endpoint: cartsEndPoint(userId),
        data: { userId: userId, cartGames: [] },
      })
      mutate(data)
    },
    [data],
  )

  const userCart = useMemo(
    () => ({
      cartsList: data?.cartGames || [],
      addGame,
      removeGame,
      removeAllGame,
    }),
    [data?.cartGames, addGame, removeGame, removeAllGame],
  )

  return <CartContext.Provider value={userCart}>{children}</CartContext.Provider>
}

export { CartProvider, useCart }
