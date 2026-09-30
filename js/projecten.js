// Projecten array aanmaken in projecten.html
const projecten = [
    {
        naam: "Portofolio Website",
        categorie: "School",
        beschrijving: "Dit is mijn eerste website die ik heb gemaakt. Ik zal er constant aan toevoegen dit semester om zoveel mogelijk te leren over het zijn van een webprogrammer"
     
    },
    {
        naam: "Fortnite Creative Map",
        categorie: "Hobby",
        beschrijving: "Dit is een creative map in Fortnite die ik nu al 6 jaar lang heb en nogsteeds van tijd tot tijd doe veranderen. Het is een free for all shootout tegen elkaar waarin je speelt in op een eiland helemaal ontworpen door mij. Dit is iets wat ik doe voor mijzelf en een vriend van mij. Ik heb hier ook een soort van codering inzitten die heel eenvoedig is. maar het gaf me toch de reden om meer te willen doen met programming en echt iets te kunnen maken met logica."
    },
    {
        naam: "Hotel Simulator",
        categorie: "School",
        beschrijving: "Dit project heb ik vorig semester gemaakt met 3 anderen in een groep. Het is een 2d simulatie waarin gasten inchecken en bewegen door het hotel doormiddel van events. Ik heb hierin vooral als project aanmoediger gewerkt. Ik heb vooral aan de display logica en navigeerlogica van de personages gewerkt."
    }
];

const projectenDoos = document.querySelector("#projecten-doos");
const categorieFilter = document.querySelector("#categorie-filter");

const toonProjecten = (filterCategorie) => {
projectenDoos.textContent = "";


filterCategorie.forEach((project) => {
const kaart = document.createElement("article");
kaart.classList.add("project-kaart");
 
const titel = document.createElement("h2");
titel.textContent = project.naam;
 
const beschrijving = document.createElement("p");
beschrijving.textContent = project.beschrijving;
 
const categorie = document.createElement("p");
categorie.textContent = `Categorie: ${project.categorie}`;
 
kaart.appendChild(titel);
kaart.appendChild(categorie);
kaart.appendChild(beschrijving);

 
projectenDoos.appendChild(kaart);
});
};

//projecten filteren op categorie
const categorieen = projecten.map((project) => project.categorie);//map zorgt ervoor dat een nieuwe array met zelfde waardes aangemaakt worden.
const uniekeCategorieen = [...new Set(categorieen)];//maakt een set waar zelfde waardes 1 keer voorkomen.

//opties toevoegen aan de select 
uniekeCategorieen.forEach((categorie) => {
const optie = document.createElement("option");
optie.value = categorie;
optie.textContent = categorie;
categorieFilter.appendChild(optie);
});

//Luisterd naar veranderingen in de select en filtert de projecten op basis van de gekozen categorie
categorieFilter.addEventListener("change", (event) => {
    const gekozenCategorie = event.target.value;

    if (gekozenCategorie === "Alle categorieën") {
        toonProjecten(projecten);
        return;
    } 

    const gefilterdeProjecten = projecten.filter(
        (project) => project.categorie === gekozenCategorie);
    
    toonProjecten(gefilterdeProjecten);
});

toonProjecten(projecten);