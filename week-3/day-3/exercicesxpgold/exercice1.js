// Récupérer le select
const select = document.getElementById("genres");

// Afficher la valeur sélectionnée
function showSelected() {
    const result = document.getElementById("result");
    result.textContent = "Selected: " + select.value;
}

// Exécuter dès le chargement
showSelected();

// Exécuter à chaque changement
select.addEventListener("change", showSelected);

// Ajouter une nouvelle option "Classic"
const newOption = new Option("Classic", "classic", true, true);
// true, true = option ajoutée et sélectionnée par défaut
select.add(newOption);

// Vérifier la nouvelle valeur sélectionnée
showSelected();
