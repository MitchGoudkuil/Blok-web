var flightDropDown = document.getElementById('flight-dropdown');
var timer = document.getElementById('timer');

timer.addEventListener("click", openDropdown);


function openDropdown() {
    flightDropDown.classList.toggle("down");

}




var likeButton = document.getElementById('likebutton');
var buttons = document.querySelector('.likebuttons');
var likeOverlay = document.getElementById('add-favorites');
var likecross = document.getElementById('like-cross');
var heartIcon = document.getElementById('heart');

buttons.addEventListener("click", showOverlay);

function showOverlay() {
    likeOverlay.classList.add("favorites-added");
    heartIcon.src = "../img/heart-icon-wit-full.svg";
}

likecross.addEventListener("click", removeOverlay);


function removeOverlay() {
    likeOverlay.classList.remove("favorites-added");
}


var searchBar = document.querySelector('#direct-search');
var searchDropdown = document.querySelector('#search-dropdown');


searchBar.onkeyup = function () {
    if (this.value.length == 3) {
        searchDropdown.classList.add('search-dropdown-show');
    }
    if (this.value.length < 3) {
        searchDropdown.classList.remove('search-dropdown-show');
    }
}


var boardingCheckbox = document.querySelector('.boarding-bel');
var belImg = document.querySelector('.bel-icon');

boardingCheckbox.addEventListener("click", changeBel)

function changeBel() {
    if (boardingCheckbox.checked) {
        belImg.src = "../img/bel-icoon-full.svg"
    } else {
        belImg.src = "../img/bel-icoon.svg"
    }
}
