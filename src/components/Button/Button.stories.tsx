// libs
import { ThemeProvider } from '@mui/material'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import AddIcon from '@mui/icons-material/Add'
import DoneIcon from '@mui/icons-material/Done'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined'
import CancelIcon from '@mui/icons-material/Cancel'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'

// component
import { StyledButton } from './Button.module'
import { theme } from '@webapp/themes/index'

export default {
  title: 'Components/Button',
  component: StyledButton,
} as ComponentMeta<typeof StyledButton>

const Template: ComponentStory<typeof StyledButton> = (args) => (
  <ThemeProvider theme={theme}>
    <StyledButton {...args} />
  </ThemeProvider>
)

export const AddButton = Template.bind({})
AddButton.args = {
  children: 'Add to cart',
  size: 'small',
  endIcon: <AddIcon />,
  disableRipple: true,
}

export const CompletedButton = Template.bind({})
CompletedButton.args = {
  children: 'Added',
  size: 'small',
  endIcon: <DoneIcon />,
  disableRipple: true,
  disabled: true,
}

export const CartButton = Template.bind({})
CartButton.args = {
  children: 'Cart',
  size: 'small',
  startIcon: <LocalMallOutlinedIcon />,
  disableRipple: true,
}

export const ClearButton = Template.bind({})
ClearButton.args = {
  size: 'small',
  startIcon: <CancelIcon />,
  disableRipple: true,
}

export const CheckoutButton = Template.bind({})
CheckoutButton.args = {
  children: 'Checkout',
  size: 'small',
  endIcon: <ArrowRightAltIcon />,
  disableRipple: true,
}
