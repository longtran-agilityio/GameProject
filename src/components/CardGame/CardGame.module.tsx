import { styled, Box, Typography } from '@mui/material'

export const StyledCardGame = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  backgroundColor: theme.palette.background.paper,
  width: theme.spacing(30),
}))

export const StyledInfoCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(1.5, 1.5, 3),
  color: theme.palette.text.secondary,
}))

export const StyledImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
}))

export const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
}))

export const StyledTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 900,
  fontSize: theme.spacing(1.8),
}))

export const StyledReleased = styled(Typography)(({ theme }) => ({
  fontSize: theme.spacing(1.3),
}))

export const StyledGenres = styled(Typography)(({ theme }) => ({
  fontSize: theme.spacing(1.3),
}))
