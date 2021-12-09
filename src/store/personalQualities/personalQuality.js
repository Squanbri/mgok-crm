import {makeAutoObservable, observable} from "mobx";
import Subject from "./subject";

class PersonalQuality {
    constructor(item) {
        this.id = item.id
        this.name = item.name
        this.hours = item.number_of_hours
        this.active = item.is_active
        this.subjects = observable.map()
        this.setSubjects(item.subjects)
        makeAutoObservable(this)
    }

    setName(name) {
        this.name = name
    }

    setHours(hours) {
        this.hours = hours
    }

    setActive(active) {
        this.active = active
    }

    setSubject(item) {
      const subject = new Subject(item)
      this.subjects.set(subject.id, subject)
    }

    setSubjects(subjects) {
      subjects?.forEach((subject) => {
        this.setSubject(subject);
      });
    }
}

export default PersonalQuality