// lib
import { useState } from 'react'
import { lazy, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import LinearProgress from '@mui/material/LinearProgress'

// component
import Header from '@webapp/components/Header'
import BaseModal from '@webapp/components/BaseModal'

// context
import { useAuth } from '@webapp/contexts/useAuth'
import { useCart } from '@webapp/contexts/games/cartProvider'

// page
import { StyledScroll } from '@webapp/pages/StyledPage/homePage'

// lazy load page
const ShoppingCart = lazy(() => import('@webapp/components/ShoppingCart'))

const MainLayout = () => {
  const [open, setOpen] = useState(false)
  const { cartsList, removeGame, removeAllGame } = useCart()
  const userAuthentication = useAuth()

  const handleToggleModal = () => setOpen((prev) => !prev)

  const handleRemoveGame = (id: number) => removeGame(id)

  const handleRemoveAllGames = () => removeAllGame()

  return (
    <>
      <Header authenticated={!!userAuthentication} onOpen={handleToggleModal} />
      <Suspense
        fallback={
          <StyledScroll>
            <LinearProgress sx={{ width: '1000px' }} color='secondary' />
          </StyledScroll>
        }
      >
        <BaseModal isOpen={open} onClose={handleToggleModal}>
          <ShoppingCart
            games={cartsList}
            onDelete={handleRemoveGame}
            onOpen={handleToggleModal}
            onDeleteAll={handleRemoveAllGames}
          />
        </BaseModal>
      </Suspense>
      <Outlet />
    </>
  )
}

export default MainLayout
