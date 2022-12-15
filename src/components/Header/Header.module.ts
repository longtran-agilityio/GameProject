import { Box, Typography, styled } from '@mui/material'
import { theme } from '@webapp/themes/index'
import { Link } from 'react-router-dom'

export const StyledHeader = styled('header')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1,
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(2, 5),
  boxSizing: 'border-box',
}))

export const StyledLink = styled(Link)({
  width: '15%',
})

export const StyledLogo = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
}))

export const StyledTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  paddingLeft: theme.spacing(0.8),
  fontWeight: 600,
}))

export const StyledProductCart = styled(Box)(({ theme }) => ({
  display: 'flex',
}))

export const StyledImage = styled('img')({})

export const StyledProductAmount = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.text.secondary,
  padding: theme.spacing(0.2, 0.8),
  borderRadius: '50%',
  color: theme.palette.background.default,
  marginLeft: theme.spacing(1),
}))

export const StyledSearch = styled(Box)(({ theme }) => ({
  width: '40%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))

export const StyledUser = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.text.primary,
  padding: theme.spacing(0, 2),
}))

export const StyledLogin = {
  padding: theme.spacing(0, 1),
  fontSize: theme.spacing(1.5),
}

export const StyledLogout = {
  backgroundColor: theme.palette.text.primary,
  color: theme.palette.background.default,
  padding: theme.spacing(0.2),
}

export const StyledUserName = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 600,
  padding: theme.spacing(0, 1),
  textTransform: 'capitalize',
}))

export const StyledUserCart = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '15%',
  justifyContent: 'space-between',
}))

export const StyledSearchIcon = {
  fontSize: theme.spacing(3),
  color: theme.palette.text.secondary,
  paddingLeft: theme.spacing(2),
}
