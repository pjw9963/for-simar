let upvoteButton = document.getElementById("upvote");
let downvoteButton = document.getElementById("downvote");

let upvote = function () {
  karmaValue = parseInt(document.getElementById("karma").innerText);
  document.getElementById("karma").innerText = karmaValue + 1;
};

let downvote = function () {
  karmaValue = parseInt(document.getElementById("karma").innerText);
  document.getElementById("karma").innerText = karmaValue - 1;
};

let upvoteButton2 = document.getElementById("upvote2");
let downvoteButton2 = document.getElementById("downvote2");

let upvote2 = function () {
  karmaValue = parseInt(document.getElementById("karma2").innerText);
  document.getElementById("karma2").innerText = karmaValue + 1;
};

let downvote2 = function () {
  karmaValue = parseInt(document.getElementById("karma2").innerText);
  document.getElementById("karma2").innerText = karmaValue - 1;
};

upvoteButton.onclick = function () {
  upvote();
};
downvoteButton.onclick = function () {
  downvote();
};
upvoteButton2.onclick = function () {
  upvote2();
};
downvoteButton2.onclick = function () {
  downvote2();
};
