import {makeAutoObservable, observable} from "mobx";

class Errors {
    static errors = observable.array()

    constructor() {
        makeAutoObservable(this)
    }

    static setError(error) {
        if (this.errors.indexOf(error) === -1) {
            this.errors.push(error)

            setTimeout(() => this.errors.remove(error), 5000)
        }
    }

    static get isLength() {
        return this.errors.length > 0
    }
}

export default Errors