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

function toggleFocusButton() {
    var img = document.getElementById("focus-button");
    var text = document.getElementById("focus-text")
    if (img.src.includes("focus_on.png")) {
        img.src = "images/control_center/focus_off.png";
        text.innerHTML = "Fokus";
    } else {
        img.src = "images/control_center/focus_on.png";
        text.innerHTML = "Nicht stören";
    }
}

function toggleFlightModeButton() {
    var img = document.getElementById("flight-mode-button");
    if (img.src.includes("flight_mode_on.png")) {
        img.src = "images/control_center/connectivity/flight_mode_off.png";
    } else {
        img.src = "images/control_center/connectivity/flight_mode_on.png";
    }
}

function toggleHotSpotButton() {
    var img = document.getElementById("hot-spot-button");
    if (img.src.includes("hot_spot_on.png")) {
        img.src = "images/control_center/connectivity/hot_spot_off.png";
    } else {
        img.src = "images/control_center/connectivity/hot_spot_on.png";
    }
}

function toggleAirdropButton() {
    var img = document.getElementById("airdrop-button");
    if (img.src.includes("airdrop_on.png")) {
        img.src = "images/control_center/connectivity/airdrop_off.png";
    } else {
        img.src = "images/control_center/connectivity/airdrop_on.png";
    }
}

function toggleBluetoothButton() {
    var img = document.getElementById("bluetooth-button");
    if (img.src.includes("bluetooth_on.png")) {
        img.src = "images/control_center/connectivity/bluetooth_off.png";
    } else {
        img.src = "images/control_center/connectivity/bluetooth_on.png";
    }
}