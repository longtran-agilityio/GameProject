import AddIcon from '@mui/icons-material/Add'
import DoneIcon from '@mui/icons-material/Done'
import { Link, generatePath } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
// component
import { StyledButton } from '@webapp/components/Button/Button.module'

// styles
import { StyledPrice } from '@webapp/components/ShoppingCart/ShoppingCart.module'
import {
  StyledCardGame,
  StyledImage,
  StyledBox,
  StyledTitle,
  StyledReleased,
  StyledGenres,
  StyledInfoCard,
} from './CardGame.module'

import { PageUrls } from '@webapp/constants/pageUrl'
import { IGame, IAddGame } from '@webapp/interfaces/game'
import { useCart } from '@webapp/contexts/games/cartProvider'
import { useAuth } from '@webapp/contexts/useAuth'
import { Box } from '@mui/material'
import { Suspense } from 'react'

interface ICardGame {
  game: IGame
  addGame: ({ id, cardGame }: IAddGame) => void
}
const CardGame = ({ game, addGame }: ICardGame) => {
  const { cartsList } = useCart()
  const handleAddToCart = () => {
    addGame({ id: game.id, cardGame: game })
  }
  const userAuthentication = useAuth()

  const addGameBtnAuthentication = userAuthentication ? (
    <StyledButton
      onClick={handleAddToCart}
      size='medium'
      endIcon={<AddIcon />}
      disableRipple
      sx={{
        '&:hover': {
          color: '#92f',
        },
      }}
    >
      Add to cart
    </StyledButton>
  ) : (
    <Link to={PageUrls.LOGIN}>
      <StyledButton size='medium' endIcon={<AddIcon />} disableRipple>
        Add to cart
      </StyledButton>
    </Link>
  )

  return (
    <StyledCardGame>
      <Link
        to={generatePath(PageUrls.GAME_DETAIL, { id: game.id.toString() })}
        aria-label={game.name}
      >
        <Suspense fallback={<Skeleton count={3} />}>
          <Box sx={{ height: '200px' }}>
            <picture>
              <source srcSet={game.background_image} media='min-width: 300px' />
              <source srcSet={game.background_image} media='min-width: 400px' />

              <StyledImage
                srcSet={`${game.background_image} 2x`}
                sizes='(max-width: 300px) 300px, (max-width: 300'
                src={game.background_image}
                alt={game.name}
              />
            </picture>
          </Box>
        </Suspense>
      </Link>

      <StyledInfoCard>
        <StyledBox>
          {cartsList?.find((item) => item.id === game.id) ? (
            <StyledButton size='medium' endIcon={<DoneIcon />} disabled disableRipple>
              Added
            </StyledButton>
          ) : (
            addGameBtnAuthentication
          )}
          <StyledPrice variant='body1'>${game.prices}</StyledPrice>
        </StyledBox>
        <Link to={generatePath(PageUrls.GAME_DETAIL, { id: game.id.toString() })}>
          <StyledTitle>{game.name}</StyledTitle>
        </Link>
        <StyledReleased>Released: {game.released}</StyledReleased>
        <StyledGenres>Genres: {[game.genres.map(({ name }) => name)].join(',')}</StyledGenres>
      </StyledInfoCard>
    </StyledCardGame>
  )
}

export default CardGame
