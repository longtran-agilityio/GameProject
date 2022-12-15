// Lib
import Modal from '@mui/material/Modal'
import { ReactNode } from 'react'

// Styles
import { StyledBox } from './BaseModal.module'

export interface IBaseModal {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

const BaseModal = ({ isOpen, onClose, children }: IBaseModal) => {
  return (
    <Modal disableAutoFocus open={isOpen} onClose={onClose}>
      <StyledBox>{children}</StyledBox>
    </Modal>
  )
}

export default BaseModal
