import {makeAutoObservable, observable, values} from "mobx";
import UsersAPI from "../../API/UsersService";
import User from "./user";

class Users {
    constructor() {
        this.isLoading = true;
        this.users = observable.map()
        makeAutoObservable(this)
    }

    // SET
    setUser(item) {
        const user = new User(item)
        this.users.set(item.id, user)
    }

    // GET
    get list() {
        return values(this.users)
    }

    // FETCH ALL
    async fetchUsers() {
        const res = await UsersAPI.fetchUsers()

        res.data.forEach(item => {
            this.setUser(item)
        })
    }

    // FETCH ONE
    async fetchUser(id) {
        const res = await UsersAPI.fetchUser(id)
        this.user = new Users(res.data)
    }

    // ADD
    async addUser(firstName, lastName, position, phone, email, password) {
        const response = await UsersAPI.postUser(firstName, lastName, position, phone, email, password)
        if (response?.status.success) {
            const item = response.data
            this.setUser(item)
        }
    }
}

export default Users