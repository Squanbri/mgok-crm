import {makeAutoObservable} from "mobx";
import Specialities from "./specialities/specialities";
import Directions from "./directions/directions";
import Subjects from "./subjects/subjects";
import Users from "./users/users";

class Store {
    constructor() {
        this.specialities = new Specialities()
        this.directions = new Directions()
        this.subjects = new Subjects()
        this.users = new Users()
        makeAutoObservable(this)
    }
}

export default Store;