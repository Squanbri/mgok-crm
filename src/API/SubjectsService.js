import axios from "axios";
import Errors from "../store/errors";

export default class SubjectsService {
  static async fetchSubjects() {
    try {
      const token = localStorage.getItem("token");

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/admin/subjects`,
        config
      );

      return response.data;
    } catch(e) {
      this.setErrors(e.response); 
    }
  }

  static async fetchSubject(id) {
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/admin/subjects/${id}`,
      config
    );
    return response.data;
  }

  static async postSubject(name, code) {
    const token = localStorage.getItem("token");

    const data = {
      name,
      code,
    };

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/admin/subjects`,
        data,
        config
      );
      return response.data;
    } catch (e) {
      this.setErrors(e.response.data.data);
    }
  }

  static async updateSubject(id, name, code, active) {
    const token = localStorage.getItem("token");

    const data = {
      name,
      code,
      is_active: active,
    };

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/api/admin/subjects/${id}`,
        data,
        config
      );
      return response.data;
    } catch (e) {
      this.setErrors(e.response.data.data);
    }
  }

  static setErrors(errors) {
    const collection = {
      name: "название предмета",
      "fgos code": "код предмета",
    };
    console.log(errors)
    Errors.setErrors(errors, collection);
  }
}
