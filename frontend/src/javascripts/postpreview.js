var loadFile = function(event) {
    var output = document.getElementById('output');
    let imageURL = document.getElementById("images").value;
    output.src = "images/" + imageURL;
};