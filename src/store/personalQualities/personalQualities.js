import { makeAutoObservable, observable, runInAction, values } from "mobx";
import PersonalQualitiesAPI from "../../API/PersonalQualitiesService";
import PersonalQuality from "./personalQuality";

class PersonalQualities {
  constructor() {
    this.isLoading = true;
    this.quality = null;
    this.qualities = observable.map();
    makeAutoObservable(this);
  }

  // SET
  setQuality(item) {
    const quality = new PersonalQuality(item);
    this.qualities.set(item.id, quality);
  }

  setLoading(isLoading) {
    this.isLoading = isLoading;
  }

  // GET
  get list() {
    return values(this.qualities);
  }

  get isEmpty() {
    return this.qualities.size === 0;
  }

  // FETCH ALL
  async fetchQualities(id) {
    this.qualities.clear();
    const res = await PersonalQualitiesAPI.fetchQualities(id);

    res?.personal_qualities?.forEach((item) => {
      this.setQuality(item);
    });

    this.setLoading(false);
  }

  // ADD
  async addQuality(name, hours, directionId) {
    const response = await PersonalQualitiesAPI.postQuality(
      name,
      hours,
      directionId
    );
    if (response?.personal_qualities) {
      const quality = response.personal_qualities;
      this.setQuality(quality);
    }
  }

  // UPDATE
  async updateQuality(name, hours, active, id) {
    const response = await PersonalQualitiesAPI.updateQuality(
      name,
      hours,
      active,
      id
    );

    if (response?.personal_qualities) {
      const quality = this.qualities.get(id);
      quality.setName(name);
      quality.setHours(hours);
      quality.setActive(active);
    }
  }
}

export default PersonalQualities;