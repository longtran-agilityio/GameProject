// lib
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined'
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'
// components
import { StyledButton } from '@webapp/components/Button/Button.module'
import { StyledInputBase } from '@webapp/components/Input/Input.module'
// styles
import {
  StyledHeader,
  StyledLogo,
  StyledTitle,
  StyledImage,
  StyledProductCart,
  StyledProductAmount,
  StyledSearch,
  StyledUser,
  StyledLogin,
  StyledUserName,
  StyledUserCart,
  StyledLogout,
  StyledSearchIcon,
  StyledLink,
} from './Header.module'
import { Typography } from '@mui/material'
import { useUserActions, useAuth } from '@webapp/contexts/useAuth'
import { IGetUser } from '@webapp/interfaces/user'
import { Link } from 'react-router-dom'
import { PageUrls } from '@webapp/constants/pageUrl'
import { useCart } from '@webapp/contexts/games/cartProvider'

interface IHeader {
  authenticated: boolean
  open: boolean
  onOpen: (open: boolean) => void
}

const Header = ({ authenticated, open, onOpen }: IHeader) => {
  const { cartsList } = useCart()
  const { logout } = useUserActions()
  const { user } = (useAuth() as IGetUser) || {}
  const userName = `${user?.firstName} ${user?.lastName}`
  const handleLogout = () => {
    localStorage.clear()
    logout()
  }

  const handleOpen = () => {
    onOpen(!open)
  }
  return (
    <StyledHeader>
      <StyledLink to={PageUrls.HOMEPAGE}>
        <StyledLogo>
          <StyledImage alt='logo' src='/public/static/logo.svg' />
          <StyledTitle variant='h3'>Game Store</StyledTitle>
        </StyledLogo>
      </StyledLink>

      <StyledSearch>
        <StyledInputBase placeholder='Search game' type='search' />
        <SearchSharpIcon sx={StyledSearchIcon} />
      </StyledSearch>

      <StyledUserCart>
        {authenticated && (
          <StyledProductCart>
            <StyledButton
              onClick={handleOpen}
              size='large'
              startIcon={<LocalMallOutlinedIcon />}
              disableRipple
            >
              Cart
            </StyledButton>
            <StyledProductAmount>{cartsList?.length}</StyledProductAmount>
          </StyledProductCart>
        )}

        <StyledUser>
          <AccountCircleSharpIcon />
          {authenticated ? (
            <>
              <StyledUserName>{userName}</StyledUserName>
              <StyledButton onClick={handleLogout} variant='contained' sx={StyledLogout}>
                Logout
              </StyledButton>
            </>
          ) : (
            <>
              <Link to={PageUrls.LOGIN}>
                <StyledButton sx={StyledLogin}>LogIn</StyledButton>
              </Link>
              <Typography>|</Typography>
              <Link to={PageUrls.REGISTER}>
                <StyledButton sx={StyledLogin}>Register</StyledButton>
              </Link>
            </>
          )}
        </StyledUser>
      </StyledUserCart>
    </StyledHeader>
  )
}

export default Header
