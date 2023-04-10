import axios from 'axios'

export default {
    login(user, resolve, reject) {
        axios.post("/api/auth/login", user)
        .then((data) => {
            resolve(data)
        })
        .catch((e) => {
            reject(e)
        });
    }
}
