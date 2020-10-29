let approveButton = document.getElementById("approve");
let disapproveButton = document.getElementById("disapprove");

let approveRemoval = function () {
    document.getElementById("reportResult").innerText = "Offending post has been removed.";
}

let disapproveRemoval = function () {
    document.getElementById("reportResult").innerText = "You have discarded the report.";
}

approveButton.onclick = function () {
    approveRemoval();
}

disapproveButton.onclick = function () {
    disapproveRemoval();
}

