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

        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/public/api/admin/users`, config)
        return response.data
    }

    static async fetchUser(id) {
        const token = localStorage.getItem('token')

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/public/api/admin/specialities/${id}`, config)
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
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/public/api/admin/users`, data, config)
            return response.data
        } catch (e) {
            this.setErrors(e.response.data.data)
        }
    }

    static setErrors(errors) {
        const collection = {
            'first name': 'имя',
            'last name': 'фамилия',
            'password': 'пароль',
            'phone': 'телефон',
            'position': 'должность',
        }
        
        Errors.setErrors(errors, collection)
    }
}