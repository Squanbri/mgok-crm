import { makeAutoObservable, observable, runInAction, values } from "mobx";
import ProfessionalsAPI from "../../API/ProfessionalsService";
import Professional from "./professional";

class Professionals {
  constructor() {
    this.isLoading = true;
    this.professional = null;
    this.professionals = observable.map();
    makeAutoObservable(this);
  }

  // SET
  setProfessional(item) {
    const professional = new Professional(item);
    this.professionals.set(item.id, professional);
  }

  setLoading(isLoading) {
    this.isLoading = isLoading;
  }

  // GET
  get list() {
    return values(this.professionals);
  }

  get isEmpty() {
    return this.professionals.size === 0;
  }

  // DELETE
  deleteProfessional(id) {
    this.professionals.delete(id);
    ProfessionalsAPI.deleteProfessional(id);
  }

  // FETCH ALL
  async fetchProfessionals(id) {
    this.professionals.clear();
    const res = await ProfessionalsAPI.fetchProfessionals(id);

    res?.professional_qualities?.forEach((item) => {
      this.setProfessional(item);
    });

    this.setLoading(false);
  }

  // FETCH ONE
  async fetchProfessional(id) {
    const res = await ProfessionalsAPI.fetchProfessional(id);
    const professional = res?.professional_quality
    runInAction(() => {
      this.professional = professional
    })
  }

  // ADD
  async addProfessional(name, hours, directionId) {
    const response = await ProfessionalsAPI.postProfessional(
      name,
      hours,
      directionId
    );
    if (response?.professional_quality) {
      const professional = response.professional_quality;
      this.setProfessional(professional);
    }
  }

  // UPDATE
  async updateProfessional(name, active, id) {
    const response = await ProfessionalsAPI.updateProfessional(
      name,
      active,
      id
    );

    if (response?.professional_qualities_professional) {
      const professional = this.professionals.get(id);
      professional.setName(name);
      professional.setActive(active);
    }
  }
}

export default Professionals;