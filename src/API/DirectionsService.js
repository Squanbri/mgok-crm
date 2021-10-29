import axios from "axios";

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
        const response = await axios.post(`http://jn.mgok.moscow/public/api/admin/specialities/${specialityId}/directions`, data, config)
        return response.data
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
}