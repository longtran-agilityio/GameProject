import { Link } from 'react-router-dom'
import { styled, Box, Typography } from '@mui/material'
import { theme } from '@webapp/themes/index'

export const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: theme.typography.h6.fontSize,
  padding: theme.spacing(1.5, 9),
  margin: theme.spacing(0, 1),
  borderRadius: theme.spacing(0.2),
  border: 'none',
  cursor: 'pointer',
  textDecoration: 'none',
  textTransform: 'capitalize',
}))

export const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: theme.palette.background.paper,
  width: theme.spacing(52),
  padding: theme.spacing(0.5, 0),
  borderRadius: theme.spacing(0.2),
}))

export const StyledToggle = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingBottom: theme.spacing(10),
}))

export const TitleAccount = styled(Typography)(({ theme }) => ({
  paddingBottom: theme.spacing(5),
  fontWeight: '600',
  fontSize: theme.typography.h2.fontSize,
}))

export const StyledLinkActive = {
  backgroundColor: theme.palette.primary.main,
}
