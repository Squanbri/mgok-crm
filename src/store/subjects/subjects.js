import { makeAutoObservable, observable, values } from "mobx";
import SubjectsAPI from "../../API/SubjectsService";
import Subject from "./subject";

class Subjects {
  constructor() {
    this.isLoading = true;
    this.subject = null;
    this.subjects = observable.map();
    makeAutoObservable(this);
  }

  // SET
  setSubject(item) {
    const subject = new Subject(item);
    this.subjects.set(item.id, subject);
  }

  setLoading(isLoading) {
    this.isLoading = isLoading;
  }

  // GET
  get list() {
    return values(this.subjects);
  }

  get isEmpty() {
    return this.subjects.size === 0;
  }

  // FETCH ALL
  async fetchSubjects() {
    this.subjects.clear();
    const res = await SubjectsAPI.fetchSubjects();

    res?.subjects?.forEach((item) => {
      this.setSubject(item);
    });

    this.setLoading(false);
  }

  // ADD
  async addSubject(name, code) {
    const response = await SubjectsAPI.postSubject(name, code);
    if (response?.subject) {
      const item = response.subject;
      this.setSubject(item);
    }
  }

  // UPDATE
  async updateSubject(id, name, code, active) {
    const response = await SubjectsAPI.updateSubject(id, name, code, active);

    if (response?.subject) {
      const subject = this.subjects.get(id);
      subject.setName(name);
      subject.setCode(code);
      subject.setActive(active);
    }
  }
}

export default Subjects;
