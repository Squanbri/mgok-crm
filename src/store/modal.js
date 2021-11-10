import {makeAutoObservable} from "mobx";

class Modal {
    constructor() {
        this.id = undefined
        this.name = ''
        this.code = ''
        this.active = undefined
        this.isActiveCreate = false
        makeAutoObservable(this)
    }

    setId(id) {
        this.id = id
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

    setActiveCreate = (isActiveCreate) => {
        this.isActiveCreate = isActiveCreate
    }

    get isActive() {
        return this.active === true
    }
}

export default Modal