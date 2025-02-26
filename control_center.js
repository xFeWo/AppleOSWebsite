var audio = new Audio('music/you_spin_me_round.mp3');

function togglePlayPause() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

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