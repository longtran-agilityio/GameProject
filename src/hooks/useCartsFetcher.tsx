// lib
import useSWR from 'swr'

// interface
import { ICartGame } from '@webapp/interfaces/game'

export const useCartsFetcher = (url: string) => {
  const { data, mutate } = useSWR<ICartGame[]>(`${url}`)
  const cartGame = data && data[0]

  return { data, mutate, cartGame }
}
