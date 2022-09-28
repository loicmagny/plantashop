class User {
    constructor(id = 0, username = '', password = '', email = '', firstname = '', lastname = '', adress = '', phone = '') {
        this.id = id
        this.username = username
        this.pasword = password
        this.email = email
        this.firstname = firstname
        this.lastname = lastname
        this.adress = adress
        this.phone = phone
    }

    get id() {
        return this.id
    }
    set id(value) {
        return this.id = value
    }

    get username() {
        return this.username
    }
    set username(value) {
        return this.username = value
    }

    get password() {
        return this.password
    }
    set password(value) {
        return this.password = value
    }

    get email() {
        return this.password
    }
    set email(value) {
        return this.email = value
    }

    get firstname() {
        return this.firstname
    }
    set firstname(value) {
        return this.firstname = value
    }

    get lastname() {
        return this.lastname
    }
    set lastname(value) {
        return this.lastname = value
    }

    get adress() {
        return this.adress
    }
    set adress(value) {
        return this.adress = value
    }

    get phone() {
        return this.phone
    }
    set phone() {
        return this.phone = value
    }


}