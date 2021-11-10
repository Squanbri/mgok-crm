import axios from "axios";
import Errors from "../store/errors";

export default class SpecialitiesService {
  static async fetchSpecialities() {
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/admin/specialities`, 
        config
      );
      return response.data;
    } catch (e) {
      this.setErrors(e.response); 
    }
  }

  static async fetchSpeciality(id) {
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/admin/specialities/${id}`,
        config
      );
      return response.data;
    } catch (e) {
      this.setErrors(e.response);
    }
  }

  static async postSpeciality(name, code) {
    const token = localStorage.getItem("token");

    const data = {
      name,
      fgos_code: code,
    };

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/admin/specialities`,
        data,
        config
      );
      return response.data;
    } catch (e) {
      this.setErrors(e.response);
    }
  }

  static async updateSpeciality(id, name, code, active) {
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
        `${process.env.REACT_APP_BACKEND_URL}/api/admin/specialities/${id}`,
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
      `${process.env.REACT_APP_BACKEND_URL}/api/admin/specialities/${id}`,
      config
    );
    return response.data;
  }

  static setErrors(response) {
    const collection = {
      name: "название специальности",
      "fgos code": "код специальности",
    };

    Errors.setErrors(response, collection);
  }
}
