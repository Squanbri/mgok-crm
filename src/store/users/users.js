import { makeAutoObservable, observable, values } from "mobx";
import UsersAPI from "../../API/UsersService";
import User from "./user";

class Users {
  constructor() {
    this.isLoading = true;
    this.users = observable.map();
    makeAutoObservable(this);
  }

  // SET
  setUser(item) {
    const user = new User(item);
    this.users.set(item.id, user);
  }

  setLoading(isLoading) {
    this.isLoading = isLoading;
  }

  // GET
  get list() {
    return values(this.users);
  }

  get isEmpty() {
    return this.users.size === 0;
  }

  // FETCH ALL
  async fetchUsers() {
    this.users.clear();
    const res = await UsersAPI.fetchUsers();

    res?.users?.forEach((item) => {
      this.setUser(item);
    });

    this.setLoading(false);
  }

  // ADD
  async addUser(firstName, lastName, position, phone, email, password) {
    const response = await UsersAPI.postUser(
      firstName,
      lastName,
      position,
      phone,
      email,
      password
    );
    if (response?.user) {
      const item = response.user;
      this.setUser(item);
    }
  }
}

export default Users;
