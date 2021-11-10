import {makeAutoObservable} from "mobx";

class Subject {
    constructor(item) {
        this.id = item.id
        this.name = item.name
        this.code = item.code
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

export default Subject