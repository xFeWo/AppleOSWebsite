function openControlCenter() {
    var controlCenter = document.getElementById("control-center");
    var overlay = document.getElementById("overlay");
    var menuIcon = document.querySelector(".open-control-center");
    var searchIcon = document.querySelector(".open-search-bar")

    controlCenter.classList.toggle("toggle-control-center");
    overlay.classList.add("show");

    menuIcon.classList.add("hidden");
    searchIcon.classList.add("hidden");
}

function closeControlCenter() {
    var controlCenter = document.getElementById("control-center");
    var overlay = document.getElementById("overlay");
    var menuIcon = document.querySelector(".open-control-center");
    var searchIcon = document.querySelector(".open-search-bar")

    controlCenter.classList.remove("toggle-control-center");
    overlay.classList.remove("show");

    menuIcon.classList.remove("hidden");
    searchIcon.classList.remove("hidden");
}

function updateDateTime() {
    const now = new Date();

    const time = now.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' });
    const weekday = now.toLocaleDateString('de-DE', { weekday: 'long' });
    const day = now.getDate().toString().padStart(2, '0');
    const month = now.toLocaleDateString('de-DE', { month: 'short' }).replace('.', '');
    const formattedDateTime = `${time} &nbsp; ${weekday} ${day}. ${month}.`;

    document.getElementById("datetime").innerHTML = formattedDateTime;
}

document.addEventListener("DOMContentLoaded", function () {
    updateDateTime();
    setInterval(updateDateTime, 1000);
});

var audio = new Audio('music/you_spin_me_round.mp3');

function togglePlayPauseButton() {
    var img = document.getElementById("play-pause-button");
    if (img.src.includes("play.png")) {
        img.src = "images/control_center/mediaplayer/pause.png";
        audio.play();
    } else {
        img.src = "images/control_center/mediaplayer/play.png";
        audio.pause();
    }
}

function togglePlayPause() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function toggleBellButton() {
    var img = document.getElementById("bell-button");
    if (img.src.includes("bell_on.png")) {
        img.src = "images/control_center/bell_off.png";
        img.classList.toggle("control-center-bell-icon-on");
        img.classList.toggle("control-center-bell-icon-off");
    } else {
        img.src = "images/control_center/bell_on.png";
        img.classList.toggle("control-center-bell-icon-on");
        img.classList.toggle("control-center-bell-icon-off");
    }
}

function toggleLockButton() {
    var img = document.getElementById("lock-button");
    if (img.src.includes("lock_on.png")) {
        img.src = "images/control_center/lock_off.png";
        img.classList.toggle("control-center-lock-icon-on");
        img.classList.toggle("control-center-lock-icon-off");
    } else {
        img.src = "images/control_center/lock_on.png";
        img.classList.toggle("control-center-lock-icon-on");
        img.classList.toggle("control-center-lock-icon-off");
    }
}