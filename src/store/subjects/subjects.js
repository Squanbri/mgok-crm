import {makeAutoObservable, observable, values} from "mobx";
import SubjectsAPI from "../../API/SubjectsService";
import Subject from "./subject";

class Subjects {
    constructor() {
        this.isLoading = true;
        this.subject = undefined
        this.subjects = observable.map()
        makeAutoObservable(this)
    }

    // SET
    setSubject(item) {
        const subject = new Subject(item)
        this.subjects.set(item.id, subject)
    }

    // GET
    get list() {
        return values(this.subjects)
    }

    // FETCH ALL
    async fetchSubjects() {
        const res = await SubjectsAPI.fetchSubjects()

        res?.data.forEach(item => {
            this.setSubject(item)
        })
    }

    // FETCH ONE
    async fetchSpeciality(id) {
        const res = await SubjectsAPI.fetchSubject(id)
        this.subject = new Subject(res.data)
    }

    // ADD
    async addSubject(name, code) {
        const response = await SubjectsAPI.postSubject(name, code)
        if (response?.status.success) {
            const item = response.data
            this.setSubject(item)
        }
    }

    // UPDATE
    async updateSubject(id, name, code, active) {
        const response = await SubjectsAPI.updateSubject(id, name, code, active)

        if (response?.status.success) {
            const subject = this.subjects.get(id)
            subject.setName(name)
            subject.setCode(code)
            subject.setActive(active)
        }
    }
}

export default  Subjects