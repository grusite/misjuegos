import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { useUserStore } from '../../stores/user'
import { useApiStatusStore } from '../../stores/apiStatus'
import Debug from 'debug'

const debug = Debug('app:request')

const request = axios.create({
  baseURL: 'https://strapi.misjuegos.net' + '/v1',
  // timeout: 10000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

request.interceptors.response.use(undefined, function (err) {
  const userStore = useUserStore()

  if (err.status === 401) {
    userStore.userSignOut()
  }
  throw err
})

export default async function client(opts: AxiosRequestConfig) {
  const userStore = useUserStore()
  const apiStore = useApiStatusStore()

  if (userStore.isAuthenticated) {
    opts.headers = {
      ...opts.headers,
      Authorization: `Bearer ${userStore.token}`,
    }
  }
  try {
    debug('start', opts)
    apiStore.status = 'loading'
    const res = await request(opts)
    apiStore.status = 'success'
    debug('success', res.data)
    return res
  } catch (err) {
    const error = err as Error | AxiosError
    apiStore.status = 'error'

    if (axios.isAxiosError(error)) {
      debug('error', error.response ? error.response.request.response : error.message)
      apiStore.error = error.response ? JSON.parse(error.response.request.response) : error.message
    } else {
      debug('error', error.message)
      apiStore.error = error.message
    }
    throw err
  }
}
