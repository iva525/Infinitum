function loadAdminStats(){

    let users = JSON.parse(
        localStorage.getItem("users") || "[]"
    );

    let searches = JSON.parse(
        localStorage.getItem("searchHistory") || "[]"
    );

    let usersCount =
    document.getElementById("usersCount");

    let searchesCount =
    document.getElementById("searchesCount");

    if(usersCount){
        usersCount.textContent =
        users.length;
    }

    if(searchesCount){
        searchesCount.textContent =
        searches.length;
    }

}

function loadUsers(){

    let users = JSON.parse(
        localStorage.getItem("users") || "[]"
    );

    let list =
    document.getElementById("usersList");

    if(!list) return;

    list.innerHTML = "";

    users.forEach(user=>{

        list.innerHTML += `
        <div class="user-card">
            ${user.login}
        </div>
        `;

    });

}

window.onload = function(){

    loadAdminStats();
    loadUsers();

};
js/app.js
