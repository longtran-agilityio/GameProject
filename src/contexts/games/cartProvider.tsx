// lib
import { createContext, ReactNode, useCallback, useContext, useMemo } from 'react'

// interface
import { IGame } from '@webapp/interfaces/game'

// constant
import { pathCarts } from '@webapp/constants/path'
import { cartsEndPoint } from '@webapp/utils/carts/pathCarts'

// context
import { useAuth } from '@webapp/contexts/useAuth'

// services
import { putCart } from '@webapp/services/cartAPI'

// utils
import { cartsFilter } from '@webapp/utils/carts/pathCarts'

// hooks
import { useCartsFetcher } from '@webapp/hooks/useCartsFetcher'

interface ICartContext {
  cartsList: IGame[]
  addGame: (games: IGame) => Promise<void>
  removeGame: (id: number) => Promise<void>
  removeAllGame: () => Promise<void>
}

const CartContext = createContext<ICartContext>({} as ICartContext)
const useCart = () => useContext(CartContext)

const CartProvider = ({ children }: { children: ReactNode }) => {
  const authenticated = useAuth()

  const { data, mutate, cartGame } = useCartsFetcher(
    authenticated ? `${pathCarts}/${cartsFilter(authenticated.user.id)}` : '',
  )

  const addGame = useCallback(
    async (game: IGame) => {
      if (cartGame) {
        await putCart(pathCarts, cartsEndPoint(cartGame.id), {
          userId: cartGame.userId,
          cartGames: [...cartGame.cartGames, game],
        })
      }
      mutate(data)
    },
    [data],
  )

  const removeGame = useCallback(
    async (id: number) => {
      const newGames = cartGame?.cartGames.filter((item) => item.id !== id)
      if (cartGame) {
        await putCart(pathCarts, cartsEndPoint(cartGame.id), {
          userId: cartGame.userId,
          cartGames: newGames,
        })
      }
      mutate(data)
    },
    [data],
  )

  const removeAllGame = useCallback(async () => {
    if (cartGame) {
      await putCart(pathCarts, cartsEndPoint(cartGame.id), {
        userId: cartGame.userId,
        cartGames: [],
      })
    }
    mutate(data)
  }, [data])

  const userCart = useMemo(
    () => ({
      cartsList: cartGame?.cartGames || [],
      addGame,
      removeGame,
      removeAllGame,
    }),
    [cartGame?.cartGames, addGame, removeGame, removeAllGame],
  )

  return <CartContext.Provider value={userCart}>{children}</CartContext.Provider>
}

export { CartProvider, useCart }
