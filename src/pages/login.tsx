// lib
import { useNavigate } from 'react-router-dom'

// component
import Toggle from '@webapp/components/Toggle'
import LoginForm from '@webapp/components/Form/LoginForm'

// constant
import { PageUrls } from '@webapp/constants/pageUrl'

// mock
import { labelToggle } from '@webapp/mocks/mockLabelToggle'

// interface
import { ILoginInput } from '@webapp/interfaces/user'

// context
import { useAuthState } from '@webapp/contexts/useAuth'

// styled
import { StyledAccount, StyledBox } from '@webapp/pages/StyledPage/login.module'

const LoginPage = () => {
  const { login, setError, error } = useAuthState()
  const navigate = useNavigate()
  const handleUserLogin = async (data: ILoginInput) => {
    try {
      await login(data)
      navigate(PageUrls.HOMEPAGE)
    } catch (e) {
      setError((e as Error).message)
    }
  }
  return (
    <StyledAccount>
      <StyledBox>
        <Toggle pageUrl={PageUrls.LOGIN} labelToggle={labelToggle} title={'My Account'} />
        <LoginForm handleLogin={handleUserLogin} error={error} />
      </StyledBox>
    </StyledAccount>
  )
}

export default LoginPage
