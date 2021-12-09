import { makeAutoObservable } from "mobx";

class Subject {
  constructor(item) {
    this.id = item.id;
    this.name = item.name;
    this.hours = item.number_of_hours;
    this.code = item.code;
    makeAutoObservable(this);
  }

  setName(name) {
    this.name = name;
  }

  setHours(hours) {
    this.hours = hours;
  }

  setCode(code) {
    this.code = code;
  }
}

export default Subject;
