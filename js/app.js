const APP_NAME = "Infinitum";
const APP_VERSION = "1.0";

function go(page){

    location.href = page;

}

function getUser(){

    return localStorage.getItem(
        "username"
    );

}

function isAdmin(){

    return localStorage.getItem(
        "admin"
    ) === "true";

}
js/app.js
