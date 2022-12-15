// libs
import { ThemeProvider } from '@mui/material'
import { ComponentStory, ComponentMeta } from '@storybook/react'

// component
import CardGame from '.'
import { theme } from '@webapp/themes/index'

import { game } from '@webapp/mocks/mockGamesStore'

export default {
  title: 'Components/CardGame',
  component: CardGame,
} as ComponentMeta<typeof CardGame>

const Template: ComponentStory<typeof CardGame> = (args) => (
  <ThemeProvider theme={theme}>
    <CardGame {...args} />
  </ThemeProvider>
)

export const CardGameComponent = Template.bind({})

CardGameComponent.args = {
  game: game[0],
}
