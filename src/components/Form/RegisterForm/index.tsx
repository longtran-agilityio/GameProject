// lib
import { useForm, Controller } from 'react-hook-form'

// components
import { StyledInputBase } from '@webapp/components/Input/Input.module'
import { StyledButton } from '@webapp/components/Button/Button.module'

// styles
import {
  StyledForm,
  StyledMessage,
  StylesSubmitBtn,
} from '@webapp/components/Form/LoginForm/LoginForm.module'

// interface
import { IRegisterForm, IUserRegister } from '@webapp/interfaces/user'

// validation
import { EmailRequired, PasswordRequired, FieldEmpty } from '@webapp/helpers/validationForm'

const RegisterForm = ({ handleRegister, error }: IRegisterForm) => {
  const { control, handleSubmit } = useForm<IUserRegister>({ mode: 'onBlur' })

  const useRegister = (data: IUserRegister) => {
    handleRegister(data)
  }

  return (
    <StyledForm onSubmit={handleSubmit(useRegister)}>
      <Controller
        render={({ field, fieldState }) => (
          <StyledInputBase
            type='text'
            helperText={<StyledMessage>{fieldState.error?.message}</StyledMessage>}
            autoComplete={'off'}
            placeholder='Input First Name'
            {...field}
          />
        )}
        rules={FieldEmpty}
        control={control}
        name='firstName'
      />

      <Controller
        render={({ field, fieldState }) => (
          <StyledInputBase
            type='text'
            helperText={<StyledMessage>{fieldState.error?.message}</StyledMessage>}
            autoComplete={'off'}
            placeholder='Input Last Name'
            {...field}
          />
        )}
        rules={FieldEmpty}
        control={control}
        name='lastName'
      />

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
        Register
      </StyledButton>
      {error && <StyledMessage>{error}</StyledMessage>}
    </StyledForm>
  )
}

export default RegisterForm
