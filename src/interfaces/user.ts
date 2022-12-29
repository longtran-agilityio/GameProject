export interface ILoginInput {
  email: string
  password: string
}

export interface IRegisterInput extends ILoginInput {
  firstName: string
  lastName: string
}

export interface ILoginForm {
  handleLogin: (data: ILoginInput) => void
  error: string
}

export interface IRegisterForm {
  handleRegister: (data: IRegisterInput) => void
  error: string
}

export interface IUser extends IRegisterInput {
  id: number
}

export interface IAuthResponse {
  accessToken: string
  user: IUser
}
