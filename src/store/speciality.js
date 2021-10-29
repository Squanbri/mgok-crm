import {makeAutoObservable} from "mobx";

class Speciality {
    constructor(item) {
        this.id = item.id
        this.name = item.name
        this.code = item.fgos_code
        this.isActive = item.is_active
        makeAutoObservable(this)
    }

    setActive(bool) {
        this.isActive = bool
    }
}

export default Speciality