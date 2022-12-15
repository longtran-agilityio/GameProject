// libs
import { ThemeProvider } from '@mui/material'
import { ComponentStory, ComponentMeta } from '@storybook/react'

// component
import LoginForm from '.'

// theme
import { theme } from '@webapp/themes/index'

export default {
  title: 'Components/LoginForm',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>
const handleLogin = () => {}
const Template: ComponentStory<typeof LoginForm> = (args) => (
  <ThemeProvider theme={theme}>
    <LoginForm {...args} />
  </ThemeProvider>
)

export const LoginFormComponent = Template.bind({})
LoginFormComponent.args = {
  handleLogin: handleLogin,
}
