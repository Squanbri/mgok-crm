import {makeAutoObservable} from "mobx";
import AuthService from "../API/AuthService";

class Auth {
    isAuth = false

    setAuth(boolean) {
        this.isAuth = boolean
    }

    constructor() {
        makeAutoObservable(this)
    }

    async login(email, password) {
        try {
            const res = await AuthService.login(email, password)
            localStorage.setItem('token', res.data)
        } catch (e) {
            console.log(e)
        }
    }
}

export const auth = new Auth()