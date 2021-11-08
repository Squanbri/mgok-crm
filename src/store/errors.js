import {makeAutoObservable, observable} from "mobx";

class Errors {
    static errors = observable.array()

    constructor() {
        makeAutoObservable(this)
    }

    static setError(error) {
        if (this.errors.indexOf(error) === -1) {
            this.errors.push(error) // Добавить ошибку

            setTimeout(() => {
                this.errors.remove(error)
            }, 3000) // Убрать ошибку через 3 сек
        }
    }

    static setErrors(errors, collection) {
        this.replaceNameFields(errors, collection)
        
        Object.keys(errors).forEach(errorKey => {
            const fieldErrors = errors[errorKey]
            fieldErrors.forEach(error => this.setError(error))            
        })
    }

    // Замена название поля из бд, на название для пользователей
    // Пример: (Поле name обязательно -> Поле название обязательно)
    static replaceNameFields(errors, collection) {
        const errorsKeys = Object.keys(errors)
        const collectionKeys = Object.keys(collection)

        errorsKeys.forEach(errorKey => {
            errors[errorKey] = errors[errorKey].map(error => { // Перебираем массив ошибок поля по одной
                collectionKeys.forEach(collectionKey => {
                    if (error.indexOf(collectionKey) !== -1) {
                        error = error.replace(collectionKey, collection[collectionKey])
                    }
                })
                return error
            })
        })    
    }

    static get isLength() {
        return this.errors.length > 0
    }
}

export default Errors