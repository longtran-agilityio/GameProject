import {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
  ReactNode,
  useMemo,
} from 'react'

// interface
import { ILoginInput, IRegisterInput, IAuthResponse } from '@webapp/interfaces/user'

// fetcher
import { postUser } from '@webapp/services/authAPI'
import { postCart } from '@webapp/services/cartAPI'

// constant
import { baseUrl } from '@webapp/constants/api'
import { GameEndpoint } from '@webapp/constants/endpoint'
import { pathCarts } from '@webapp/constants/path'
import { User } from '@webapp/constants/user'

interface IUserAccount {
  register: (value: IRegisterInput) => Promise<IAuthResponse>
  login: (value: ILoginInput) => Promise<IAuthResponse>
  logout: () => void
  setError: (error: string) => void
  error: string
}

const UserAuthentication = createContext<IAuthResponse | null>({} as IAuthResponse)
const AuthState = createContext<IUserAccount>({} as IUserAccount)

const useAuth = () => useContext(UserAuthentication)
const useAuthState = () => useContext(AuthState)

const UserProvider = ({ children }: { children: ReactNode }) => {
  const userStorage = localStorage.getItem(User.USER)
  const initValue = () => JSON.parse(userStorage || 'null')

  const [userAuthentication, setUserAuthentication] = useState<IAuthResponse | null>(initValue)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(userAuthentication))
  }, [userAuthentication])

  // login
  const login = useCallback(async (data: ILoginInput) => {
    const response = await postUser(`${baseUrl}`, User.LOGIN, data)
    setUserAuthentication(response as IAuthResponse)
    return response
  }, [])

  // register
  const register = useCallback(async (data: IRegisterInput) => {
    const response = await postUser(`${baseUrl}`, User.REGISTER, data)
    setUserAuthentication(response as IAuthResponse)
    await postCart(pathCarts, GameEndpoint.CARTS, {
      userId: response.user.id,
      cartGames: [],
    })
    return response
  }, [])

  // logout
  const logout = useCallback(() => {
    localStorage.clear()
    setUserAuthentication(null)
  }, [])

  const userController = useMemo(
    () => ({ login, register, logout, setError, error }),
    [login, register, logout, setError, error],
  )

  return (
    <AuthState.Provider value={userController}>
      <UserAuthentication.Provider value={userAuthentication}>
        {children}
      </UserAuthentication.Provider>
    </AuthState.Provider>
  )
}

export { UserProvider, useAuth, useAuthState }
