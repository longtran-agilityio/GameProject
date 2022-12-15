import { styled, Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link)({
  width: '75%',
})

export const StyledBox = styled(Box)(({ theme }) => ({
  width: theme.spacing(40),
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  backgroundColor: theme.palette.primary.dark,
  padding: theme.spacing(3),
}))

export const StyledTotal = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const StyledName = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}))

export const StyledProductLists = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flex: '1 1',
  padding: theme.spacing(2, 0),
  overflow: 'auto',
}))

export const StyledProductItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1.5),
}))

export const StyledProductItemPrice = styled(Box)(({ theme }) => ({
  display: 'flex',
}))

export const StyledPrice = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.text.secondary,
}))

export const StyledTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 900,
  color: theme.palette.text.primary,
}))
