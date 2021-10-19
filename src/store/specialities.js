import {makeAutoObservable} from "mobx";
import AuthService from "../API/SpecialitiesService";

class Specialities {
    constructor() {
        makeAutoObservable(this)
    }
}

export default Specialities;