import axios from './index'

export default {
  login(user, resolve, reject) {
    axios.post("/api/auth/login", user)
      .then((response) => {
        resolve(response)
      })
      .catch((e) => {
        reject(e)
      });
  },
  me(resolve, reject) {
    axios.post("api/auth/me")
      .then((response) => {
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
  }
}
