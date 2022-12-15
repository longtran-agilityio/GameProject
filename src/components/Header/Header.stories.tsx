// libs
import { ThemeProvider } from '@mui/material'
import { ComponentStory, ComponentMeta } from '@storybook/react'

// component
import Header from '.'
import { theme } from '@webapp/themes/index'

export default {
  title: 'Components/Header',
  component: Header,
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => (
  <ThemeProvider theme={theme}>
    <Header {...args} />
  </ThemeProvider>
)

export const HeaderComponent = Template.bind({})
