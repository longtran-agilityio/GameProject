// lib
import { lazy, Suspense } from 'react'
import { SWRConfig } from 'swr'
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import LinearProgress from '@mui/material/LinearProgress'

// component
import ErrorBoundary from '@webapp/components/ErrorBoundary'

// context
import { CartProvider } from '@webapp/contexts/games/cartProvider'

// constant
import { PageUrls } from '@webapp/constants/pageUrl'

// layout
import MainLayout from './layouts/index'

// fetcher
import { fetcher } from '@webapp/fetcher/fetcher'

// style
import { StyledScroll } from '@webapp/pages/StyledPage/homePage'
import { UserProvider } from '@webapp/contexts/useAuth'

// lazy load page
const HomePage = lazy(() => import('@webapp/pages/home'))
const LoginPage = lazy(() => import('@webapp/pages/login'))
const RegisterPage = lazy(() => import('@webapp/pages/register'))
const DetailPage = lazy(() => import('@webapp/pages/detail'))

const App = () => {
  return (
    <Suspense
      fallback={
        <StyledScroll>
          <LinearProgress sx={{ width: '1000px' }} color='secondary' />
        </StyledScroll>
      }
    >
      <SWRConfig
        value={{
          fetcher: fetcher,
        }}
      >
        <UserProvider>
          <CartProvider>
            <ErrorBoundary>
              <Box sx={{ width: '100%', margin: '0 auto' }}>
                <Routes>
                  <Route path={PageUrls.HOMEPAGE} element={<MainLayout />}>
                    <Route index element={<HomePage />}></Route>
                    <Route path={PageUrls.HOMEPAGE} element={<HomePage />}></Route>
                    <Route path={PageUrls.GAME_DETAIL} element={<DetailPage />}></Route>

                    <Route path={PageUrls.LOGIN} element={<LoginPage />}></Route>
                    <Route path={PageUrls.REGISTER} element={<RegisterPage />}></Route>
                  </Route>
                </Routes>
              </Box>
            </ErrorBoundary>
          </CartProvider>
        </UserProvider>
      </SWRConfig>
    </Suspense>
  )
}

export default App
