function myMove() {
    const elem = document.getElementById("animate");
    let pos = 0; // Position initiale (gauche)
    
    // On nettoie d'abord les anciens intervalles si on reclique
    clearInterval(window.intervalId);

    // Crée un nouvel intervalle
    window.intervalId = setInterval(() => {
        if (pos >= 350) { 
            // 400 (container) - 50 (box) = 350
            clearInterval(window.intervalId);
        } else {
            pos++;
            elem.style.left = pos + "px";
        }
    }, 1); // 1 milliseconde = déplacement ultra fluide
}
