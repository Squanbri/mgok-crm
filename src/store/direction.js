import {makeAutoObservable} from "mobx";

class Direction {
    constructor(item) {
        this.id = item.id
        this.name = item.name
        this.code = item.fgos_code
        this.is_active = item.is_active
        makeAutoObservable(this)
    }

    setActive(bool) {
        this.is_active = bool
    }

    updateSpeciality() {

    }
}

export default Direction