import axios from "axios";
import Errors from "../store/errors";

export default class GroupsService {
  static async fetchGroups(id) {
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/admin/directions/${id}/professional_qualities_groups`,
        config
      );

      return response.data;
    } catch (e) {
      this.setErrors(e.response);
    }
  }

  static async fetchGroup(id) {
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/admin/professional_qualities_groups/${id}`,
        config
      );
      return response.data;
    } catch (e) {
      this.setErrors(e.response);
    }
  }

  static async postGroup(name, directionId) {
    const token = localStorage.getItem("token");

    const data = {
      name,
    };

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/admin/directions/${directionId}/professional_qualities_groups`,
        data,
        config
      );
      return response.data;
    } catch (e) {
      this.setErrors(e.response);
    }
  }

  static async updateGroup(name, active, directionId) {
    const token = localStorage.getItem("token");

    const data = {
      name,
      is_active: active
    };

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/api/admin/professional_qualities_groups/${directionId}`,
        data,
        config
      );
      return response.data;
    } catch (e) {
      this.setErrors(e.response);
    }
  }

  static setErrors(response) {
    const collection = {
      name: "название квалификации",
      "fgos code": "код квалификации",
    };

    Errors.setErrors(response, collection);
  }
}
