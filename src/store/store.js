import {makeAutoObservable} from "mobx";
import Specialities from "./specialities";
import Directions from "./directions";
import Subjects from "./subjects";
import Users from "./users";

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