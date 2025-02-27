document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".search-bar-app-container");
    const searchBar = document.getElementById("search-bar-input");

    const icons = [
        { name: "Einstellungen", img: "images/icons/settings.png", link: "applications/settings/settings.html" },
        { name: "Aktien", img: "images/icons/stocks.png", link: "applications/stocks/stocks.html" },
        { name: "Fotos", img: "images/icons/gallery.png", link: "applications/gallery/gallery.html" },
        { name: "Kamera", img: "images/icons/camera.png", link: "applications/camera/camera.html" },
        { name: "App Store", img: "images/icons/app_store.png", link: "applications/app_store/app_store.html" },
        { name: "Safari", img: "images/icons/safari.png", link: "https://google.com" },
        { name: "Telefon", img: "images/icons/phone.png", link: "applications/phone/phone.html" },
        { name: "Nachrichten", img: "images/icons/messages.png", link: "applications/messages/messages.html" },
        { name: "Mail", img: "images/icons/mail.png", link: "applications/mail/mail.html" },
        { name: "Uhr", img: "images/icons/clock.png", link: "applications/clock/clock.html" },
        { name: "Notizen", img: "images/icons/notes.png", link: "applications/notes/notes.html" },
        { name: "Health", img: "images/icons/health.png", link: "applications/health/health.html" },
        { name: "Erinnerung", img: "images/icons/reminders.png", link: "applications/reminders/reminders.html" },
        { name: "Rechner", img: "images/icons/calculator.png", link: "applications/calculator/calculator.html" },
        { name: "Kontakte", img: "images/icons/contacts.png", link: "applications/contacts/contacts.html" },
        { name: "Karten", img: "images/icons/maps.png", link: "applications/maps/maps.html" },
        { name: "Musik", img: "images/icons/music.png", link: "applications/music/music.html" },
        { name: "Wetter", img: "images/icons/weather.png", link: "applications/weather/weather.html" }
    ];
    

    function renderIcons(filterText = "") {
        container.innerHTML = "";

        let filteredIcons = icons
            .filter(icon => icon.name.toLowerCase().includes(filterText.toLowerCase()))
            .slice(0, 6);

        filteredIcons.forEach(icon => {
            const div = document.createElement("div");
            div.classList.add("search-bar-app-icon");
            div.innerHTML = `
                <a href="${icon.link}" target="_blank">
                    <img src="${icon.img}" width="100" height="100">
                </a>
                <p>${icon.name}</p>
            `;
            container.appendChild(div);
        });

        console.log(container);
    }

    searchBar.addEventListener("input", function () {
        renderIcons(searchBar.value);
    });

    renderIcons();
});