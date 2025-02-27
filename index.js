function openControlCenter() {
    var controlCenter = document.getElementById("control-center");
    var overlay = document.getElementById("control-center-overlay");
    var controlIcon = document.querySelector(".open-control-center");
    var searchIcon = document.querySelector(".open-search-bar");

    controlCenter.classList.toggle("toggle-control-center");
    overlay.classList.add("show");

    controlIcon.classList.add("hidden");
    searchIcon.classList.add("hidden");
}

function closeControlCenter() {
    var controlCenter = document.getElementById("control-center");
    var overlay = document.getElementById("control-center-overlay");
    var controlIcon = document.querySelector(".open-control-center");
    var searchIcon = document.querySelector(".open-search-bar");

    controlCenter.classList.remove("toggle-control-center");
    overlay.classList.remove("show");

    controlIcon.classList.remove("hidden");
    searchIcon.classList.remove("hidden");
}

function openSearchBar() {
    var searchBar = document.getElementById("search-bar");
    var overlay = document.getElementById("search-bar-overlay");
    var controlIcon = document.querySelector(".open-control-center");
    var searchIcon = document.querySelector(".open-search-bar");

    searchBar.classList.toggle("toggle-search-bar");
    overlay.classList.add("show");

    controlIcon.classList.add("hidden");
    searchIcon.classList.add("hidden");
}

function closeSearchBar() {
    var searchBar = document.getElementById("search-bar");
    var overlay = document.getElementById("search-bar-overlay");
    var controlIcon = document.querySelector(".open-control-center");
    var searchIcon = document.querySelector(".open-search-bar");

    searchBar.classList.remove("toggle-search-bar");
    overlay.classList.remove("show");

    controlIcon.classList.remove("hidden");
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