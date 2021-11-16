import axios from "axios";
import Errors from "../store/errors";

export default class DirectionsService {
  static async fetchDirections(id) {
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/admin/specialities/${id}/directions`,
        config
      );

      return response.data;
    } catch (e) {
      this.setErrors(e.response);
    }
  }

  static async postDirection(name, code, specialityId) {
    const token = localStorage.getItem("token");

    const data = {
      name,
      fgos_code: code,
      is_active: false,
    };

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/admin/specialities/${specialityId}/directions`,
        data,
        config
      );
      return response.data;
    } catch (e) {
      this.setErrors(e.response);
    }
  }

  static async updateDirection(id, name, code, active) {
    const token = localStorage.getItem("token");

    const data = {
      name,
      fgos_code: code,
      is_active: active,
    };

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/api/admin/directions/${id}`,
        data,
        config
      );
      return response.data;
    } catch (e) {
      this.setErrors(e.response);
    }
  }

  static async deleteSpeciality(id) {
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.delete(
      `${process.env.REACT_APP_BACKEND_URL}/api/admin/directions/${id}`,
      config
    );
    return response.data;
  }

  static setErrors(response) {
    const collection = {
      name: "название квалификации",
      "fgos code": "код квалификации",
    };

    Errors.setErrors(response, collection);
  }
}
