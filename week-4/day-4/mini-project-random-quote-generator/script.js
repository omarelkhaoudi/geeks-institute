// 💡 Tableau de citations initiales
let quotes = [
  { id: 0, author: "Albert Einstein", quote: "Life is like riding a bicycle. To keep your balance you must keep moving.", likes: 0 },
  { id: 1, author: "Oscar Wilde", quote: "Be yourself; everyone else is already taken.", likes: 0 },
  { id: 2, author: "Marilyn Monroe", quote: "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.", likes: 0 }
];

let lastIndex = null; // Pour éviter doublons
let filteredQuotes = [];
let currentFilteredIndex = 0;

// 🔹 Sélection des éléments
const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
const generateBtn = document.getElementById('generateBtn');
const addQuoteForm = document.getElementById('addQuoteForm');
const newQuoteInput = document.getElementById('newQuote');
const newAuthorInput = document.getElementById('newAuthor');
const charWithSpacesBtn = document.getElementById('charWithSpacesBtn');
const charWithoutSpacesBtn = document.getElementById('charWithoutSpacesBtn');
const wordCountBtn = document.getElementById('wordCountBtn');
const likeBtn = document.getElementById('likeBtn');
const info = document.getElementById('info');
const filterForm = document.getElementById('filterForm');
const filterAuthorInput = document.getElementById('filterAuthor');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// 🔹 Fonction afficher une citation
function displayQuote(quoteObj) {
  quoteText.textContent = `"${quoteObj.quote}"`;
  quoteAuthor.textContent = `— ${quoteObj.author}`;
  info.textContent = `Likes: ${quoteObj.likes}`;
}

// 🔹 Fonction générer citation aléatoire
function generateRandomQuote() {
  let index;
  do {
    index = Math.floor(Math.random() * quotes.length);
  } while (index === lastIndex && quotes.length > 1);
  lastIndex = index;
  displayQuote(quotes[index]);
}

generateBtn.addEventListener('click', generateRandomQuote);

// 🔹 Ajouter une nouvelle citation
addQuoteForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const newQuote = newQuoteInput.value.trim();
  const newAuthor = newAuthorInput.value.trim();
  if(newQuote && newAuthor) {
    const newId = quotes.length;
    quotes.push({ id: newId, author: newAuthor, quote: newQuote, likes: 0 });
    newQuoteInput.value = '';
    newAuthorInput.value = '';
    alert('Quote added!');
  }
});

// 🔹 Info sur la citation
charWithSpacesBtn.addEventListener('click', () => {
  info.textContent = `Chars (with spaces): ${quoteText.textContent.length}`;
});

charWithoutSpacesBtn.addEventListener('click', () => {
  const charsNoSpaces = quoteText.textContent.replace(/\s/g, '').length;
  info.textContent = `Chars (without spaces): ${charsNoSpaces}`;
});

wordCountBtn.addEventListener('click', () => {
  const words = quoteText.textContent.split(/\s+/).filter(Boolean).length;
  info.textContent = `Word count: ${words}`;
});

likeBtn.addEventListener('click', () => {
  const quoteStr = quoteText.textContent.replace(/"/g, '');
  const quoteObj = quotes.find(q => q.quote === quoteStr);
  if(quoteObj) {
    quoteObj.likes++;
    info.textContent = `Likes: ${quoteObj.likes}`;
  }
});

// 🔹 Filtrer par auteur
filterForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const author = filterAuthorInput.value.trim().toLowerCase();
  filteredQuotes = quotes.filter(q => q.author.toLowerCase() === author);
  if(filteredQuotes.length > 0) {
    currentFilteredIndex = 0;
    displayQuote(filteredQuotes[currentFilteredIndex]);
  } else {
    quoteText.textContent = "No quotes found for this author.";
    quoteAuthor.textContent = '';
    info.textContent = '';
  }
});

// 🔹 Navigation entre les citations filtrées
prevBtn.addEventListener('click', () => {
  if(filteredQuotes.length > 0) {
    currentFilteredIndex = (currentFilteredIndex - 1 + filteredQuotes.length) % filteredQuotes.length;
    displayQuote(filteredQuotes[currentFilteredIndex]);
  }
});

nextBtn.addEventListener('click', () => {
  if(filteredQuotes.length > 0) {
    currentFilteredIndex = (currentFilteredIndex + 1) % filteredQuotes.length;
    displayQuote(filteredQuotes[currentFilteredIndex]);
  }
});
