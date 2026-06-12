function sendMessage(){

    const input =
    document.getElementById("message");

    const chat =
    document.getElementById("chat");

    const text =
    input.value.trim();

    if(!text) return;

    chat.innerHTML += `
    <div class="msg user">
        ${text}
    </div>
    `;

    setTimeout(()=>{

        chat.innerHTML += `
        <div class="msg ai">
            Infinitum AI пока находится в разработке.
        </div>
        `;

        chat.scrollTop =
        chat.scrollHeight;

    },500);

    input.value="";

}

document.addEventListener(
    "keydown",
    function(e){

        if(e.key==="Enter"){

            sendMessage();

        }

    }
);
