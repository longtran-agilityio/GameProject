// lib
import { Typography } from '@mui/material'
import CancelIcon from '@mui/icons-material/Cancel'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import { generatePath } from 'react-router-dom'
// styles
import {
  StyledBox,
  StyledTotal,
  StyledPrice,
  StyledProductLists,
  StyledProductItem,
  StyledTitle,
  StyledProductItemPrice,
  StyledName,
  StyledLink,
} from './ShoppingCart.module'
import { StyledButton } from '@webapp/components/Button/Button.module'

import { PageUrls } from '@webapp/constants/pageUrl'

import { IGame } from '@webapp/interfaces/game'

interface IShoppingCart {
  games: IGame[]
  onDelete: (game: IGame) => void
  open: boolean
  onOpen: (close: boolean) => void
  onDeleteAll: () => void
}
const ShoppingCart = ({ games, onDelete, onDeleteAll, open, onOpen }: IShoppingCart) => {
  const total = games.reduce((result, item) => result + item.prices, 0)

  const handleOpen = () => {
    onOpen(!open)
  }
  const handleDeleteAllGame = () => {
    onDeleteAll()
  }

  return (
    <StyledBox>
      <StyledTotal>
        {games.length > 0 ? (
          <>
            <StyledTitle variant='h2'>{games.length} games</StyledTitle>
            <StyledButton size='medium' disableRipple onClick={handleDeleteAllGame}>
              Clear
            </StyledButton>
          </>
        ) : (
          <StyledTitle variant='h2'>No games added</StyledTitle>
        )}
      </StyledTotal>

      <StyledProductLists>
        {games.map((item) => (
          <StyledProductItem key={item.id}>
            <StyledLink
              to={generatePath(PageUrls.GAME_DETAIL, { id: item.id.toString() })}
              onClick={handleOpen}
            >
              <StyledName>{item.name}</StyledName>
            </StyledLink>
            <StyledProductItemPrice>
              <Typography>$ {item.prices}</Typography>
              <StyledButton
                size='small'
                endIcon={<CancelIcon />}
                disableRipple
                onClick={() => onDelete(item)}
              />
            </StyledProductItemPrice>
          </StyledProductItem>
        ))}
      </StyledProductLists>

      <StyledTotal>
        <StyledPrice variant='body1'>Total: ${total.toFixed(2)}</StyledPrice>
        <StyledButton size='large' endIcon={<ArrowRightAltIcon />} disableRipple>
          Checkout
        </StyledButton>
      </StyledTotal>
    </StyledBox>
  )
}

export default ShoppingCart
