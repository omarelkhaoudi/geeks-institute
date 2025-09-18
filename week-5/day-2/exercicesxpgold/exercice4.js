// Modify fetch with Async/Await
// Instructions

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums"
];

const getData = async function() {
  try {
    // On crée un tableau de promesses avec async/await
    const dataPromises = urls.map(async (url) => {
      const response = await fetch(url);          // attendre la réponse du fetch
      if (!response.ok) throw new Error('Network response was not ok'); // gérer erreur HTTP
      const data = await response.json();         // attendre la conversion JSON
      return data;
    });

    // On attend que toutes les promesses soient résolues
    const [users, posts, albums] = await Promise.all(dataPromises);

    // Affichage des résultats
    console.log('users', users);
    console.log('posts', posts);
    console.log('albums', albums);

  } catch (error) {
    // Si une erreur survient (URL invalide, problème réseau...)
    console.log('ooooooops');
  }
}

getData();

// Résultat attendu (si toutes les URLs sont correctes) :

// users [ ... tableau d’utilisateurs ... ]
// posts [ ... tableau de posts ... ]
// albums [ ... tableau d’albums ... ]

