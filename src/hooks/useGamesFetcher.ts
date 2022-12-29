// lib
import useSWRInfinite from 'swr/infinite'

// interface
import { IGame } from '@webapp/interfaces/game'

export const useGamesFetcher = (url: string) => {
  const { data, error, size, setSize } = useSWRInfinite((index) => `${url}&page=${index + 1}`)

  // add field prices for games
  const addField = (data: IGame[]) =>
    data.map((item) => {
      return { ...item, prices: 50.11 }
    })

  const newData = data?.map((game) => addField(game.results))
  const issues = newData ? (newData.flat() as IGame[]) : []
  const isLoadingInitialData = !newData && !error
  const isLoadingMore =
    isLoadingInitialData || (size > 0 && newData && typeof newData[size - 1] === 'undefined')
  const isEmpty = newData?.[0]?.length === 0
  const isReachingEnd = isEmpty || (newData && newData[newData.length - 1]?.length < 20)

  const handleLoadingMore = () => setSize(size + 1)

  return {
    issues,
    isLoadingMore,
    isReachingEnd,
    handleLoadingMore,
  }
}
