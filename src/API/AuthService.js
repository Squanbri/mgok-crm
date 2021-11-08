import axios from "axios";
import Errors from "../store/errors";

export default class AuthService {
    static async login(email, password) {
        try {
            const response = await axios.post(`http://jn.mgok.moscow/public/api/auth/login`, {email, password})

            return response.data
        } catch (e) {
            this.setErrors(e.response.data);
        }
    }

    static async logout() {
        const token = localStorage.getItem('token')
        const response = await axios.delete('http://jn.mgok.moscow/public/api/auth/logout', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
    }

    static setErrors(data) {
        const collection = {
            password: 'пароль',
        }

        const errors = data?.data
        
        if (errors === undefined) {
            Errors.setError('Неправильный логин или пароль')
        } else {
            Errors.setErrors(errors, collection)
        }
    }
}