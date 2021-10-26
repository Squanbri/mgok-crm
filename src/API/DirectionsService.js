import axios from "axios";

export default class DirectionsService {
    static async fetchDirections(id) {
        const token = localStorage.getItem('token')
        const response = await axios.get(`http://jn.mgok.moscow/public/api/specialities/${id}/directions`)
        return response.data
    }
}