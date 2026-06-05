/**
 * Blind Test Famille — logique principale
 *
 * Les extraits audio sont récupérés automatiquement depuis l'API Deezer
 * (previews gratuites de 30 secondes, aucune clé API nécessaire).
 *
 * Pour ajouter du contenu : ajoutez un objet { title, artist }
 * dans la catégorie souhaitée, ou créez une nouvelle clé dans quizData.
 */

const quizData = {
  Disney: [
    { title: "Libérée délivrée", artist: "Anaïs Delva" },
    { title: "Ce rêve bleu", artist: "Aladdin" },
    { title: "Hakuna Matata", artist: "Le Roi Lion" },
    { title: "Sous l'océan", artist: "La Petite Sirène" },
    { title: "Il en faut peu pour être heureux", artist: "Le Livre de la Jungle" },
    { title: "Je voudrais déjà être roi", artist: "Le Roi Lion" },
    { title: "L'air du vent", artist: "Pocahontas" },
    { title: "Partir là-bas", artist: "La Petite Sirène" },
    { title: "Un jour mon prince viendra", artist: "Blanche-Neige" },
    { title: "Rêves en bleu", artist: "Raiponce" },
    { title: "Supercalifragilisticexpialidocious", artist: "Mary Poppins" },
    { title: "L'histoire de la vie", artist: "Le Roi Lion" },
    { title: "Je veux y croire", artist: "La Princesse et la Grenouille" },
    { title: "Quand on prie la bonne étoile", artist: "Pinocchio" },
    { title: "Bibbidi-Bobbidi-Boo", artist: "Cendrillon" },
    { title: "Toujours là pour moi", artist: "Toy Story" },
    { title: "Un ami en moi", artist: "Toy Story" },
    { title: "Colors of the Wind", artist: "Vanessa Williams" },
    { title: "A Whole New World", artist: "Peabo Bryson" },
    { title: "Belle", artist: "La Belle et la Bête" },
    { title: "Gaston", artist: "La Belle et la Bête" },
    { title: "Je vole", artist: "Peter Pan" },
    { title: "Ratatouille Main Theme", artist: "Michael Giacchino" },
    { title: "Remember Me", artist: "Coco" },
    { title: "Le monde est à nous", artist: "Aladdin" },
    { title: "Loin de tout", artist: "Vaiana" },
    { title: "Pour la première fois", artist: "La Reine des Neiges" },
    { title: "Montre-leur qui tu es", artist: "La Reine des Neiges 2" },
    { title: "Avez-vous déjà vu", artist: "Le Bossu de Notre-Dame" },
    { title: "Le festin", artist: "Camille" }
  ],
  Pop: [
    { title: "Blinding Lights", artist: "The Weeknd" },
    { title: "Shake It Off", artist: "Taylor Swift" },
    { title: "Uptown Funk", artist: "Bruno Mars" },
    { title: "Shape of You", artist: "Ed Sheeran" },
    { title: "Happy", artist: "Pharrell Williams" },
    { title: "Rolling in the Deep", artist: "Adele" },
    { title: "Get Lucky", artist: "Daft Punk" },
    { title: "Moves Like Jagger", artist: "Maroon 5" },
    { title: "Thinking Out Loud", artist: "Ed Sheeran" },
    { title: "Can't Stop the Feeling", artist: "Justin Timberlake" },
    { title: "Levitating", artist: "Dua Lipa" },
    { title: "Watermelon Sugar", artist: "Harry Styles" },
    { title: "Bad Guy", artist: "Billie Eilish" },
    { title: "Dance Monkey", artist: "Tones and I" },
    { title: "Someone Like You", artist: "Adele" },
    { title: "Firework", artist: "Katy Perry" },
    { title: "Poker Face", artist: "Lady Gaga" },
    { title: "Umbrella", artist: "Rihanna" },
    { title: "Roar", artist: "Katy Perry" },
    { title: "Counting Stars", artist: "OneRepublic" },
    { title: "Dynamite", artist: "BTS" },
    { title: "Stay", artist: "The Kid LAROI" },
    { title: "Havana", artist: "Camila Cabello" },
    { title: "Old Town Road", artist: "Lil Nas X" },
    { title: "Shallow", artist: "Lady Gaga" },
    { title: "Perfect", artist: "Ed Sheeran" },
    { title: "Attention", artist: "Charlie Puth" },
    { title: "Despacito", artist: "Luis Fonsi" },
    { title: "Sorry", artist: "Justin Bieber" },
    { title: "Waka Waka", artist: "Shakira" }
  ],
  "Variété Française": [
    { title: "Je te promets", artist: "Johnny Hallyday" },
    { title: "La Bohème", artist: "Charles Aznavour" },
    { title: "Formidable", artist: "Stromae" },
    { title: "Les Champs-Élysées", artist: "Joe Dassin" },
    { title: "Alors on danse", artist: "Stromae" },
    { title: "La vie en rose", artist: "Édith Piaf" },
    { title: "Je l'aime à mourir", artist: "Francis Cabrel" },
    { title: "Pour que tu m'aimes encore", artist: "Céline Dion" },
    { title: "Le sud", artist: "Nino Ferrer" },
    { title: "L'Aziza", artist: "Daniel Balavoine" },
    { title: "Ne me quitte pas", artist: "Jacques Brel" },
    { title: "Comme d'habitude", artist: "Claude François" },
    { title: "Mon amant de Saint-Jean", artist: "Lucienne Delyle" },
    { title: "La Javanaise", artist: "Serge Gainsbourg" },
    { title: "Amsterdam", artist: "Jacques Brel" },
    { title: "Que je t'aime", artist: "Johnny Hallyday" },
    { title: "Non, je ne regrette rien", artist: "Édith Piaf" },
    { title: "Le chanteur", artist: "Daniel Balavoine" },
    { title: "L'été indien", artist: "Joe Dassin" },
    { title: "Et maintenant", artist: "Gilbert Bécaud" },
    { title: "Syracuse", artist: "Henri Salvador" },
    { title: "Mes mains", artist: "Gilbert Bécaud" },
    { title: "La Maladie d'amour", artist: "Michel Sardou" },
    { title: "Salut les amoureux", artist: "Joe Dassin" },
    { title: "Ma plus belle histoire d'amour", artist: "Barbara" },
    { title: "Le France", artist: "Michel Sardou" },
    { title: "La montagne", artist: "Jean Ferrat" },
    { title: "Petite Marie", artist: "Francis Cabrel" },
    { title: "Le temps des cathédrales", artist: "Bruno Pelletier" },
    { title: "Paroles paroles", artist: "Dalida" }
  ],
  "Années 80 France": [
    { title: "Les démons de minuit", artist: "Images" },
    { title: "Désenchantée", artist: "Mylène Farmer" },
    { title: "Ella, elle l'a", artist: "France Gall" },
    { title: "En rouge et noir", artist: "Jeanne Mas" },
    { title: "Voyage voyage", artist: "Desireless" },
    { title: "Marcia Baila", artist: "Les Rita Mitsouko" },
    { title: "Confidence pour confidence", artist: "Jean Schultheis" },
    { title: "Moi… Lolita", artist: "Alizée" },
    { title: "Nuit de folie", artist: "Début de Soirée" },
    { title: "Tristana", artist: "Mylène Farmer" },
    { title: "La groupie du pianiste", artist: "Michel Berger" },
    { title: "Quelque chose de Tennessee", artist: "Johnny Hallyday" },
    { title: "Sauver l'amour", artist: "Daniel Balavoine" },
    { title: "Ça plane pour moi", artist: "Plastic Bertrand" },
    { title: "Étienne", artist: "Guesch Patti" },
    { title: "Femme libérée", artist: "Cookie Dingler" },
    { title: "Évidemment", artist: "France Gall" },
    { title: "Tout pour la musique", artist: "France Gall" },
    { title: "Débranche", artist: "France Gall" },
    { title: "À toutes les filles", artist: "Didier Barbelivien" },
    { title: "Pour le plaisir", artist: "Herbert Léonard" },
    { title: "Résiste", artist: "France Gall" },
    { title: "Cargo de nuit", artist: "Axel Bauer" },
    { title: "J'ai encore rêvé d'elle", artist: "Il était une fois" },
    { title: "On va s'aimer", artist: "Gilbert Montagné" },
    { title: "Babacar", artist: "France Gall" },
    { title: "L'aventurier", artist: "Indochine" },
    { title: "3ème sexe", artist: "Indochine" },
    { title: "Dernière danse", artist: "Kyo" },
    { title: "Aïcha", artist: "Khaled" }
  ],
  "Années 90 France": [
    { title: "Tomber la chemise", artist: "Zebda" },
    { title: "Joe le taxi", artist: "Vanessa Paradis" },
    { title: "Belle-Île-en-Mer", artist: "Laurent Voulzy" },
    { title: "L'amour à la plage", artist: "Niagara" },
    { title: "Dieu m'a donné la foi", artist: "Ophélie Winter" },
    { title: "Là-bas", artist: "Jean-Jacques Goldman" },
    { title: "Je te donne", artist: "Jean-Jacques Goldman" },
    { title: "Puisque tu pars", artist: "Jean-Jacques Goldman" },
    { title: "Savoir aimer", artist: "Florent Pagny" },
    { title: "Ma liberté de penser", artist: "Florent Pagny" },
    { title: "Le jour se lève", artist: "Mylène Farmer" },
    { title: "L'envie d'aimer", artist: "Daniel Lévi" },
    { title: "Belle", artist: "Garou" },
    { title: "Je suis un homme", artist: "Zazie" },
    { title: "Dieu", artist: "Souchon" },
    { title: "C'est la ouate", artist: "Caroline Loeb" },
    { title: "Foule sentimentale", artist: "Alain Souchon" },
    { title: "Si tu m'aimes", artist: "Liane Foly" },
    { title: "Né quelque part", artist: "Maxime Le Forestier" },
    { title: "Vivre pour le meilleur", artist: "Johnny Hallyday" },
    { title: "Quand la musique est bonne", artist: "Jean-Jacques Goldman" },
    { title: "Aicha", artist: "Khaled" },
    { title: "Parce qu'on vient de loin", artist: "Corneille" },
    { title: "Dès que le vent soufflera", artist: "Renaud" },
    { title: "Diego libre dans sa tête", artist: "France Gall" },
    { title: "Gangsta", artist: "Keziah Jones" },
    { title: "Le bonheur", artist: "Souchon" },
    { title: "Ma philosophie", artist: "Amel Bent" },
    { title: "Je vais t'aimer", artist: "Michel Sardou" },
    { title: "La corrida", artist: "Francis Cabrel" }
  ],
  "Années 2000 France": [
    { title: "Quelqu'un m'a dit", artist: "Carla Bruni" },
    { title: "Toi + Moi", artist: "Grégoire" },
    { title: "Là où je t'emmènerai", artist: "Nous" },
    { title: "Je m'en vais", artist: "Vianney" },
    { title: "Respire", artist: "Mickey 3D" },
    { title: "Mon vieux", artist: "Daniel Guichard" },
    { title: "La lettre", artist: "Renan Luce" },
    { title: "Jeune et con", artist: "Damien Saez" },
    { title: "Mistral gagnant", artist: "Renaud" },
    { title: "Manhattan-Kaboul", artist: "Renaud" },
    { title: "Dis-lui oui", artist: "Bénabar" },
    { title: "Le dîner", artist: "Bénabar" },
    { title: "L'effet papillon", artist: "Bénabar" },
    { title: "En apesanteur", artist: "Calogero" },
    { title: "Face à la mer", artist: "Calogero" },
    { title: "Si seulement je pouvais lui manquer", artist: "Calogero" },
    { title: "Déjeuner en paix", artist: "Stephan Eicher" },
    { title: "Elle me dit", artist: "Mika" },
    { title: "Dernière danse", artist: "Kyo" },
    { title: "Le vent nous portera", artist: "Noir Désir" },
    { title: "Chanson sur ma drôle de vie", artist: "Véronique Sanson" },
    { title: "Ta douleur", artist: "Camille" },
    { title: "Comme toi", artist: "Jean-Jacques Goldman" },
    { title: "Et si tu n'existais pas", artist: "Joe Dassin" },
    { title: "L'hymne de nos campagnes", artist: "Tryo" },
    { title: "Je dis aime", artist: "M" },
    { title: "La mauvaise réputation", artist: "Georges Brassens" },
    { title: "Née quelque part", artist: "Maxime Le Forestier" },
    { title: "Ma gueule", artist: "Johnny Hallyday" },
    { title: "Papaoutai", artist: "Stromae" }
  ],
  "Années 80": [
    { title: "Take On Me", artist: "a-ha" },
    { title: "Billie Jean", artist: "Michael Jackson" },
    { title: "Sweet Dreams", artist: "Eurythmics" },
    { title: "Like a Prayer", artist: "Madonna" },
    { title: "Don't Stop Believin'", artist: "Journey" },
    { title: "Every Breath You Take", artist: "The Police" },
    { title: "Africa", artist: "Toto" },
    { title: "Blue Monday", artist: "New Order" },
    { title: "Livin' on a Prayer", artist: "Bon Jovi" },
    { title: "Girls Just Want to Have Fun", artist: "Cyndi Lauper" },
    { title: "Wake Me Up Before You Go-Go", artist: "Wham!" },
    { title: "I Wanna Dance with Somebody", artist: "Whitney Houston" },
    { title: "Beat It", artist: "Michael Jackson" },
    { title: "Thriller", artist: "Michael Jackson" },
    { title: "Material Girl", artist: "Madonna" },
    { title: "Another One Bites the Dust", artist: "Queen" },
    { title: "Under Pressure", artist: "Queen" },
    { title: "Tainted Love", artist: "Soft Cell" },
    { title: "Come On Eileen", artist: "Dexys Midnight Runners" },
    { title: "Walking on Sunshine", artist: "Katrina and The Waves" },
    { title: "Karma Chameleon", artist: "Culture Club" },
    { title: "We Built This City", artist: "Starship" },
    { title: "Total Eclipse of the Heart", artist: "Bonnie Tyler" },
    { title: "Money for Nothing", artist: "Dire Straits" },
    { title: "Pour Some Sugar on Me", artist: "Def Leppard" },
    { title: "Eye of the Tiger", artist: "Survivor" },
    { title: "Jump", artist: "Van Halen" },
    { title: "Hungry Like the Wolf", artist: "Duran Duran" },
    { title: "Don't You (Forget About Me)", artist: "Simple Minds" },
    { title: "Everybody Wants to Rule the World", artist: "Tears for Fears" }
  ],
  "Années 2000": [
    { title: "Crazy in Love", artist: "Beyoncé" },
    { title: "Hey Ya!", artist: "Outkast" },
    { title: "Toxic", artist: "Britney Spears" },
    { title: "Mr. Brightside", artist: "The Killers" },
    { title: "Hips Don't Lie", artist: "Shakira" },
    { title: "Clocks", artist: "Coldplay" },
    { title: "In Da Club", artist: "50 Cent" },
    { title: "Beautiful Day", artist: "U2" },
    { title: "Since U Been Gone", artist: "Kelly Clarkson" },
    { title: "Lose Yourself", artist: "Eminem" },
    { title: "Yeah!", artist: "Usher" },
    { title: "Complicated", artist: "Avril Lavigne" },
    { title: "Numb", artist: "Linkin Park" },
    { title: "Seven Nation Army", artist: "The White Stripes" },
    { title: "Bohemian Like You", artist: "The Dandy Warhols" },
    { title: "The Real Slim Shady", artist: "Eminem" },
    { title: "Hung Up", artist: "Madonna" },
    { title: "SOS", artist: "Rihanna" },
    { title: "Gold Digger", artist: "Kanye West" },
    { title: "Viva La Vida", artist: "Coldplay" },
    { title: "I Gotta Feeling", artist: "Black Eyed Peas" },
    { title: "Rehab", artist: "Amy Winehouse" },
    { title: "Poker Face", artist: "Lady Gaga" },
    { title: "Don't Cha", artist: "Pussycat Dolls" },
    { title: "Wherever You Will Go", artist: "The Calling" },
    { title: "How You Remind Me", artist: "Nickelback" },
    { title: "Harder Better Faster Stronger", artist: "Daft Punk" },
    { title: "Are You Gonna Be My Girl", artist: "Jet" },
    { title: "Feel Good Inc.", artist: "Gorillaz" },
    { title: "Smooth Criminal", artist: "Alien Ant Farm" }
  ]
};

