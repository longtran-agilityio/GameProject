// libs
import { ThemeProvider } from '@mui/material'
import { ComponentStory, ComponentMeta } from '@storybook/react'

// component
import { StyledInputBase } from './Input.module'
import { theme } from '@webapp/themes/index'

export default {
  title: 'Components/Input',
  component: StyledInputBase,
} as ComponentMeta<typeof StyledInputBase>

const Template: ComponentStory<typeof StyledInputBase> = (args) => (
  <ThemeProvider theme={theme}>
    <StyledInputBase {...args} />
  </ThemeProvider>
)

export const searchInput = Template.bind({})
searchInput.args = {
  placeholder: 'Search game',
  type: 'search',
}

export const emailInput = Template.bind({})
emailInput.args = {
  placeholder: 'Input email',
  type: 'email',
}

export const passwordInput = Template.bind({})
passwordInput.args = {
  placeholder: 'Input password',
  type: 'password',
}
