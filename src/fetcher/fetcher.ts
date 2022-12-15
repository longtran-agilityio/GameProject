export const fetcher = async (url: string) => {
  try {
    return await fetch(url).then((res) => res.json())
  } catch (error) {
    throw (error as Error).message
  }
}