/* ============= API Deezer (JSONP) ============= */

/**
 * Effectue un appel JSONP (contourne les restrictions CORS du navigateur).
 */
function jsonp(url) {
  return new Promise((resolve, reject) => {
    const cbName = "_deezerCb_" + Date.now() + Math.random().toString(36).slice(2);
    const script = document.createElement("script");

    const cleanup = () => {
      delete window[cbName];
      if (script.parentNode) script.parentNode.removeChild(script);
    };

    window[cbName] = (data) => {
      cleanup();
      resolve(data);
    };

    script.src = `${url}${url.includes("?") ? "&" : "?"}output=jsonp&callback=${cbName}`;
    script.onerror = () => {
      cleanup();
      reject(new Error("Échec de la requête Deezer"));
    };

    // Timeout de 8 secondes
    setTimeout(() => {
      if (window[cbName]) {
        cleanup();
        reject(new Error("Timeout Deezer"));
      }
    }, 8000);

    document.head.appendChild(script);
  });
}

/**
 * Recherche un extrait de 30s sur Deezer à partir du titre et de l'artiste.
 * Retourne l'URL du preview MP3 ou null si introuvable.
 */
async function fetchDeezerPreview(title, artist) {
  try {
    const query = encodeURIComponent(`${artist} ${title}`);
    const data = await jsonp(`https://api.deezer.com/search?q=${query}&limit=3`);

    if (data && data.data && data.data.length > 0) {
      // Prendre le premier résultat avec un preview disponible
      const track = data.data.find((t) => t.preview) || data.data[0];
      return track.preview || null;
    }
  } catch (err) {
    console.warn("Deezer API error:", err.message);
  }
  return null;
}

