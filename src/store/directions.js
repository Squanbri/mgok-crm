import {makeAutoObservable, observable, values} from "mobx";
import Direction from "./direction";
import DirectionsAPI from "../API/DirectionsService";

class Directions {
    constructor() {
        this.isLoading = true;
        this.directions = observable.map()
        makeAutoObservable(this)
    }

    // SET
    setDirection(item) {
        const direction = new Direction(item)
        this.directions.set(item.id, direction)
    }

    // GET
    get list() {
        return values(this.directions)
    }

    // DELETE
    deleteDirection(id) {
        this.directions.delete(id)
        DirectionsAPI.deleteSpeciality(id)
    }

    // FETCH
    async fetchDirections(id) {
        this.directions.clear()
        const res = await DirectionsAPI.fetchDirections(id)

        res.data.forEach(item => {
            this.setDirection(item)
        })
    }

    // ADD
    async addDirection(name, code, specialityId) {
        const response = await DirectionsAPI.postDirection(name, code, specialityId)
        if (response?.status.success) {
            const item = response.data
            this.setDirection(item)
        }
    }

    // UPDATE
    async updateDirection(id, name, code, active) {
        const response = await DirectionsAPI.updateDirection(id, name, code, active)

        if (response?.status.success) {
            const direction = this.directions.get(id)
            direction.setName(name)
            direction.setCode(code)
            direction.setActive(active)
        }
    }
}

export default Directions