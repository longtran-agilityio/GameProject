// libs
import { styled, Button } from '@mui/material'

export const StyledButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  color: theme.palette.primary.main,
  textTransform: 'capitalize',
  fontWeight: 600,
  padding: theme.spacing(0),
  disableTransition: {
    transition: 'none',
  },
  minWidth: theme.spacing(0),
  '&:hover': {
    color: theme.palette.text.secondary,
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  '& .Mui-focusVisible': {
    backgroundColor: 'transparent',
  },
}))
