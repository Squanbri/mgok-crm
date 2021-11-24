import axios from "axios";
import Errors from "../store/errors";

export default class AuthService {
    static async login(email, password) {
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/login`, {email, password})

            return response.data
        } catch (e) {
            this.setErrors(e.response);
        }
    }

    static async logout() {
        const token = localStorage.getItem('token')
        const response = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/auth/logout`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
    }

    static setErrors(response) {
        const collection = {
            password: 'пароль',
        }

        const errors = response?.data?.errors

        if (errors === undefined || errors.length === 0) {
            Errors.setError('Неправильный логин или пароль')
        } else {
            Errors.setErrors(response, collection)
        }
    }
}