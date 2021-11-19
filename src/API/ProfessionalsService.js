import axios from "axios";
import Errors from "../store/errors";

export default class ProfessionalsService {
  static async fetchProfessionals(id) {
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/admin/professional_qualities_groups/${id}/professional_qualities`,
        config
      );

      return response.data;
    } catch (e) {
      this.setErrors(e.response);
    }
  }

  static async fetchProfessional(id) {
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/admin/groups/${id}`,
        config
      );
      return response.data;
    } catch (e) {
      this.setErrors(e.response);
    }
  }

  static async postProfessional(name, hours, groupId) {
    const token = localStorage.getItem("token");

    const data = {
      name,
      number_of_hours: hours
    };

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/admin/professional_qualities_groups/${groupId}/professional_qualities`,
        data,
        config
      );
      return response.data;
    } catch (e) {
      this.setErrors(e.response);
    }
  }

  static async updateProfessional(name, active, directionId) {
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
