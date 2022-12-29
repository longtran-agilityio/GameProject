import { render } from '@webapp/utils/testUtils'
import { faker } from '@faker-js/faker'

import Toggle from '.'

const ToggleProps = {
  pageUrl: faker.system.directoryPath(),
  title: faker.name.firstName(),
  labelToggle: [
    {
      currentUrl: faker.system.directoryPath(),
      label: faker.name.lastName(),
    },
  ],
}
const ToggleComponent = () =>
  render(
    <Toggle
      labelToggle={ToggleProps.labelToggle}
      pageUrl={ToggleProps.pageUrl}
      title={ToggleProps.title}
    />,
  )

describe('Toggle', () => {
  test('should matches snapshot', () => {
    const { container } = ToggleComponent()
    expect(container).toMatchSnapshot()
  })
  test('should render correctly', () => {
    const { getByText } = ToggleComponent()
    expect(getByText(ToggleProps.title)).toBeInTheDocument()
  })
})
