import {makeAutoObservable} from "mobx";

class Speciality {
    constructor(item) {
        this.id = item.id
        this.name = item.name
        this.code = item.fgos_code
        this.active = item.is_active
        makeAutoObservable(this)
    }

    setName(name) {
        this.name = name
    }

    setCode(code) {
        this.code = code
    }

    setActive(active) {
        this.active = active
    }
}

export default Speciality