const counter = document.querySelector(".counter");
const daysBox = counter.querySelector(".days")
const hoursBox = counter.querySelector(".hours")
const minBox = counter.querySelector(".minutes")
const secBox = counter.querySelector(".seconds")

var date = new Date("Jan 5, 2022 00:00:00").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();
    var timeLeft = date - now;

    //time calculations
    var days = Math.floor(timeLeft/(1000*60*60*24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft  % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    //display on page
    daysBox.innerHTML = days;
    hoursBox.innerHTML = hours;
    minBox.innerHTML = minutes;
    secBox.innerHTML = seconds;
}, 1000);