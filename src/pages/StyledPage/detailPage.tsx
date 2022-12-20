import { Box, Typography, styled } from '@mui/material'

export const StyledDetailBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  minHeight: '100vh',
  paddingBottom: theme.spacing(2),
}))

export const StyledHeadingBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBottom: theme.spacing(2),
}))

export const StyledTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: '900',
}))

export const StyledBodyBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
})

export const StyledImage = styled('img')(({ theme }) => ({
  width: '75%',
  height: '100%',
  minHeight: theme.spacing(60),
  maxHeight: theme.spacing(80),
  borderRadius: theme.spacing(2),
}))

export const StyledDescriptionBox = styled(Box)({
  width: '24%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const StyledInfoBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1, 2),
  borderTopLeftRadius: theme.spacing(1),
  borderTopRightRadius: theme.spacing(1),
  maxHeight: theme.spacing(20),
  backgroundColor: '#1a1a1a',
  overflow: 'auto',
}))

export const StyledInfoTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: '900',
  paddingBottom: '10px',
}))

export const StyledInfoDesc = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  boxShadow: theme.shadows[10],
}))

export const StyledPricesBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1, 2),
  borderRadius: theme.spacing(1),
}))

export const StyledPrice = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
}))
