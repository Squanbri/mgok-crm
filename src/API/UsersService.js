import axios from "axios";
import Errors from "../store/errors";

export default class UsersService {
    static async fetchUsers() {
        const token = localStorage.getItem('token')

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const response = await axios.get(`http://jn.mgok.moscow/public/api/admin/users`, config)
        return response.data
    }

    static async fetchUser(id) {
        const token = localStorage.getItem('token')

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const response = await axios.get(`http://jn.mgok.moscow/public/api/admin/specialities/${id}`, config)
        return response.data
    }

    static async postUser(firstName, lastName, position, phone, email, password) {
        const token = localStorage.getItem('token')

        const data = {
            first_name: firstName,
            last_name: lastName,
            position,
            phone,
            email,
            password
        }

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        try {
            const response = await axios.post(`http://jn.mgok.moscow/public/api/admin/users`, data, config)
            return response.data
        } catch (e) {
            this.setErrors(e.response.data.data)
        }
    }

    static setErrors(errors) {
        const errorFields = errors

        for(const errorField in errorFields) {
            const errors = errorFields[errorField]

            errors.forEach(error => {
                if (errorField === 'first_name') {
                    Errors.setError(error.replace('first name', '"имя"'))
                } else if (errorField === 'last_name') {
                    Errors.setError(error.replace('last name', '"фамилия"'))
                } else if (errorField === 'password') {
                    Errors.setError(error.replace('password', '"пароль"'))
                } else if (errorField === 'phone') {
                    Errors.setError(error.replace('phone', '"телефон"'))
                } else if (errorField === 'position') {
                    Errors.setError(error.replace('position', '"должность"'))
                } else {
                    Errors.setError(error)
                }

            })
        }
    }
}