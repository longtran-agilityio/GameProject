export interface IUserLogin {
  email: string
  password: string
}

export interface IUserRegister extends IUserLogin {
  id: number
  firstName: string
  lastName: string
}

export interface ILoginForm {
  handleLogin: (data: IUserLogin) => void
  error: string
}

export interface IRegisterForm {
  handleRegister: (data: IUserRegister) => void
  error: string
}

export interface IUserAuthenticated extends IUserRegister {
  id: number
}

export interface IGetUser {
  accessToken: string
  user: IUserAuthenticated
}
