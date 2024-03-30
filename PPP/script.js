document.getElementById('startRainButton').addEventListener('click', function() {
    for (let i = 0; i < 20; i++) { // Cambia el número para ajustar la cantidad de choripanes
        createChoripan();
    }
});

function createChoripan() {
    const choripan = document.createElement('div');
    choripan.classList.add('choripan');
    const randomX = Math.random() * window.innerWidth;
    choripan.style.left = `${randomX}px`;
    document.getElementById('rainContainer').appendChild(choripan);
}
