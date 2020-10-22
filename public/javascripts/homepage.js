
let submitButton = document.getElementById("click");

let validate = function(){
    document.getElementById("hello").innerText = "Button Has Been Clicked"
}

submitButton.onclick = function () { validate() };

