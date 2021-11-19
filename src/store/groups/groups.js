import { makeAutoObservable, observable, runInAction, values } from "mobx";
import GroupsAPI from "../../API/GroupsService";
import Group from "./group";

class Groups {
  constructor() {
    this.isLoading = true;
    this.group = null;
    this.groups = observable.map();
    makeAutoObservable(this);
  }

  // SET
  setGroup(item) {
    const group = new Group(item);
    this.groups.set(item.id, group);
  }

  setLoading(isLoading) {
    this.isLoading = isLoading;
  }

  // GET
  get list() {
    return values(this.groups);
  }

  get isEmpty() {
    return this.groups.size === 0;
  }

  // DELETE
  deleteGroup(id) {
    this.groups.delete(id);
    GroupsAPI.deleteGroup(id);
  }

  // FETCH ALL
  async fetchGroups(id) {
    this.groups.clear();
    const res = await GroupsAPI.fetchGroups(id);

    res?.professional_qualities_groups?.forEach((item) => {
      this.setGroup(item);
    });

    this.setLoading(false);
  }

  // FETCH ONE
  async fetchGroup(id) {
    const res = await GroupsAPI.fetchGroup(id);
    const group = res?.professional_qualities_group
    runInAction(() => {
        this.group = group
    })
  }

  // ADD
  async addGroup(name, directionId) {
    console.log(name, directionId)
    const response = await GroupsAPI.postGroup(
      name,
      directionId
    );
    if (response?.professional_qualities_group) {
      const group = response.professional_qualities_group;
      this.setGroup(group);
    }
  }

  // UPDATE
  async updateGroup(name, active, id) {
    const response = await GroupsAPI.updateGroup(
      name,
      active,
      id
    );

    if (response?.professional_qualities_group) {
      const group = this.groups.get(id);
      group.setName(name);
      group.setActive(active);
    }
  }
}

export default Groups;