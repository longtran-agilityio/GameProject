// Lib
import { styled, Box } from '@mui/material'

export const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  top: '0',
  right: '0',
  bottom: '0',
  backgroundColor: theme.palette.background.paper,
}))
