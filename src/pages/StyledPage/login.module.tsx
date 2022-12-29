import { Box, styled } from '@mui/material'

export const StyledAccount = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  height: '100vh',
})

export const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: theme.spacing(60),
}))
