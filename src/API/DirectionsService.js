import axios from "axios";
import Errors from "../store/errors";

export default class DirectionsService {
    static async fetchDirections(id) {
        const response = await axios.get(`http://jn.mgok.moscow/public/api/specialities/${id}/directions`)
        return response.data
    }

    static async postDirection(name, code, specialityId) {
        const token = localStorage.getItem('token')

        const data = {
            name,
            fgos_code: code,
            is_active: false
        }

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        try {
            const response = await axios.post(`http://jn.mgok.moscow/public/api/admin/specialities/${specialityId}/directions`, data, config)
            return response.data
        } catch (e) {
            this.setErrors(e.response.data.data)
        }
    }

    static async updateDirection(id, name, code, active) {
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
            const response = await axios.put(`http://jn.mgok.moscow/public/api/admin/directions/${id}`, data, config)
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
        const response = await axios.delete(`http://jn.mgok.moscow/public/api/admin/directions/${id}`, config)
        return response.data
    }

    static setErrors(errors) {
        const errorFields = errors

        for(const errorField in errorFields) {
            const errors = errorFields[errorField]

            errors.forEach(error => {
                if (errorField === 'name') {
                    Errors.setError(error.replace('name', '"название квалификации"'))
                } else if (errorField === 'fgos_code') {
                    Errors.setError(error.replace('fgos code', '"код квалификации"'))
                }

            })
        }
    }
}