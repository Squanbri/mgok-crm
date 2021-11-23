import { makeAutoObservable, observable, runInAction } from "mobx";

class Errors {
  static index = 0;
  static errors = observable.array();

  constructor() {
    makeAutoObservable(this);
  }

  static setError(error) {
    if (this.errors.indexOf(error) === -1) {
      runInAction(() => {
        this.errors.push(error); // Добавить ошибку

      });
      setTimeout(() => {  // Убрать ошибку через 3 сек
        runInAction(() => {
          this.errors.remove(error)
        })
      }, 3000)
    }
  }

  static setErrors(response, collection) {
    const errors = this.pullErrors(response, collection);
    console.log(response)
    if (errors) {
      Object.keys(errors).forEach((errorKey) => {
        const fieldErrors = errors[errorKey];
        fieldErrors.forEach((error) => this.setError(error));
      });
    }
  }

  static pullErrors(response, collection) {
    const data = response?.data;

    if (data === undefined) return false;

    if (data.length === 0) {
      const message = data.message;

      if (message) {
        switch (message) {
          case "Unauthenticated.":
            localStorage.removeItem("token");
            window.location.reload();
            break;
          default:
            this.setError(message);
            break;
        }
      }

      return false;
    } else {
      return this.replaceNameFields(data, collection);
    }
  }

  // Замена название поля из бд, на название для пользователей
  // Пример: (Поле name обязательно -> Поле название обязательно)
  static replaceNameFields(errors, collection) {
    const errorsKeys = Object.keys(errors);
    const collectionKeys = Object.keys(collection);

    errorsKeys.forEach((errorKey) => {
      errors[errorKey] = errors[errorKey].map((error) => {
        // Перебираем массив ошибок поля по одной
        collectionKeys.forEach((collectionKey) => {
          if (error.indexOf(collectionKey) !== -1) {
            error = error.replace(collectionKey, collection[collectionKey]);
          }
        });
        return error;
      });
    });

    return errors;
  }

  static get isLength() {
    return this.errors.length > 0;
  }
}

export default Errors;
