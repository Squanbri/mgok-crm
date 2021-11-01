import axios from "axios";
import Errors from "../store/errors";

export default class AuthService {
    static async login(email, password) {
        try {
            const response = await axios.post(`http://jn.mgok.moscow/public/api/auth/login`, {email, password})
            return response.data
        } catch (e) {
            this.setErrors(e.response)
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

    static setErrors(errors) {
        const errorFields = errors?.data.data

        for(const errorField in errorFields) {
            const errors = errorFields[errorField]

            errors.forEach(error => {
                console.log(error)
                if (errorField === 'password') {
                    Errors.setError(error.replace('password ', '"пароль"'))
                } else {
                    Errors.setError(error)
                }

            })
        }
    }
}