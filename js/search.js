function saveSearch(query){

    let history = JSON.parse(
        localStorage.getItem("searchHistory") || "[]"
    );

    history.unshift(query);

    history = [...new Set(history)];

    history = history.slice(0,20);

    localStorage.setItem(
        "searchHistory",
        JSON.stringify(history)
    );

}

function googleSearch(){

    let query =
    document.getElementById("query").value.trim();

    if(!query) return;

    saveSearch(query);

    window.open(
        "https://www.google.com/search?q=" +
        encodeURIComponent(query),
        "_blank"
    );

}

function yandexSearch(){

    let query =
    document.getElementById("query").value.trim();

    if(!query) return;

    saveSearch(query);

    window.open(
        "https://yandex.ru/search/?text=" +
        encodeURIComponent(query),
        "_blank"
    );

}

function loadHistory(){

    let history = JSON.parse(
        localStorage.getItem("searchHistory") || "[]"
    );

    let block =
    document.getElementById("history");

    if(!block) return;

    block.innerHTML = "";

    history.forEach(item=>{

        block.innerHTML +=
        `<div class="history-item">${item}</div>`;

    });

}

window.onload = loadHistory;
