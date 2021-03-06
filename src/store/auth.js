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

    // called once from app.js
    check() { 
        const token = localStorage.getItem('token')
        if (token !== null) this.setAuth(true)
    }

    async login(email, password) {
        const res = await AuthService.login(email, password)
        if (res?.token !== undefined) {
            localStorage.setItem('token', res.token)
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