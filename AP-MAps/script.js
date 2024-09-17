// Functie om de juiste map te downloaden
function downloadMap(filename) {
    const link = document.createElement('a');
    link.href = filename;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Functie om tussen maps te wisselen
const links = document.querySelectorAll('.navbar a');
const maps = document.querySelectorAll('.map');

links.forEach(link => {
    link.addEventListener('click', function () {
        // Verberg alle maps
        maps.forEach(map => map.style.display = 'none');
        // Toon de geselecteerde map
        const selectedMap = document.querySelector(this.getAttribute('href'));
        selectedMap.style.display = 'block';
    });
});
