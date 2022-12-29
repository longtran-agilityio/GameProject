import { IAuthResponse } from '@webapp/interfaces/user'
const postUser = async <T>(
  url: string,
  endpoint: string,
  data: Partial<T>,
): Promise<IAuthResponse> => {
  const response = await fetch(`${url}/${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (response.status === 400) {
    throw new Error('Email or password not found')
  }

  return response.json()
}

export { postUser }
