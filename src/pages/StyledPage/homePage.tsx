import { Box, Typography, styled } from '@mui/material'

export const StyledBox = styled(Box)(({ theme }) => ({
  width: '100%',
  margin: '0 auto',
  backgroundColor: theme.palette.background.default,
  minHeight: '100vh',
  padding: theme.spacing(10, 0),
}))

export const StyledHeading = styled(Box)(({ theme }) => ({
  width: '65%',
  margin: '0 auto',
}))

export const StyledTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: '900',
}))

export const StyledGameLists = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(4),
  justifyContent: 'center',
  width: '70%',
  margin: '0 auto',
}))

export const StyledScroll = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  paddingTop: theme.spacing(4),
}))

export const StyledGameItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: theme.spacing(4),
  paddingTop: theme.spacing(2),
}))
