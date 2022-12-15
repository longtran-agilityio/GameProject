import { TextField, styled } from '@mui/material'

export const StyledInputBase = styled(TextField)(({ theme }) => ({
  width: '90%',
  '& .MuiInputBase-input': {
    borderRadius: theme.spacing(0.5),
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    border: 'none',
  },
  '& .MuiInputBase-input::placeholder': {
    opacity: 0.7,
    color: theme.palette.text.primary,
    fontSize: theme.typography.body1.fontSize,
  },
  '&:hover fieldset': {
    border: 'none',
  },
  '&.Mui-focused fieldset': {
    border: 'none',
  },
}))
