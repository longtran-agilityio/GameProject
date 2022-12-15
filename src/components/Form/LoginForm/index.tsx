// lib
import { useForm, Controller } from 'react-hook-form'

// components
import { StyledInputBase } from '@webapp/components/Input/Input.module'
import { StyledButton } from '@webapp/components/Button/Button.module'

// styles
import { StyledForm, StyledMessage, StylesSubmitBtn } from './LoginForm.module'

// interface
import { ILoginForm, IUserLogin } from '@webapp/interfaces/user'

// validation
import { EmailRequired, PasswordRequired } from '@webapp/helpers/validationForm'

const LoginForm = ({ handleLogin, error }: ILoginForm) => {
  const { control, handleSubmit } = useForm<IUserLogin>({ mode: 'onBlur' })

  const userLogin = (data: IUserLogin) => {
    handleLogin(data)
  }

  return (
    <StyledForm onSubmit={handleSubmit(userLogin)}>
      <Controller
        render={({ field, fieldState }) => (
          <StyledInputBase
            autoComplete={'off'}
            type='email'
            helperText={<StyledMessage>{fieldState.error?.message}</StyledMessage>}
            placeholder='Input email'
            {...field}
          />
        )}
        rules={EmailRequired}
        control={control}
        name='email'
      />

      <Controller
        render={({ field, fieldState }) => (
          <StyledInputBase
            autoComplete={'off'}
            type='password'
            helperText={<StyledMessage>{fieldState.error?.message}</StyledMessage>}
            placeholder='Input password'
            {...field}
          />
        )}
        rules={PasswordRequired}
        control={control}
        name='password'
      ></Controller>
      <StyledButton type='submit' sx={StylesSubmitBtn} variant='outlined'>
        Login
      </StyledButton>
      {error && <StyledMessage>{error}</StyledMessage>}
    </StyledForm>
  )
}

export default LoginForm
