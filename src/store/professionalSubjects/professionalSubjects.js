import { makeAutoObservable, observable, runInAction, values } from "mobx";
import ProfessionalSubjectsAPI from "../../API/ProfessionalSubjectsService";
import Subject from "./professionalSubject";

class ProfessionalSubjects {
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
  async fetchSubjects(id) {
    this.subjects.clear();
    const res = await ProfessionalSubjectsAPI.fetchSubjects(id);

    res?.subjects?.forEach((item) => {
      this.setSubject(item);
    });

    this.setLoading(false);
  }

  // FETCH ONE
  async fetchSubject(id) {
    const res = await ProfessionalSubjectsAPI.fetchSubject(id);
    const subject = res?.subject_quality
    runInAction(() => {
      this.subject = subject
    })
  }

  // ADD
  async addSubject(
    profId,
    subjectId,
    independentWorkHours,
    theoreticalLearningHours,
    laboratoryWorkHours,
    courseWorksHours,
    minimalHours,
    practiceHours,
    certificationHours,
    certificationType
  ) {
    const response = await ProfessionalSubjectsAPI.postSubject(
      profId,
      subjectId || 0,
      independentWorkHours || 0,
      theoreticalLearningHours || 0,
      laboratoryWorkHours || 0,
      courseWorksHours || 0,
      minimalHours || 0,
      practiceHours || 0,
      certificationHours || 0,
      certificationType || 0
    );
    
    if (response?.subject) {
      const subject = response.subject;
      this.setSubject(subject);
    }
  }

  // UPDATE
  async updateSubject(name, active, id) {
    const response = await ProfessionalSubjectsAPI.updateSubject(
      name,
      active,
      id
    );

    if (response?.subject_qualities_subject) {
      const subject = this.subjects.get(id);
      subject.setName(name);
      subject.setActive(active);
    }
  }

  // DELETE
  deleteSubject(profId, subjectId) {
    this.subjects.delete(subjectId);
    ProfessionalSubjectsAPI.deleteSubject(profId, subjectId);
  }
}

export default ProfessionalSubjects;