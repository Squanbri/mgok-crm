import axios from "axios";

export default class SpecialitiesService {
    static async fetchSpecialities() {
        const token = localStorage.getItem('token')
        const response = await axios.get(`http://jn.mgok.moscow/public/api/specialities`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
    }

    static async updateSpeciality() {
        const token = localStorage.getItem('token')
        const response = await axios.get(`http://jn.mgok.moscow/public/api/specialities`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
    }
}