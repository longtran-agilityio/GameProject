// lib
import { Box, Typography, styled } from '@mui/material'
import { Link } from 'react-router-dom'

// theme
import { theme } from '@webapp/themes/index'

export const StyledHeader = styled('header')(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1,
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(2, 5),
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
}))

export const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: theme.spacing(256),
}))

export const StyledLink = styled(Link)({
  width: '25%',
  textDecoration: 'none',
})

export const StyledLogo = styled(Box)({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
})

export const StyledTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  paddingLeft: theme.spacing(0.8),
  fontWeight: 600,
}))

export const StyledProductCart = styled(Box)({
  display: 'flex',
})

export const StyledImage = styled('img')(({ theme }) => ({
  width: theme.spacing(2),
  height: theme.spacing(2),
}))
export const StyledProductAmount = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.text.secondary,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: theme.spacing(3),
  height: theme.spacing(3),
  borderRadius: '50%',
  color: theme.palette.background.default,
  marginLeft: theme.spacing(1),
}))

export const StyledSearch = styled(Box)({
  width: '30%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

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
  padding: theme.spacing(0.2, 2),
}

export const StyledUserName = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 600,
  padding: theme.spacing(0, 1),
  textTransform: 'capitalize',
}))

export const StyledUserCart = styled(Box)({
  display: 'flex',
  width: '25%',
  justifyContent: 'flex-end',
  alignItems: 'center',
})

export const StyledSearchIcon = {
  fontSize: theme.spacing(4),
  color: theme.palette.text.secondary,
  paddingLeft: theme.spacing(2),
}
