import axios from "axios";

export default class AuthService {
    static async login(email, password) {
        const response = await axios.post(`http://jn.mgok.moscow/public/api/auth/login`, {
            email,
            password
        })
        return response.data
    }

    static async logout(token) {
        const response = await axios.delete('http://jn.mgok.moscow/public/api/auth/logout', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
    }
}