import { makeAutoObservable, observable, values, runInAction } from "mobx";
import SpecialitiesAPI from "../../API/SpecialitiesService";
import Speciality from "./speciality";

class Specialities {
  constructor() {
    this.isLoading = true;
    this.speciality = null;
    this.specialities = observable.map();
    makeAutoObservable(this);
  }

  // SET
  setSpeciality(item) {
    const speciality = new Speciality(item);
    this.specialities.set(item.id, speciality);
  }

  setLoading(isLoading) {
    this.isLoading = isLoading;
  }

  // GET
  get list() {
    return values(this.specialities);
  }

  get isEmpty() {
    return this.specialities.size === 0;
  }

  // DELETE
  deleteSpeciality(id) {
    this.specialities.delete(id);
    SpecialitiesAPI.deleteSpeciality(id);
  }

  // FETCH ALL
  async fetchSpecialities() {
    this.setLoading(true);
    this.specialities.clear();
    const res = await SpecialitiesAPI.fetchSpecialities();

    res?.specialities?.forEach((item) => {
      this.setSpeciality(item);
    });

    this.setLoading(false);
  }

  // FETCH ONE
  async fetchSpeciality(id) {
    const res = await SpecialitiesAPI.fetchSpeciality(id);
    const speciality = res?.speciality
    runInAction(() => {
        this.speciality = speciality
    })
  }

  // ADD
  async addSpeciality(name, code) {
    const response = await SpecialitiesAPI.postSpeciality(name, code);
    if (response?.speciality) {
      const speciality = response.speciality;
      this.setSpeciality(speciality);
    }
  }

  // UPDATE
  async updateSpeciality(id, name, code, active) {
    const response = await SpecialitiesAPI.updateSpeciality(
      id,
      name,
      code,
      active
    );

    if (response?.speciality) {
      const speciality = this.specialities.get(id);
      speciality.setName(name);
      speciality.setCode(code);
      speciality.setActive(active);
    }
  }
}

export default Specialities;
