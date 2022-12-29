import { ICartGame } from '@webapp/interfaces/game'

const fetchCart = async <T>(method: string, url: string, endpoint: string, data?: Partial<T>) => {
  const response = await fetch(`${url}/${endpoint}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  if (response.status === 404) {
    throw new Error('URL not found')
  }
  if (response.status === 400) {
    throw new Error('Bad request')
  }
  return response.json()
}

const postCart = <T>(url: string, endpoint: string, data: Partial<T>): Promise<ICartGame> =>
  fetchCart('POST', url, endpoint, data)

const putCart = <T>(url: string, endpoint: string, data: Partial<T>): Promise<ICartGame> =>
  fetchCart('PUT', url, endpoint, data)

export { postCart, putCart }
