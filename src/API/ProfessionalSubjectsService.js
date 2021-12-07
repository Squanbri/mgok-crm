import axios from "axios";
import Errors from "../store/errors";

export default class ProfessionalSubjectsAPI {
  static async fetchSubjects(id) {
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/admin/professional_qualities/${id}/subjects`,
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
        `${process.env.REACT_APP_BACKEND_URL}/api/admin/professional_qualities/${id}`,
        config
      );
      return response.data;
    } catch (e) {
      this.setErrors(e.response);
    }
  }

  static async postSubject(
    profId,
    subjectId,
    independentWorkHours,
    theoreticalLearningHours,
    laboratoryWorkHours,
    courseWorksHours,
    minimalHours,
    practiceHours,
    certificationHours,
    certificationType
  ) {
    const token = localStorage.getItem("token");

    const data = {
      "subject_id": subjectId,
      "independent_work_number_of_hours": independentWorkHours,
      "theoretical_learning_number_of_hours": theoreticalLearningHours,
      "laboratory_work_number_of_hours": laboratoryWorkHours,
      "courseworks_number_of_hours": courseWorksHours,
      "minimal_number_of_hours": minimalHours,
      "practice_number_of_hours": practiceHours,
      "certification_number_of_hours": certificationHours,
      "certification_type": certificationType
    };

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/admin/professional_qualities/${profId}/subjects`,
        data,
        config
      );
      return response.data;
    } catch (e) {
      this.setErrors(e.response);
    }
  }

  static async deleteSubject(profId, subjectId) {
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.delete(
      `${process.env.REACT_APP_BACKEND_URL}/api/admin/professional_qualities/${profId}/subjects/${subjectId}`,
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
