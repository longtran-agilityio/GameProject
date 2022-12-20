// libs
import { Accordion, Box, Typography, AccordionSummary, AccordionDetails } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import DoneIcon from '@mui/icons-material/Done'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import LinearProgress from '@mui/material/LinearProgress'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import useSWR from 'swr'

// component
import { StyledButton } from '@webapp/components/Button/Button.module'

// theme
import { theme } from '@webapp/themes/index'

// endpoint
import { GameEndpoint } from '@webapp/constants/endpoint'

// styled
import {
  StyledDetailBox,
  StyledHeadingBox,
  StyledTitle,
  StyledBodyBox,
  StyledImage,
  StyledDescriptionBox,
  StyledInfoBox,
  StyledInfoTitle,
  StyledInfoDesc,
  StyledPricesBox,
  StyledPrice,
} from '@webapp/pages/StyledPage/detailPage'

import { PageUrls } from '@webapp/constants/pageUrl'

// interface
import { IGame } from '@webapp/interfaces/game'

// contexts
import { useCart } from '@webapp/contexts/games/cartProvider'
import { useAuth, useUserCart } from '@webapp/contexts/useAuth'

const DetailPage = () => {
  const { id } = useParams()
  const userAuthentication = useAuth()
  const idCart = useUserCart()
  const { cartsList, addGame } = useCart()
  const pathDetailGame = `${process.env.VITE_API_GAME_URL}/${GameEndpoint.GAMES}/${id}?key=${process.env.VITE_API_KEY}`
  const { data } = useSWR<IGame>(`${pathDetailGame}`)
  if (!data)
    return (
      <LinearProgress
        sx={{
          position: 'relative',
          width: '700px',
          top: '300px',
          margin: '0 auto',
        }}
        color='secondary'
      />
    )

  const game = { ...data, prices: 50.11 }
  const platforms = game?.platforms?.map((item) => item.platform.name).join(', ')
  const genres = game?.genres?.map(({ name }) => name).join(', ')
  const developers = game?.developers?.map(({ name }) => name).join(', ')
  const publishers = game?.publishers?.map(({ name }) => name).join(', ')
  const handleAddGame = () => {
    addGame(idCart?.id as number, [...cartsList, game])
  }

  const addGameBtnAuthentication = userAuthentication ? (
    <StyledButton
      onClick={handleAddGame}
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
    <StyledDetailBox>
      <Box
        sx={{
          padding: theme.spacing(10, 8, 0, 8),
        }}
      >
        <StyledHeadingBox>
          <Link to='/'>
            <StyledButton
              startIcon={<ArrowBackIcon />}
              disableRipple
              sx={{
                fontSize: '30px',
                '&:hover': {
                  color: '#92f',
                },
              }}
            >
              Store
            </StyledButton>
          </Link>
          <StyledTitle variant='caption'>{game?.name}</StyledTitle>
        </StyledHeadingBox>
        <StyledBodyBox>
          <StyledImage src={game?.background_image} alt='' />
          <StyledDescriptionBox>
            <Box>
              <StyledInfoBox>
                <StyledInfoTitle variant='h4'>About</StyledInfoTitle>
                <StyledInfoDesc>{game?.description_raw}</StyledInfoDesc>
              </StyledInfoBox>
              <Box>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: theme.palette.text.primary }} />}
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                  >
                    <Typography sx={{ color: theme.palette.text.secondary }}>
                      More information
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box sx={{ color: theme.palette.text.secondary, paddingBottom: '40px' }}>
                      <Typography>{game?.name}</Typography>
                      <Typography>Released: {game?.released}</Typography>
                      <Typography>
                        Platforms:
                        {platforms}
                      </Typography>
                      <Typography>Genres: {genres}</Typography>
                      <Typography>Developers: {developers}</Typography>
                      <Typography>Publishers: {publishers}</Typography>
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Box>
            <StyledPricesBox>
              <StyledPrice>$ {game?.prices}</StyledPrice>
              {cartsList.find((item) => item.id === game.id) ? (
                <StyledButton size='medium' endIcon={<DoneIcon />} disabled disableRipple>
                  Added
                </StyledButton>
              ) : (
                addGameBtnAuthentication
              )}
            </StyledPricesBox>
          </StyledDescriptionBox>
        </StyledBodyBox>
      </Box>
    </StyledDetailBox>
  )
}

export default DetailPage
