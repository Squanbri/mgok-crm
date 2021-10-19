import {makeAutoObservable, observable, values} from "mobx";
import AuthService from "../API/AuthService";

class Auth {
    constructor() {
        this._isAuth = false
        this._errors = []
        makeAutoObservable(this)
    }

    setAuth(boolean) {
        this._isAuth = boolean
    }

    setError(string) {
        this._errors.push(string)
    }

    get isAuth() {
        return this._isAuth
    }

    get errors() {
        return this._errors
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
            const status = e.response.data.status

            if (status?.message === 'The provided credentials are incorrect') {
                this.setError('Неправильный логин или пароль')
            }
        }
    }

    async logout() {
        try {
            const token = localStorage.getItem('token')
            const res = await AuthService.logout(token)
        } catch (e) {
            console.log(e)
        } finally {
            localStorage.removeItem('token')
            this.setAuth(false)
        }
    }
}

export default Auth;