import axios from "axios";
import Errors from "../store/errors";

export default class personal_qualities {
  static async fetchQualities() {
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/admin/personal_qualities`, 
        config
      );
      return response.data;
    } catch (e) {
      this.setErrors(e.response); 
    }
  }

  static async fetchQuality(id) {
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/admin/personal_qualities/${id}`,
        config
      );
      return response.data;
    } catch (e) {
      this.setErrors(e.response);
    }
  }

  static async postQuality(name, subjects) {
    const token = localStorage.getItem("token");

    const data = {
      name,
      is_active: 1,
      subjects,
    };

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/admin/personal_qualities`,
        data,
        config
      );
      return response.data;
    } catch (e) {
      this.setErrors(e.response);
    }
  }

  static async updateQuality(id, name, code, active) {
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
        `${process.env.REACT_APP_BACKEND_URL}/api/admin/personal_qualities/${id}`,
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
      name: "название качества",
      "fgos code": "код специальности",
    };

    Errors.setErrors(response, collection);
  }
}
