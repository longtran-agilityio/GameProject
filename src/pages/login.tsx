import { Box } from '@mui/material'
import Toggle from '@webapp/components/Toggle'
import LoginForm from '@webapp/components/Form/LoginForm'
import { PageUrls } from '@webapp/constants/pageUrl'
import { labelToggle } from '@webapp/mocks/mockLabelToggle'
import { IUserLogin } from '@webapp/interfaces/user'
import { useUserActions } from '@webapp/contexts/useAuth'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const { login, setError, error } = useUserActions()
  const navigate = useNavigate()
  const handleUserLogin = async (data: IUserLogin) => {
    try {
      await login(data)
      navigate(PageUrls.HOMEPAGE)
    } catch (e) {
      setError((e as Error).message)
    }
  }
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          width: '1440px',
          justifyContent: 'space-evenly',
        }}
      >
        <Box
          sx={{
            minHeight: '600px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Toggle pageUrl={PageUrls.LOGIN} labelToggle={labelToggle} title={'My Account'} />
          <LoginForm handleLogin={handleUserLogin} error={error} />
        </Box>
      </Box>
    </Box>
  )
}

export default LoginPage
