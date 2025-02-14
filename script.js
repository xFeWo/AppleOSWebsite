function openControlCenter() {
    var controlCenter = document.getElementById("control-center");
    var overlay = document.getElementById("overlay");
    var menuIcon = document.querySelector(".open-control-center");

    controlCenter.classList.toggle("toggle-control-center");
    overlay.classList.add("show");

    menuIcon.classList.add("hidden");
}

function closeControlCenter() {
    var controlCenter = document.getElementById("control-center");
    var overlay = document.getElementById("overlay");
    var menuIcon = document.querySelector(".open-control-center");

    controlCenter.classList.remove("toggle-control-center");
    overlay.classList.remove("show");

    menuIcon.classList.remove("hidden");
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