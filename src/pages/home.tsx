// lib
import LinearProgress from '@mui/material/LinearProgress'
import InfiniteScroll from 'react-infinite-scroll-component'
import useSWRInfinite from 'swr/infinite'

// components
import CardGame from '@webapp/components/CardGame'
import { IGame } from '@webapp/interfaces/game'

// constants
import { pathGame } from '@webapp/constants/path'

// styled
import {
  StyledBox,
  StyledHeading,
  StyledTitle,
  StyledGameLists,
  StyledScroll,
  StyledGameItem,
} from '@webapp/pages/StyledPage/homePage'
import { useCart } from '@webapp/contexts/games/cartProvider'
import { useAuth } from '@webapp/contexts/useAuth'
const HomePage = () => {
  const { cartsList, addGame } = useCart()
  const userAuthentication = useAuth()
  const { data, error, size, setSize } = useSWRInfinite((index) => `${pathGame}&page=${index + 1}`)

  const newData = data?.map((game) =>
    game.results.map((item: IGame) => {
      return {
        ...item,
        prices: 50.11,
      }
    }),
  )
  const issues = newData ? (newData.flat() as IGame[]) : []
  const isLoadingInitialData = !newData && !error
  const isLoadingMore =
    isLoadingInitialData || (size > 0 && newData && typeof newData[size - 1] === 'undefined')
  const isEmpty = newData?.[0]?.length === 0
  const isReachingEnd = isEmpty || (newData && newData[newData.length - 1]?.length < 20)

  // loading more
  const handleLoadingMore = () => {
    setSize(size + 1)
  }

  const handleAddGame = (game: IGame) => {
    addGame(userAuthentication?.user.id as number, [...cartsList, game])
  }

  return (
    <StyledBox>
      <StyledHeading>
        <StyledTitle variant='caption'>Best of All Time</StyledTitle>
      </StyledHeading>
      <StyledGameLists>
        <InfiniteScroll
          next={handleLoadingMore}
          hasMore={!isReachingEnd || !isLoadingMore}
          loader={
            <StyledScroll>
              <LinearProgress sx={{ width: '1000px' }} color='secondary' />
            </StyledScroll>
          }
          dataLength={issues.length}
        >
          <StyledGameItem>
            {issues.map((item) => (
              <CardGame key={item.id} game={item} addGame={() => handleAddGame(item)} />
            ))}
          </StyledGameItem>
        </InfiniteScroll>
      </StyledGameLists>
    </StyledBox>
  )
}

export default HomePage
