class Auth {
    constructor() {
        this.authenticated = localStorage.getItem("Login");
    }

    login() {
        localStorage.setItem("Login", true);
        this.authenticated = localStorage.getItem("Login");
    }

    logout() {
        localStorage.setItem("Login",false);
        this.authenticated = localStorage.getItem("Login");
    }

    isAuthenticated() {
        return this.authenticated;
    }
}

export default new Auth();