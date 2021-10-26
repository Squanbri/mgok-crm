import axios from "axios";

export default class SpecialitiesService {
    static async fetchSpecialities() {
        const token = localStorage.getItem('token')
        const response = await axios.get(`http://jn.mgok.moscow/public/api/specialities`)
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
        const response = await axios.post(`http://jn.mgok.moscow/public/api/admin/specialities`, data, config)
        return response.data
    }

    static async updateSpeciality() {
        const token = localStorage.getItem('token')

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const response = await axios.get(`http://jn.mgok.moscow/public/api/specialities`, config)
        return response.data
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
}