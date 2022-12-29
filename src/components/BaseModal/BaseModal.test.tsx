// lib
import { render } from '@webapp/utils/testUtils'
import { Box } from '@mui/material'
import { faker } from '@faker-js/faker'

// component
import BaseModal from '@webapp/components/BaseModal'

const onClose = jest.fn()
const name = faker.name.fullName()
const BaseModalProps = {
  isOpen: true,
  onClose: onClose,
  children: <Box>{name}</Box>,
}
const BaseModalComponent = () => render(<BaseModal {...BaseModalProps} />)

describe('Base Modal', () => {
  test('should matches snapshot', () => {
    const { container } = BaseModalComponent()
    expect(container).toMatchSnapshot()
  })

  test('should render correctly', () => {
    const { getByText } = BaseModalComponent()
    expect(getByText(name)).toBeInTheDocument()
  })
})
