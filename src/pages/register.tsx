import { Box } from '@mui/material'
import Toggle from '@webapp/components/Toggle'
import RegisterForm from '@webapp/components/Form/RegisterForm'
import { PageUrls } from '@webapp/constants/pageUrl'
import { labelToggle } from '@webapp/mocks/mockLabelToggle'
import { IUserRegister } from '@webapp/interfaces/user'
import { useUserActions } from '@webapp/contexts/useAuth'
import { useNavigate } from 'react-router-dom'

const RegisterPage = () => {
  const { register, setError, error } = useUserActions()
  const navigate = useNavigate()
  const handleUserRegister = async (data: IUserRegister) => {
    try {
      await register(data)
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
          <Toggle pageUrl={PageUrls.REGISTER} labelToggle={labelToggle} title={'My Account'} />
          <RegisterForm handleRegister={handleUserRegister} error={error} />
        </Box>
      </Box>
    </Box>
  )
}

export default RegisterPage
