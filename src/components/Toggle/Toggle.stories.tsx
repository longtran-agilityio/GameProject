// libs
import { ThemeProvider } from '@mui/material'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

// component
import Toggle from '.'

// theme
import { theme } from '@webapp/themes/index'

// mocks
import { labelToggle } from '@webapp/mocks/mockLabelToggle'

// constants
import { PageUrls } from '@webapp/constants/pageUrl'

export default {
  title: 'Components/Toggle',
  component: Toggle,
} as ComponentMeta<typeof Toggle>

const Template: ComponentStory<typeof Toggle> = (args) => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Toggle {...args} />
    </ThemeProvider>
  </BrowserRouter>
)

export const ToggleLogin = Template.bind({})
ToggleLogin.args = {
  title: 'Account',
  labelToggle: labelToggle,
  pageUrl: PageUrls.LOGIN,
}

export const ToggleRegister = Template.bind({})
ToggleRegister.args = {
  title: 'Account',
  labelToggle: labelToggle,
  pageUrl: PageUrls.REGISTER,
}
