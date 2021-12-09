import { makeAutoObservable } from "mobx";
import Specialities from "./specialities/specialities";
import Directions from "./directions/directions";
import Subjects from "./subjects/subjects";
import Groups from "./groups/groups";
import Users from "./users/users";
import Professionals from "./porfessionalQualities/proffesionals";
import ProfessionalSubjects from "./professionalSubjects/professionalSubjects";
import PersonalQualities from "./personalQualities/personalQualities";

class Store {
  constructor() {
    this.professionalSubjects = new ProfessionalSubjects();
    this.personalsQualities = new PersonalQualities();
    this.professionals = new Professionals();
    this.specialities = new Specialities();
    this.directions = new Directions();
    this.subjects = new Subjects();
    this.groups = new Groups();
    this.users = new Users();
    makeAutoObservable(this);
  }
}

export default Store;
