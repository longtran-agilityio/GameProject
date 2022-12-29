// lib
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined'
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

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
  StyledBox,
} from './Header.module'

// context
import { useAuthState, useAuth } from '@webapp/contexts/useAuth'
import { useCart } from '@webapp/contexts/games/cartProvider'

// interface
import { IAuthResponse } from '@webapp/interfaces/user'

// constants
import { PageUrls } from '@webapp/constants/pageUrl'

interface IHeader {
  authenticated: boolean
  onOpen: () => void
}

const Header = ({ authenticated, onOpen }: IHeader) => {
  const { cartsList } = useCart()
  const { logout } = useAuthState()
  const { user } = (useAuth() as IAuthResponse) || {}

  const userName = `${user?.firstName} ${user?.lastName}`
  const handleLogout = () => logout()
  const handleOpen = () => onOpen()

  return (
    <StyledHeader>
      <StyledBox>
        <StyledLink to={PageUrls.HOMEPAGE}>
          <StyledLogo>
            <StyledImage alt='logo' src='/logo.svg' />
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
                <Link to={PageUrls.LOGIN} style={{ textDecoration: 'none' }}>
                  <StyledButton sx={StyledLogin}>LogIn</StyledButton>
                </Link>
                <Typography>|</Typography>
                <Link to={PageUrls.REGISTER} style={{ textDecoration: 'none' }}>
                  <StyledButton sx={StyledLogin}>Register</StyledButton>
                </Link>
              </>
            )}
          </StyledUser>
        </StyledUserCart>
      </StyledBox>
    </StyledHeader>
  )
}

export default Header
