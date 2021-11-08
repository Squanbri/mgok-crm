import axios from "axios";
import Errors from "../store/errors";

export default class SpecialitiesService {
    static async fetchSpecialities() {
        const response = await axios.get(`http://jn.mgok.moscow/public/api/specialities`)
        return response.data
    }

    static async fetchSpeciality(id) {
        const token = localStorage.getItem('token')

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const response = await axios.get(`http://jn.mgok.moscow/public/api/admin/specialities/${id}`, config)
        return response.data
    }

    static async postSpeciality(name, code) {
        const token = localStorage.getItem('token')

        const data = {
            name,
            fgos_code: code
        }

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        try {
            const response = await axios.post(`http://jn.mgok.moscow/public/api/admin/specialities`, data, config)
            return response.data
        } catch (e) {
           this.setErrors(e.response.data.data)
        }
    }

    static async updateSpeciality(id, name, code, active) {
        const token = localStorage.getItem('token')

        const data = {
            name,
            fgos_code: code,
            is_active: active
        }

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        try {
            const response = await axios.put(`http://jn.mgok.moscow/public/api/admin/specialities/${id}`, data, config)
            return response.data
        } catch (e) {
            this.setErrors(e.response.data.data)
        }
    }

    static async deleteSpeciality(id) {
        const token = localStorage.getItem('token')

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const response = await axios.delete(`http://jn.mgok.moscow/public/api/admin/specialities/${id}`, config)
        return response.data
    }

    static setErrors(errors) {
        const collection = {
            name: 'название специальности',
            'fgos code': 'код специальности',
        }
        
        Errors.setErrors(errors, collection)
    }
}