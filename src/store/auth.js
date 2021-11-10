import {makeAutoObservable} from "mobx";
import AuthService from "../API/AuthService";

class Auth {
    constructor() {
        this._isAuth = false
        makeAutoObservable(this)

        this.check()
    }

    setAuth(boolean) {
        this._isAuth = boolean
    }

    get isAuth() {
        return this._isAuth
    }

    check() { // called once from app.js
        const token = localStorage.getItem('token')
        if (token !== null) this.setAuth(true)
    }

    async login(email, password) {
        const res = await AuthService.login(email, password)
        if (res?.data !== undefined) {
            localStorage.setItem('token', res.data)
            this.setAuth(true)
        }
    }

    async logout() {
        try {
            await AuthService.logout()
        } catch (e) {
            console.log(e)
        } finally {
            localStorage.removeItem('token')
            this.setAuth(false)
        }
    }
}

export default Auth;