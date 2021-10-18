import axios from "axios";

export default class AuthService {
    static async login(email, password) {
        const response = await axios.post(`http://jn.mgok.moscow/public/api/auth/login`, {
            email,
            password
        })
        return response.data
    }
}