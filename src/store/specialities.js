import {makeAutoObservable, observable} from "mobx";
import SpecialitiesAPI from "../API/SpecialitiesService";

class Specialities {
    constructor() {
        this._specialities = []
        makeAutoObservable(this)
        this.fetch()
    }

    setSpecs(specs) {
        this._specialities = specs
    }

    get specialities() {
        console.log(this._specialities)
        return this._specialities
    }

    async fetch() {
        const res = await SpecialitiesAPI.fetchSpecialities()
        this.setSpecs(res.data)
        console.log(this._specialities)
    }
}

export const specialities = new Specialities()