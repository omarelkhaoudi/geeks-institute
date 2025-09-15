// Définition de la classe Video
class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time; // durée en secondes
  }

  watch() {
    console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
  }
}

// Instanciation de deux vidéos individuelles
const video1 = new Video("JavaScript Basics", "Elie", 120);
video1.watch();
// Output: Elie watched all 120 seconds of JavaScript Basics!

const video2 = new Video("Advanced JS", "Alice", 300);
video2.watch();
// Output: Alice watched all 300 seconds of Advanced JS!

// Bonus : tableau de données pour 5 vidéos
const videosData = [
  { title: "Video 1", uploader: "John", time: 150 },
  { title: "Video 2", uploader: "Mary", time: 200 },
  { title: "Video 3", uploader: "Bob", time: 90 },
  { title: "Video 4", uploader: "Alice", time: 300 },
  { title: "Video 5", uploader: "Elie", time: 250 },
];

// Boucle pour instancier les vidéos à partir du tableau
const videoInstances = [];

for (const data of videosData) {
  const video = new Video(data.title, data.uploader, data.time);
  videoInstances.push(video);
}

// Appel de la méthode watch() pour chaque instance
videoInstances.forEach(video => video.watch());

// Résultat attendu :
// John watched all 150 seconds of Video 1!
// Mary watched all 200 seconds of Video 2!
// Bob watched all 90 seconds of Video 3!
// Alice watched all 300 seconds of Video 4!
// Elie watched all 250 seconds of Video 5!
