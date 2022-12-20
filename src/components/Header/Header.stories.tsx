// libs
import { ThemeProvider } from '@mui/material'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

// component
import Header from '.'
import { theme } from '@webapp/themes/index'

export default {
  title: 'Components/Header',
  component: Header,
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Header {...args} />
    </ThemeProvider>
  </BrowserRouter>
)

export const HeaderComponent = Template.bind({})
