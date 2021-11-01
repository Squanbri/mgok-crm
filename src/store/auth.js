import {makeAutoObservable} from "mobx";
import AuthService from "../API/AuthService";
import Errors from "./errors";

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
        try {
            const res = await AuthService.login(email, password)
            localStorage.setItem('token', res.data)
            this.setAuth(true)
        } catch (e) {
            const status = e.response?.data.status

            if (status?.message === 'The provided credentials are incorrect') {
                Errors.setError('Неправильный логин или пароль')
            }
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