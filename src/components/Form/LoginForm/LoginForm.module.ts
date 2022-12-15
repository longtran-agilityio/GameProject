// lib
import { styled, Typography, Box } from '@mui/material'

// theme
import { theme } from '@webapp/themes/index'

export const StyledForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: theme.spacing(50),
}))

export const StyledMessage = styled(Typography)(({ theme }) => ({
  color: theme.palette.error.main,
  fontStyle: 'italic',
  fontSize: theme.spacing(1.5),
  paddingBottom: theme.spacing(2),
}))

export const StyledBox = styled(Box)(({ theme }) => ({
  width: '90%',
  paddingBottom: theme.spacing(3),
  paddingTop: theme.spacing(0.1),
}))

export const StylesSubmitBtn = {
  padding: theme.spacing(1.2, 22),
  fontSize: theme.typography.h6.fontSize,
  marginTop: theme.spacing(5),
  color: theme.palette.background.paper,
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.background.paper,
    boxShadow: 'none',
  },
  '& .Mui-focusVisible': {
    backgroundColor: theme.palette.background.paper,
  },
}
