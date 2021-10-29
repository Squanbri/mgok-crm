import {makeAutoObservable, observable, values} from "mobx";
import SpecialitiesAPI from "../API/SpecialitiesService";
import DirectionsAPI from "../API/DirectionsService";
import Speciality from "./speciality";
import Direction from "./direction";

class Store {
    selectSpeciality

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

    setSelectSpeciality(item) {
        const speciality = new Speciality(item)
        this.selectSpeciality = speciality
    }

    get specialities() {
        return values(this._specialities)
    }

    get selectSpecialityName() {
        return this.selectSpeciality
    }

    get directions() {
        return values(this._directions)
    }

    deleteSpeciality(id) {
        this._specialities.delete(id)
        SpecialitiesAPI.deleteSpeciality(id)
    }

    deleteDirection(id) {
        this._directions.delete(id)
        DirectionsAPI.deleteSpeciality(id)
    }

    async fetchSpecialities() {
        const res = await SpecialitiesAPI.fetchSpecialities()

        res.data.forEach(item => {
            this.setSpeciality(item)
        })
    }

    async fetchSpeciality(id) {
        const res = await SpecialitiesAPI.fetchSpeciality(id)
        this.setSelectSpeciality(res.data)
    }

    async fetchDirections(id) {
        this._directions.clear()
        const res = await DirectionsAPI.fetchDirections(id)

        res.data.forEach(item => {
            this.setDirection(item)
        })
    }

    async addSpeciality(name, code) {
        const response = await SpecialitiesAPI.postSpeciality(name, code)
        if (response?.status.success) {
            const item = response.data
            this.setSpeciality(item)
        }
    }

    async addDirection(name, code, specialityId) {
        const response = await DirectionsAPI.postDirection(name, code, specialityId)
        if (response?.status.success) {
            const item = response.data
            this.setDirection(item)
        }
    }
}

export default Store;