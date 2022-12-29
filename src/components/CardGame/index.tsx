// lib
import AddIcon from '@mui/icons-material/Add'
import DoneIcon from '@mui/icons-material/Done'
import { Link, generatePath } from 'react-router-dom'
import { Box } from '@mui/material'

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

// constants
import { PageUrls } from '@webapp/constants/pageUrl'

// interface
import { IGame } from '@webapp/interfaces/game'

// context
import { useCart } from '@webapp/contexts/games/cartProvider'
import { useAuth } from '@webapp/contexts/useAuth'

interface ICardGame {
  game: IGame
  addGame: (game: IGame) => void
}
const CardGame = ({ game, addGame }: ICardGame) => {
  const { cartsList } = useCart()
  const handleAddToCart = () => addGame(game)

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
    <Link to={PageUrls.LOGIN} style={{ textDecoration: 'none' }}>
      <StyledButton size='medium' endIcon={<AddIcon />} disableRipple>
        Add to cart
      </StyledButton>
    </Link>
  )

  return (
    <StyledCardGame>
      <Link to={generatePath(PageUrls.GAME_DETAIL, { id: game.id.toString() })}>
        <Box sx={{ height: '200px' }}>
          <StyledImage src={game.background_image} alt={game.name} />
        </Box>
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
        <Link
          to={generatePath(PageUrls.GAME_DETAIL, { id: game.id.toString() })}
          style={{ textDecoration: 'none' }}
        >
          <StyledTitle>{game.name}</StyledTitle>
        </Link>
        <StyledReleased>Released: {game.released}</StyledReleased>
        <StyledGenres>Genres: {[game.genres.map(({ name }) => name)].join(',')}</StyledGenres>
      </StyledInfoCard>
    </StyledCardGame>
  )
}

export default CardGame
