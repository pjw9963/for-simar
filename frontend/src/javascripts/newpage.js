
let upvoteButton = document.getElementById("upvote");
let downvoteButton = document.getElementById("downvote");

let upvote = function ()
{
    let karmaValue = parseInt(document.getElementById("karma").innerText)
    document.getElementById("karma").innerText = karmaValue + 1;
}

let downvote = function(){
    let karmaValue = parseInt(document.getElementById("karma").innerText)
    document.getElementById("karma").innerText = karmaValue - 1;
}

let upvoteButton2 = document.getElementById("upvote2");
let downvoteButton2 = document.getElementById("downvote2");

let upvote2 = function ()
{
    let karmaValue = parseInt(document.getElementById("karma2").innerText)
    document.getElementById("karma2").innerText = karmaValue + 1;
}

let downvote2 = function(){
    let karmaValue = parseInt(document.getElementById("karma2").innerText)
    document.getElementById("karma2").innerText = karmaValue - 1;
}


let upvoteButtonNew = document.getElementById("upvoteNew");
let downvoteButtonNew = document.getElementById("downvoteNew");

let upvoteNew = function ()
{
    let karmaValue = parseInt(document.getElementById("karmaNew").innerText)
    document.getElementById("karmaNew").innerText = karmaValue + 1;
}

let downvoteNew = function(){
    let karmaValue = parseInt(document.getElementById("karmaNew").innerText)
    document.getElementById("karmaNew").innerText = karmaValue - 1;
}

upvoteButton.onclick = function () { upvote() };
downvoteButton.onclick=function() { downvote() };
upvoteButton2.onclick = function () { upvote2() };
downvoteButton2.onclick=function() { downvote2() };
upvoteButtonNew.onclick=function() {upvoteNew()};
downvoteButtonNew.onclick=function() {downvoteNew()};

window.onload = () => {
    let x = window.location.search;
    let imgLoc = x.search("img=");
    let imgSrc = x.search("text=");
    document.getElementById("postImageNew").src = "/images/"+x.substring(imgLoc+4, imgSrc-1);
    document.getElementById("postText").innerText = x.substring(imgSrc+5).replaceAll("+", " ");
}