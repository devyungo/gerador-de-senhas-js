let slider = document.querySelector("#slider");
let button = document.querySelector("#button");
let value = document.querySelector("#senhavalue");
let password = document.querySelector("#password");
let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

let copymsg = document.querySelector("#copymsg")

let novasenha = "";

value.innerHTML = slider.value

let senhatual = ""

slider.oninput = function(){
    value.innerHTML = this.value
}

copymsg.classList.add('hide');

function generatepass(){
    let pass = "";
    for(let i=0, n = charset.length; i < slider.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    password.innerHTML = pass;
    console.log = pass;
    senhatual = pass;
    copymsg.classList.add('show');
}

function copypass(){
    navigator.clipboard.writeText(senhatual)
}

