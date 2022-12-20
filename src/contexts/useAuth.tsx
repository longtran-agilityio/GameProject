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
import { IUserLogin, IUserRegister, IGetUser, IUserCart } from '@webapp/interfaces/user'
import { postData } from '@webapp/services/fetchApi'
import { pathCarts } from '@webapp/constants/path'
import { baseUrl } from '@webapp/constants/API'
import { GameEndpoint } from '@webapp/constants/endpoint'

interface IUserAccount {
  register: (value: IUserRegister) => Promise<IUserRegister>
  login: (value: IUserLogin) => Promise<IUserLogin>
  logout: () => void
  setError: (error: string) => void
  error: string
}

const UserAuthentication = createContext<IGetUser | null>(null)
const UserCart = createContext<IUserCart | null>(null)
const UserActions = createContext<IUserAccount>({} as IUserAccount)

const useAuth = () => useContext(UserAuthentication)
const useUserCart = () => useContext(UserCart)
const useUserActions = () => useContext(UserActions)

const UserProvider = ({ children }: { children: ReactNode }) => {
  const userStorage = localStorage.getItem('user')
  const initValue = () => JSON.parse(userStorage || 'null')
  const userCarts = localStorage.getItem('userCarts')
  const carts = () => JSON.parse(userCarts || 'null')
  const [userAuthentication, setUserAuthentication] = useState<IGetUser | null>(initValue)
  const [userCart, setUserCart] = useState<IUserCart | null>(carts)
  const [error, setError] = useState<string>('')
  useEffect(() => {
    localStorage.setItem('userCarts', JSON.stringify(userCart))
    localStorage.setItem('user', JSON.stringify(userAuthentication))
  }, [userAuthentication, userCart])

  // login
  const login = useCallback(async (data: IUserLogin) => {
    const response = await postData({ url: `${baseUrl}`, endpoint: 'login', data })
    setUserAuthentication(response as unknown as IGetUser)
    return response as IUserLogin
  }, [])

  // register
  const register = useCallback(async (data: IUserRegister) => {
    const response = await postData({ url: `${baseUrl}`, endpoint: 'register', data })
    setUserAuthentication(response as unknown as IGetUser)
    const userCart = await postData({
      url: pathCarts,
      endpoint: GameEndpoint.CARTS,
      data: { userId: (response as unknown as IGetUser).user.id, cartGames: [] },
    })
    setUserCart(userCart as unknown as IUserCart)
    return response as IUserRegister
  }, [])

  // logout
  const logout = useCallback(() => {
    setUserAuthentication(null)
    setUserCart(null)
  }, [])

  const userController = useMemo(
    () => ({ login, register, logout, setError, error }),
    [login, register, logout, setError, error],
  )

  return (
    <UserActions.Provider value={userController}>
      <UserAuthentication.Provider value={userAuthentication}>
        <UserCart.Provider value={userCart}>{children}</UserCart.Provider>
      </UserAuthentication.Provider>
    </UserActions.Provider>
  )
}

export { UserProvider, useAuth, useUserActions, useUserCart }