import { lazy, Suspense } from 'react'
import { PageUrls } from '@webapp/constants/pageUrl'
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import MainLayout from './layouts/index'
import { fetcher } from '@webapp/fetcher/fetcher'
import { SWRConfig } from 'swr'
import LinearProgress from '@mui/material/LinearProgress'
import { StyledScroll } from '@webapp/pages/StyledPage/homePage'
import { UserProvider } from '@webapp/contexts/useAuth'
import { CartProvider } from '@webapp/contexts/games/cartProvider'
// lazy load page
const LoginPage = lazy(() => import('@webapp/pages/login'))
const RegisterPage = lazy(() => import('@webapp/pages/register'))
const HomePage = lazy(() => import('@webapp/pages/home'))
const DetailPage = lazy(() => import('@webapp/pages/detail'))

const App = () => {
  return (
    <Suspense
      fallback={
        <StyledScroll>
          <LinearProgress sx={{ width: '1000px' }} color='secondary' role='progressbar' />
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
            <Box sx={{ width: '100%', margin: '0 auto' }}>
              <Routes>
                <Route path={PageUrls.HOMEPAGE} element={<MainLayout />}>
                  <Route index element={<HomePage />}></Route>
                  <Route path={PageUrls.GAME_DETAIL} element={<DetailPage />}></Route>
                  <Route path={PageUrls.HOMEPAGE} element={<HomePage />}></Route>

                  <Route path={PageUrls.LOGIN} element={<LoginPage />}></Route>
                  <Route path={PageUrls.REGISTER} element={<RegisterPage />}></Route>
                </Route>
              </Routes>
            </Box>
          </CartProvider>
        </UserProvider>
      </SWRConfig>
    </Suspense>
  )
}

export default App
