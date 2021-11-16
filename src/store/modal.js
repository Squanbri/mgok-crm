import { makeAutoObservable } from "mobx";

class Modal {
  constructor() {
    this.id = null;
    this.name = '';
    this.code = '';
    this.active = ''; // this active for mobx module (speciality.active etc...) 

    // users
    this.firstName = '';
    this.lastName = '';
    this.position = '';
    this.phone = '';
    this.email = '';
    this.password = '';

    this.isActiveUpdate = false;
    this.isActiveCreate = false;
    makeAutoObservable(this);
  }

  setId(id) {
    this.id = id;
  }

  setName(name) {
    this.name = name;
  }

  setCode(code) {
    this.code = code;
  }

  setActive(active) {
    this.active = active;
  }

  // users
  setFirstName(firstName) {
    this.firstName = firstName
  }

  setLastName(lastName) {
    this.lastName = lastName
  }

  setPosition(position) {
    this.position = position
  }

  setPhone(phone) {
    this.phone = phone
  }

  setEmail(email) {
    this.email = email
  }

  setPassword(password) {
    this.password = password
  }

  // modals
  setActiveCreate = (isActiveCreate) => {
    this.isActiveCreate = isActiveCreate;
  };

  setActiveUpdate = (isActiveUpdate) => {
    this.isActiveUpdate = isActiveUpdate;
  };

  get isActive() {
    return this.active === true;
  }
}

export default Modal;
