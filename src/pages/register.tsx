// lib
import { useNavigate } from 'react-router-dom'

// component
import Toggle from '@webapp/components/Toggle'
import RegisterForm from '@webapp/components/Form/RegisterForm'

// constant
import { PageUrls } from '@webapp/constants/pageUrl'

// mock
import { labelToggle } from '@webapp/mocks/mockLabelToggle'

// interface
import { IRegisterInput } from '@webapp/interfaces/user'

// context
import { useAuthState } from '@webapp/contexts/useAuth'

// styled
import { StyledAccount, StyledBox } from '@webapp/pages/StyledPage/login.module'

const RegisterPage = () => {
  const { register, setError, error } = useAuthState()
  const navigate = useNavigate()
  const handleUserRegister = async (data: IRegisterInput) => {
    try {
      await register(data)
      navigate(PageUrls.HOMEPAGE)
    } catch (e) {
      setError((e as Error).message)
    }
  }
  return (
    <StyledAccount>
      <StyledBox>
        <Toggle pageUrl={PageUrls.REGISTER} labelToggle={labelToggle} title={'My Account'} />
        <RegisterForm handleRegister={handleUserRegister} error={error} />
      </StyledBox>
    </StyledAccount>
  )
}

export default RegisterPage
