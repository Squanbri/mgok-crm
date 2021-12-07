import { makeAutoObservable, observable, runInAction, values } from "mobx";

class Errors {
  static index = 0;
  static errors = observable.map();

  constructor() {
    makeAutoObservable(this);
  }

  static setError(error) {
    runInAction(() => { // Добавить ошибку
      const errorObj = {
        id: this.index,
        title: error
      }
      
      this.errors.set(this.index, errorObj); 
      this.setTimeOutError(this.index)
    });
    
    this.index++
  }

  static setErrors(response, collection) {
    const errors = this.pullErrors(response, collection);
    
    if (errors) {
      for (const errorField in errors) {
        const errorsByField = errors[errorField] // Все ошибки поля
        
        for (const error of errorsByField) {
          this.setError(error)
        }
      }
    }
  }

  static pullErrors(response, collection) {
    const data = response?.data;
    const message = data?.message
    const errors = data?.errors

    if (message !== undefined) {
      switch (message) {
        case "Unauthenticated.":
          localStorage.removeItem("token");
          window.location.reload();
          break;
        default:
          this.setError(message);
          break;
      }

      return false;
    } else {
      return this.replaceNameFields(errors, collection);
    }
  }

  // Замена название поля из бд, на название для пользователей
  // Пример: (Поле name обязательно -> Поле название обязательно)
  static replaceNameFields(errors, collection) {
    
    for (const errorField in errors) {
      const errorsByField = errors[errorField] // Все ошибки поля
      
      for (const [index, error] of errorsByField.entries()) { 
        const replacement = collection[errorField.replace('_', ' ')];

        if (replacement !== undefined) {
          const newError = error.replace(errorField.replace('_', ' '), replacement)
          errors[errorField][index] = newError
        }
      }
    }

    return errors;
  }

  static deleteError(id) {
    runInAction(() => this.errors.delete(id))
  }

  static setTimeOutError(id) {
    setTimeout(() => this.deleteError(id), 3000)
  }

  static get list() {
    return values(this.errors)
  }

  static get isLength() {
    return this.errors.size !== 0;
  }
}

export default Errors;
