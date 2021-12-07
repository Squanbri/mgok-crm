import {makeAutoObservable} from "mobx";

class Subject {
    constructor(item) {
        this.id = item.id
        this.name = item.name
        this.independentWorkHours = item.independent_work_number_of_hours
        this.theoreticalLearningHours = item.theoretical_learning_number_of_hours
        this.laboratoryWorkHours = item.laboratory_work_number_of_hours
        this.courseWorksHours = item.courseworks_number_of_hours
        this.minimalHours = item.minimal_number_of_hours
        this.practiceHours = item.practice_number_of_hours
        this.certificationHours = item.certification_number_of_hours
        this.certificationType = item.certification_type
        makeAutoObservable(this)
    }

    setName(name) {
      this.name = name
    }

    setIndependentWorkHours(hours) {
      this.independentWorkHours = hours
    }

    setTheoreticalLearningHours(hours) {
      this.theoreticalLearningHours = hours
    }

    setLaboratoryWorkHours(hours) {
      this.laboratoryWorkHours = hours
    }

    setCourseWorksHours(hours) {
      this.courseWorksHours = hours
    }

    setMinimalHours(hours) {
      this.minimalHours = hours
    }

    setPracticeHours(hours) {
      console.log(hours)
      this.practiceHours = hours
    }

    setCertificationHours(hours) {
      this.certificationHours = hours
    }

    setCertificationType(type) {
      this.certificationType = type
    }

    get allHours() {
      return this.independentWorkHours +
        this.theoreticalLearningHours + 
        this.laboratoryWorkHours +
        this.courseWorksHours +
        this.minimalHours +
        this.practiceHours +
        this.certificationHours
    }
  }

export default Subject