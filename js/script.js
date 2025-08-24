// Inicializar mapa
var map = L.map('map').setView([-23.5505, -46.6333], 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
}).addTo(map);

// Ícones
var icons = {
    "Plástico": L.icon({ iconUrl: "https://cdn-icons-png.flaticon.com/512/2905/2905191.png", iconSize: [32, 32] }),
    "Vidro": L.icon({ iconUrl: "https://cdn-icons-png.flaticon.com/512/744/744922.png", iconSize: [32, 32] }),
    "Metal": L.icon({ iconUrl: "https://cdn-icons-png.flaticon.com/512/744/744929.png", iconSize: [32, 32] }),
    "Eletrônicos": L.icon({ iconUrl: "https://cdn-icons-png.flaticon.com/512/1048/1048948.png", iconSize: [32, 32] }),
    "Papel": L.icon({ iconUrl: "https://cdn-icons-png.flaticon.com/512/1081/1081094.png", iconSize: [32, 32] })
};

// Pontos de coleta
var pontos = [
    { lat: -23.5505, lng: -46.6333, tipo: "Plástico", nome: "Coleta Centro", descricao: "Recebe garrafas PET e sacolas.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Plastic_bottles_in_bags.jpg/320px-Plastic_bottles_in_bags.jpg" },
    { lat: -23.5596, lng: -46.6588, tipo: "Vidro", nome: "Vidro Paulista", descricao: "Recebe garrafas e potes de vidro.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Glass_bottles.jpg/320px-Glass_bottles.jpg" },
    { lat: -23.5631, lng: -46.6544, tipo: "Metal", nome: "Metal Moema", descricao: "Recebe alumínio, ferro e aço.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Scrap_metal_pile.jpg/320px-Scrap_metal_pile.jpg" },
    { lat: -23.5622, lng: -46.6557, tipo: "Eletrônicos", nome: "E-lixo Pinheiros", descricao: "Recebe computadores, celulares e TVs.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Electronic_waste.jpg/320px-Electronic_waste.jpg" },
    { lat: -23.5678, lng: -46.6480, tipo: "Papel", nome: "Papel Liberdade", descricao: "Recebe papelão e jornais.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Paper_recycling.jpg/320px-Paper_recycling.jpg" }
];

var marcadores = [];

function mostrarPontos(lista) {
    marcadores.forEach(m => map.removeLayer(m));
    marcadores = [];

    lista.forEach(p => {
        var marker = L.marker([p.lat, p.lng], { icon: icons[p.tipo] })
            .bindPopup(`<b>${p.nome}</b><br>${p.descricao}<br><img class='popup-img' src='${p.img}'>`)
            .addTo(map);
        marcadores.push(marker);
    });
}

// Filtro
function filtrar(tipo) {
    if (tipo === "Todos") {
        mostrarPontos(pontos);
    } else {
        mostrarPontos(pontos.filter(p => p.tipo === tipo));
    }
}

mostrarPontos(pontos);

// Mostrar/esconder filtros
document.getElementById("toggle-filters").addEventListener("click", () => {
    document.getElementById("filtros").classList.toggle("hidden");
});

