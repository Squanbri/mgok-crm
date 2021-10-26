import {makeAutoObservable, observable, values} from "mobx";
import SpecialitiesAPI from "../API/SpecialitiesService";
import Speciality from "./speciality";
import DirectionsAPI from "../API/DirectionsService";
import Direction from "./direction";

class Store {
    constructor() {
        this._specialities = observable.map()
        this._directions = observable.map()
        makeAutoObservable(this)

        this.fetchSpecialities()
    }

    setSpeciality(item) {
        const speciality = new Speciality(item)
        this._specialities.set(item.id, speciality)
    }

    setDirection(item) {
        const direction = new Direction(item)
        this._directions.set(item.id, direction)
    }

    get specialities() {
        return values(this._specialities)
    }

    get directions() {
        return values(this._directions)
    }

    removeSpeciality(id) {
        this._specialities.forEach((speciality, index) => {
            if (speciality.id === parseInt(id)) {
                SpecialitiesAPI.deleteSpeciality(speciality.id)
                this._specialities.delete(speciality.id)
            }
        })
    }

    async fetchSpecialities() {
        const res = await SpecialitiesAPI.fetchSpecialities()

        res.data.forEach(item => {
            this.setSpeciality(item)
        })
    }

    async fetchDirections(id) {
        this._directions.clear()
        const res = await DirectionsAPI.fetchDirections(id)

        res.data.forEach(item => {
            this.setDirection(item)
        })
    }
}

export default Store;