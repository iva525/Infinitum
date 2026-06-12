function saveUsername(){

    let username =
    document.getElementById(
        "username"
    ).value;

    localStorage.setItem(
        "username",
        username
    );

    alert(
        "Имя сохранено"
    );

}

function clearSearchHistory(){

    localStorage.removeItem(
        "searchHistory"
    );

    alert(
        "История очищена"
    );

}

function setDarkTheme(){

    document.body.style.background =
    "#0f172a";

    document.body.style.color =
    "white";

}

function setLightTheme(){

    document.body.style.background =
    "#ffffff";

    document.body.style.color =
    "#000000";

}
