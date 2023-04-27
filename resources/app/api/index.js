import axios from 'axios'

const AXIOS = axios.create({
  baseURL: '/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
})
// eslint-disable-next-line no-undef
if (process.env.MIX_ENV !== 'local') {
  AXIOS.interceptors.request.use((config) => {
    config.headers['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`
    return config
  }, error => {
    return Promise.reject(error)
  })
}

export default AXIOS
