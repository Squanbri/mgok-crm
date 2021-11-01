import {makeAutoObservable} from "mobx";

class User {
    constructor(item) {
        this.id = item.id
        this.firstName = item.first_name
        this.lastName = item.last_name
        this.phone = item.phone
        this.position = item.position
        this.email = item.email
        this.password = item.password
        makeAutoObservable(this)
    }

    setFirstName(firstName) {
        this.firstName = firstName
    }

    setLastName(lastName) {
        this.lastName = lastName
    }

    setPosition(position) {
        this.position = position
    }

    setEmail(email) {
        this.email = email
    }

    setPassword(password) {
        this.password = password
    }
}

export default User