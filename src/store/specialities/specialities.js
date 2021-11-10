import {makeAutoObservable, observable, values} from "mobx";
import SpecialitiesAPI from "../../API/SpecialitiesService";
import Speciality from "./speciality";

class Specialities {
    constructor() {
        this.isLoading = true;
        this.specialities = observable.map()
        makeAutoObservable(this)
    }

    // SET
    setSpeciality(item) {
        const speciality = new Speciality(item)
        this.specialities.set(item.id, speciality)
    }

    setLoading(isLoading) {
        this.isLoading = isLoading
    }

    // GET
    get list() {
        return values(this.specialities)
    }

    // DELETE
    deleteSpeciality(id) {
        this.specialities.delete(id)
        SpecialitiesAPI.deleteSpeciality(id)
    }

    // FETCH ALL
    async fetchSpecialities() {
        const res = await SpecialitiesAPI.fetchSpecialities()
        res?.data.forEach(item => {
            this.setSpeciality(item)
        })
        this.setLoading(false)
    }

    // FETCH ONE
    async fetchSpeciality(id) {
        const res = await SpecialitiesAPI.fetchSpeciality(id)
        this.speciality = new Speciality(res.data)
    }

    // ADD
    async addSpeciality(name, code) {
        const response = await SpecialitiesAPI.postSpeciality(name, code)
        if (response?.status.success) {
            const item = response.data
            this.setSpeciality(item)
        }
    }

    // UPDATE
    async updateSpeciality(id, name, code, active) {
        const response = await SpecialitiesAPI.updateSpeciality(id, name, code, active)


        if (response?.status.success) {
            const speciality = this.specialities.get(id)
            speciality.setName(name)
            speciality.setCode(code)
            speciality.setActive(active)
        }
    }
}

export default Specialities