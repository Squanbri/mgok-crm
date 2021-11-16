import { makeAutoObservable, observable, values } from "mobx";
import DirectionsAPI from "../../API/DirectionsService";
import Direction from "./direction";

class Directions {
  constructor() {
    this.isLoading = true;
    this.directions = observable.map();
    makeAutoObservable(this);
  }

  // SET
  setDirection(item) {
    const direction = new Direction(item);
    this.directions.set(item.id, direction);
  }

  setLoading(isLoading) {
    this.isLoading = isLoading;
  }

  // GET
  get list() {
    return values(this.directions);
  }

  get isEmpty() {
    return this.directions.size === 0;
  }

  // DELETE
  deleteDirection(id) {
    this.directions.delete(id);
    DirectionsAPI.deleteSpeciality(id);
  }

  // FETCH ALL
  async fetchDirections(id) {
    this.directions.clear();
    const res = await DirectionsAPI.fetchDirections(id);

    res?.directions?.forEach((item) => {
    this.setDirection(item);
    });
    
    this.setLoading(false);
  }

  // ADD
  async addDirection(name, code, specialityId) {
    const response = await DirectionsAPI.postDirection(
      name,
      code,
      specialityId
    );
    if (response?.direction) {
      const direction = response.direction;
      this.setDirection(direction);
    }
  }

  // UPDATE
  async updateDirection(id, name, code, active) {
    const response = await DirectionsAPI.updateDirection(
      id,
      name,
      code,
      active
    );

    if (response?.direction) {
      const direction = this.directions.get(id);
      direction.setName(name);
      direction.setCode(code);
      direction.setActive(active);
    }
  }
}

export default Directions;
