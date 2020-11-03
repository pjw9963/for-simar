let form = document.getElementById("signIn")
let formValidation = function(event){
    uname = document.getElementById("uname").value;
    psw = document.getElementById("psw").value;
    if(uname === "mod" && psw === "mod")
    {
        form.action = "modpage.html";
    }
    else {
        form.action = "homepage.html";
    }
}

form.onsubmit = function(){formValidation()};