import {makeAutoObservable} from "mobx";

class Professional {
    constructor(item) {
        this.id = item.id
        this.name = item.name
        this.qualities = item.number_of_professional_qualities
        this.hours = item.number_of_hours
        this.active = item.is_active
        makeAutoObservable(this)
    }

    setName(name) {
        this.name = name
    }

    setQualities(qualities) {
        this.qualities = qualities
    }

    setHours(hours) {
        this.hours = hours
    }

    setActive(active) {
        this.active = active
    }
}

export default Professional