import { GameEndpoint } from '@webapp/constants/endpoint'

export const cartsEndPoint = (id: number) => `${GameEndpoint.CARTS}/${id}`

export const cartsFilter = (id: number) => `${GameEndpoint.CARTS}?userId=${id}`
