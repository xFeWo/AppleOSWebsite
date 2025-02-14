function openControlCenter() {
    var controlCenter = document.getElementById("control-center");
    controlCenter.classList.toggle("toggle-control-center");
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