import { makeAutoObservable } from "mobx";

class Modal {
  constructor() {
    this.id = null;
    this.name = "";
    this.code = "";
    this.active = ""; // this active for mobx module (speciality.active etc...) 
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
