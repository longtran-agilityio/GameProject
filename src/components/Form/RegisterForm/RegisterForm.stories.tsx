// libs
import { ThemeProvider } from '@mui/material'
import { ComponentStory, ComponentMeta } from '@storybook/react'

// component
import RegisterForm from '.'

// theme
import { theme } from '@webapp/themes/index'

export default {
  title: 'Components/RegisterForm',
  component: RegisterForm,
} as ComponentMeta<typeof RegisterForm>

const Template: ComponentStory<typeof RegisterForm> = (args) => (
  <ThemeProvider theme={theme}>
    <RegisterForm {...args} />
  </ThemeProvider>
)

export const RegisterFormComponent = Template.bind({})