/* ============= Éléments DOM ============= */
const categorySelect = document.getElementById("category-select");
const songCountInput = document.getElementById("song-count");
const songCountHint = document.getElementById("song-count-hint");
const startBtn = document.getElementById("start-btn");

const setupCard = document.getElementById("setup-card");
const gameCard = document.getElementById("game-card");
const endCard = document.getElementById("end-card");

const progressEl = document.getElementById("progress");
const categoryNameEl = document.getElementById("category-name");
const songTitle = document.getElementById("song-title");
const loadingEl = document.getElementById("loading");
const player = document.getElementById("player");
const answerEl = document.getElementById("answer");
const revealBtn = document.getElementById("reveal-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const endSummary = document.getElementById("end-summary");

/* ============= État du jeu ============= */
let gameState = {
  selectedCategory: "",
  songs: [],
  currentIndex: 0,
  totalRounds: 0,
  isLoading: false
};

let autoNextTimer = null;

/**
 * Historique des chansons récemment jouées par catégorie.
 * Permet d'éviter de retomber sur les mêmes d'une partie à l'autre.
 */
const playedHistory = {};

/* ============= Utilitaires ============= */
function shuffleArray(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function setLoading(loading) {
  gameState.isLoading = loading;
  loadingEl.classList.toggle("hidden", !loading);
  player.classList.toggle("hidden", loading);
  revealBtn.disabled = loading;
  nextBtn.disabled = loading;
}

/* ============= Initialisation ============= */
function initCategories() {
  Object.keys(quizData).forEach((cat) => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = `${cat} (${quizData[cat].length} titres)`;
    categorySelect.appendChild(option);
  });
  updateSongCountHint();
}

function updateSongCountHint() {
  const cat = categorySelect.value;
  const max = quizData[cat].length;
  songCountInput.max = max;
  if (Number(songCountInput.value) > max) {
    songCountInput.value = max;
  }
  songCountHint.textContent = `Maximum pour cette catégorie : ${max}`;
}

/* ============= Sélection aléatoire intelligente ============= */

/**
 * Sélectionne `count` chansons parmi `available` en priorisant
 * celles qui n'ont pas été jouées récemment dans cette catégorie.
 */
function pickSongsAvoidingRecent(available, count, category) {
  const recent = playedHistory[category] || [];

  // Séparer les chansons jamais jouées récemment et les autres
  const fresh = available.filter(
    (s) => !recent.some((r) => r.title === s.title && r.artist === s.artist)
  );
  const stale = available.filter(
    (s) => recent.some((r) => r.title === s.title && r.artist === s.artist)
  );

  // Prioriser les chansons « fraîches », compléter avec les anciennes si besoin
  const pool = [...shuffleArray(fresh), ...shuffleArray(stale)];
  return pool.slice(0, count);
}

/* ============= Démarrage ============= */
function startGame() {
  const cat = categorySelect.value;
  const available = quizData[cat];
  const requested = Number(songCountInput.value);

  if (!Number.isInteger(requested) || requested < 1) {
    alert("Veuillez choisir un nombre de chansons valide (minimum 1).");
    return;
  }

  const total = Math.min(requested, available.length);
  const songs = pickSongsAvoidingRecent(available, total, cat);

  // Mémoriser les chansons jouées cette partie
  playedHistory[cat] = songs.slice();

  gameState = { selectedCategory: cat, songs, currentIndex: 0, totalRounds: total, isLoading: false };

  setupCard.classList.add("hidden");
  endCard.classList.add("hidden");
  gameCard.classList.remove("hidden");

  renderCurrentSong();
}

/* ============= Rendu en cours de jeu ============= */
async function renderCurrentSong() {
  const { currentIndex, songs, totalRounds, selectedCategory } = gameState;
  const song = songs[currentIndex];

  progressEl.textContent = `Chanson ${currentIndex + 1} / ${totalRounds}`;
  categoryNameEl.textContent = selectedCategory;
  songTitle.textContent = `Extrait #${currentIndex + 1}`;

  answerEl.classList.add("hidden");
  answerEl.textContent = "";
  revealBtn.disabled = false;

  // Chargement de l'extrait depuis Deezer
  setLoading(true);
  const previewUrl = await fetchDeezerPreview(song.title, song.artist);
  setLoading(false);

  if (previewUrl) {
    player.src = previewUrl;
    player.load();
    player.play().catch(() => {});
  } else {
    player.removeAttribute("src");
    songTitle.textContent = `Extrait #${currentIndex + 1} (audio indisponible)`;
  }
}

function revealAnswer() {
  const song = gameState.songs[gameState.currentIndex];
  answerEl.textContent = `🎶 ${song.title} — ${song.artist}`;
  answerEl.classList.remove("hidden");
  revealBtn.disabled = true;
}

function nextSong() {
  cancelAutoNext();
  player.pause();
  gameState.currentIndex++;
  if (gameState.currentIndex >= gameState.totalRounds) {
    endGame();
    return;
  }
  renderCurrentSong();
}

/**
 * Quand l'extrait se termine : révèle la réponse et passe
 * automatiquement à la chanson suivante après 5 secondes.
 */
function onTrackEnded() {
  revealAnswer();
  let seconds = 5;
  songTitle.textContent = `Suivant dans ${seconds}s…`;
  autoNextTimer = setInterval(() => {
    seconds--;
    if (seconds <= 0) {
      cancelAutoNext();
      nextSong();
    } else {
      songTitle.textContent = `Suivant dans ${seconds}s…`;
    }
  }, 1000);
}

function cancelAutoNext() {
  if (autoNextTimer) {
    clearInterval(autoNextTimer);
    autoNextTimer = null;
  }
}

/* ============= Fin de partie ============= */
function endGame() {
  player.pause();
  gameCard.classList.add("hidden");
  endCard.classList.remove("hidden");
  endSummary.textContent = `Vous avez joué ${gameState.totalRounds} chanson(s) dans la catégorie « ${gameState.selectedCategory} ». Bravo à tous !`;
}

function restartGame() {
  player.pause();
  player.removeAttribute("src");
  setupCard.classList.remove("hidden");
  gameCard.classList.add("hidden");
  endCard.classList.add("hidden");
}

/* ============= Événements ============= */
categorySelect.addEventListener("change", updateSongCountHint);
startBtn.addEventListener("click", startGame);
revealBtn.addEventListener("click", revealAnswer);
nextBtn.addEventListener("click", nextSong);
restartBtn.addEventListener("click", () => { cancelAutoNext(); restartGame(); });
player.addEventListener("ended", onTrackEnded);

initCategories();
