// hier staat key nodig voor de api met basis url.
const API_KEY = "867f61b81b722e464887db35a1ae2070"; // Vervang dit door je eigen API-sleutel van OpenWeatherMap
const API_URL = "https://api.weatherstack.com/current";

const weerFormulier = document.querySelector("#weer-formulier");
const locatieVeld = document.querySelector("#locatie");
const weerStatus = document.querySelector("#weer-status");
const weerResultaat = document.querySelector("#weer-resultaat");

// Luister naar het submit-event van het formulier
weerFormulier.addEventListener("submit", (event) => {
    event.preventDefault();

    const locatie = locatieVeld.value.trim();

    haalWeerOp(locatie);
});
// Functie om het weer op te halen van de API, probeert op te halen anders error.
const haalWeerOp = async (locatie) => {
    weerStatus.textContent = "Weer wordt opgehaald...";
    weerResultaat.textContent = "";

    const url = `${API_URL}?access_key=${API_KEY}&query=${encodeURIComponent(locatie)}&units=m`;

    try {
        const response = await fetch(url);
        const gegevens = await response.json();
        
        toonWeer(gegevens);
        weerStatus.textContent = "Actuele weergegevens voor " + gegevens.location.name + ", " + gegevens.location.country + " geladen.";
       
        if (gegevens.error) {
            throw new Error(gegevens.error.info);
        }

    console.log(gegevens);
}
catch (error) {
    console.error(error);

    weerStatus.textContent = "Er is een fout opgetreden bij het ophalen van het weer.";
}
    
};


const toonWeer = (gegevens) => {
    weerResultaat.textContent = "";

    const titel = document.createElement("h3");
    titel.textContent = `Weer in ${gegevens.location.name}, ${gegevens.location.country}`;

    const temperatuur = document.createElement("p");
    temperatuur.textContent = `Temperatuur: ${gegevens.current.temperature}°C`;

    const beschrijving = document.createElement("p");
    beschrijving.textContent = `Weer: ${gegevens.current.weather_descriptions[0]}`;

    const wind = document.createElement("p");
    wind.textContent = `Windsnelheid: ${gegevens.current.wind_speed} km/u, richting ${gegevens.current.wind_dir}`;

    weerResultaat.appendChild(titel);
    weerResultaat.appendChild(temperatuur);
    weerResultaat.appendChild(beschrijving);
    weerResultaat.appendChild(wind);
};
