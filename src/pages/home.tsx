// lib
import LinearProgress from '@mui/material/LinearProgress'
import InfiniteScroll from 'react-infinite-scroll-component'

// components
import CardGame from '@webapp/components/CardGame'
import { IGame } from '@webapp/interfaces/game'

// hooks
import { useGamesFetcher } from '@webapp/hooks/useGamesFetcher'

// constants
import { pathGame } from '@webapp/constants/path'

// context
import { useCart } from '@webapp/contexts/games/cartProvider'

// styled
import {
  StyledBox,
  StyledHeading,
  StyledTitle,
  StyledGameLists,
  StyledScroll,
  StyledGameItem,
} from '@webapp/pages/StyledPage/homePage'

const HomePage = () => {
  const { issues, isLoadingMore, isReachingEnd, handleLoadingMore } = useGamesFetcher(pathGame)
  const { addGame } = useCart()

  const handleAddGame = (game: IGame) => addGame(game)

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
