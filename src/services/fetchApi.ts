const fetchingData = async <T>(
  method: string,
  url: string,
  endpoint: string,
  data?: Partial<T>,
): Promise<T> => {
  const response = await fetch(`${url}/${endpoint}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (response.status === 400) {
    throw new Error('URL not found')
  }
  return response.json()
}

const getData = <T>(url: string, endpoint: string): Promise<T> => {
  return fetchingData('GET', url, endpoint)
}

const postData = <T>({
  url,
  endpoint,
  data,
}: {
  url: string
  endpoint: string
  data: Partial<T>
}): Promise<T> => {
  return fetchingData('POST', url, endpoint, data)
}

const putData = <T>({
  url,
  endpoint,
  data,
}: {
  url: string
  endpoint: string
  data: Partial<T>
}): Promise<T> => {
  return fetchingData('PUT', url, endpoint, data)
}

export { getData, postData, putData }
