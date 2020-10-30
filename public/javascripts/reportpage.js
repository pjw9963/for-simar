let approveButton = document.getElementById("approve");
let disapproveButton = document.getElementById("disapprove");
let remove=false;
let form = document.getElementById("back");

let approveRemoval = function () {
    document.getElementById("reportResult").innerText = "Offending post has been removed.";
}

let disapproveRemoval = function () {
    document.getElementById("reportResult").innerText = "You have discarded the report.";
    remove = true;
}

approveButton.onclick = function () {
    approveRemoval();
}

disapproveButton.onclick = function () {
    disapproveRemoval();
}

let formValidation = function(event){
    if(remove)
    {
        form.action = "reportmock.html";
    }
    else {
        form.action = "homepage.html";
    }
}

form.onsubmit = function(){formValidation()};