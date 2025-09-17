// Promise.all()
// Instructions

const promise1 = Promise.resolve(3);
const promise2 = 42; // une simple valeur sera traitée comme Promise.resolve(42)
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});

Promise.all([promise1, promise2, promise3])
  .then(values => {
    console.log(values); 
    // expected output: [3, 42, "foo"]
  })
  .catch(error => {
    console.error("One promise failed:", error);
  });

/*
Explication :

- Promise.all prend en entrée un tableau de promesses (ou de valeurs).
- Elle retourne une nouvelle promesse qui :
    est résolue quand TOUTES les promesses du tableau sont résolues,
       → alors elle renvoie un tableau avec TOUTES les valeurs dans le même ordre.
    est rejetée immédiatement dès qu’une des promesses est rejetée,
       → et dans ce cas, on attrape l’erreur dans le .catch().

Dans notre exemple :
- promise1 se résout immédiatement avec 3.
- promise2 n’est pas une promesse, donc Promise.all le transforme en Promise.resolve(42).
- promise3 se résout après 3 secondes avec "foo".

Résultat final : Promise.all attend que les 3 soient terminées,
puis renvoie le tableau [3, 42, "foo"].
*/
