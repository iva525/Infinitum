const ADMIN_LOGIN = "adm";
const ADMIN_PASSWORD = "12345";

function getUsers(){

    return JSON.parse(
        localStorage.getItem("users") || "[]"
    );

}

function saveUsers(users){

    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );

}

function register(){

    const login =
    document.getElementById("login").value.trim();

    const password =
    document.getElementById("password").value.trim();

    if(!login || !password){

        alert("Заполните поля");
        return;

    }

    let users = getUsers();

    if(users.find(u => u.login === login)){

        alert("Пользователь уже существует");
        return;

    }

    users.push({
        login,
        password
    });

    saveUsers(users);

    alert("Регистрация успешна");

}

function login(){

    const loginField =
    document.getElementById("login").value.trim();

    const passwordField =
    document.getElementById("password").value.trim();

    if(
        loginField === ADMIN_LOGIN &&
        passwordField === ADMIN_PASSWORD
    ){

        localStorage.setItem(
            "admin",
            "true"
        );

        localStorage.setItem(
            "username",
            loginField
        );

        location.href = "admin.html";

        return;

    }

    const users = getUsers();

    const user = users.find(
        u =>
        u.login === loginField &&
        u.password === passwordField
    );

    if(!user){

        alert("Неверный логин или пароль");
        return;

    }

    localStorage.setItem(
        "username",
        user.login
    );

    location.href = "profile.html";

}

function logout(){

    localStorage.removeItem("admin");
    localStorage.removeItem("username");

    location.href = "index.html";

}
