var whiteLine = document.querySelector(".white-line");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 400) {
        whiteLine.classList.add("show-line");
    }

}

var slideButton = document.querySelector('.slide-out-button');
var heartLi = document.querySelector('.heart-item');
var commentLi = document.querySelector('.comment-item');
var sharingLi = document.querySelector('.sharing-item');


slideButton.addEventListener("click", iconSlide);


function iconSlide() {
    heartLi.classList.toggle("slide-in");
    commentLi.classList.toggle("slide-in");
    sharingLi.classList.toggle("slide-in");
}




var buttons = document.querySelector('.likebuttons');
var likeOverlay = document.getElementById('add-favorites');
var likecross = document.getElementById('like-cross');
var heartIcon = document.getElementById('heart');

buttons.addEventListener("click", showOverlay);

function showOverlay() {
    likeOverlay.classList.toggle("favorites-added");
    heartIcon.src = "../img/heart-icon-wit-full.svg";
    heartLi.style.backgroundColor = "#ff3268";
}

likecross.addEventListener("click", removeOverlay);


function removeOverlay() {
    likeOverlay.classList.remove("favorites-added");
}


var progressButton = document.querySelector('.bookmark-button');
var progressButtonImg = document.querySelector('.bookmark-button-img');
var bookmarkFlag = document.querySelector('.bookmark-drop-icon');
var progressOverlay = document.getElementById('progress-saved');
var progressCross = document.getElementById('progress-cross');

progressButton.addEventListener("click", bookmarked);

function bookmarked() {

    bookmarkFlag.classList.toggle("bookmark-drop-down");
    progressButtonImg.src = "../img/bookmark-icon-full.svg";
    progressOverlay.classList.add("progress-added");
}

progressCross.addEventListener("click", removeProgress);

function removeProgress() {
    progressOverlay.classList.remove("progress-added");
}
