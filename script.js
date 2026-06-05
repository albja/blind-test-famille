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
  "Disney 🇫🇷": [
    { title: "Libérée délivrée", artist: "Anaïs Delva" },
    { title: "Ce rêve bleu", artist: "Daniel Lévi" },
    { title: "Hakuna Matata", artist: "La Reine Lion" },
    { title: "Sous l'océan", artist: "La Petite Sirène" },
    { title: "Il en faut peu pour être heureux", artist: "Le Livre de la Jungle" },
    { title: "Je voudrais déjà être roi", artist: "Le Roi Lion" },
    { title: "L'air du vent", artist: "Rebelle" },
    { title: "Partir là-bas", artist: "Pocahontas" },
    { title: "Un jour mon prince viendra", artist: "Blanche Neige" },
    { title: "L'histoire de la vie", artist: "Le Roi Lion" },
    { title: "Belle", artist: "La Belle et la Bête" },
    { title: "Gaston", artist: "La Belle et la Bête" },
    { title: "Un ami en moi", artist: "Toy Story" },
    { title: "Je veux y croire", artist: "Toy Story 3" },
    { title: "Le festin", artist: "Camille" },
    { title: "Pour la première fois", artist: "Anaïs Delva" },
    { title: "Ne m'oublies pas", artist: "Coco" },
    { title: "Le bleu lumière", artist: "Anaïs Delva" },
    { title: "Comme un homme", artist: "Mulan" },
    { title: "Infernal", artist: "Le Bossu de Notre Dame" },
    { title: "Au bout du rêve", artist: "Aladdin" },
    { title: "Prince Ali", artist: "Aladdin" },
    { title: "Tout le monde veut devenir un cat", artist: "Les Aristochats" },
    { title: "L'amour brille sous les étoiles", artist: "Le Roi Lion" },
    { title: "Soyez prêts", artist: "Le Roi Lion" },
    { title: "Je voudrais", artist: "La Petite Sirène" },
    { title: "C'est la fête", artist: "La Belle et la Bête" },
    { title: "De zéro en héros", artist: "Hercule" },
    { title: "Sauvages", artist: "Pocahontas" },
    { title: "Cruella d'enfer", artist: "Les 101 Dalmatiens" },
    { title: "L'ombre et la lumière", artist: "Bruno Pelletier" },
    { title: "Le temps des cathédrales", artist: "Bruno Pelletier" },
    { title: "Belle", artist: "Garou" },
    { title: "Vivre", artist: "Patrick Fiori" },
    { title: "Le miracle", artist: "Bruno Pelletier" },
    { title: "Les cloches de Notre-Dame", artist: "Le Bossu de Notre-Dame" },
    { title: "Ton meilleur ami", artist: "Aladdin" },
    { title: "Un monde idéal", artist: "Aladdin" },
    { title: "Loin de tout", artist: "Cerise Calil" },
    { title: "Notre terre", artist: "Cerise Calil" },
    { title: "Avez-vous déjà vu", artist: "Bambi" },
    { title: "Supercalifragilisticexpialidocious", artist: "Mary Poppins" },
    { title: "Bibbidi-Bobbidi-Boo", artist: "Cendrillon" },
    { title: "Quand on prie la bonne étoile", artist: "Pinocchio" },
    { title: "Toujours là pour moi", artist: "Tarzan" },
    { title: "Vous n'avez pas honte", artist: "Hercule" },
    { title: "Un beau jour", artist: "Winnie l'ourson" },
    { title: "Evermore", artist: "Josh Groban" },
    { title: "Surface Pressure", artist: "Jessica Darrow" },
    { title: "Ma place dans ce monde", artist: "Encanto" }
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
    { title: "Havana", artist: "Camila Cabello" },
    { title: "Shallow", artist: "Lady Gaga" },
    { title: "Perfect", artist: "Ed Sheeran" },
    { title: "Despacito", artist: "Luis Fonsi" },
    { title: "Sorry", artist: "Justin Bieber" },
    { title: "Waka Waka", artist: "Shakira" },
    { title: "Starboy", artist: "The Weeknd" },
    { title: "Titanium", artist: "David Guetta" },
    { title: "Cheap Thrills", artist: "Sia" },
    { title: "Sugar", artist: "Maroon 5" },
    { title: "All About That Bass", artist: "Meghan Trainor" },
    { title: "Hello", artist: "Adele" },
    { title: "Royals", artist: "Lorde" },
    { title: "Stitches", artist: "Shawn Mendes" },
    { title: "Love Yourself", artist: "Justin Bieber" },
    { title: "Thunder", artist: "Imagine Dragons" },
    { title: "Believer", artist: "Imagine Dragons" },
    { title: "Photograph", artist: "Ed Sheeran" },
    { title: "All of Me", artist: "John Legend" },
    { title: "Closer", artist: "The Chainsmokers" },
    { title: "Happier", artist: "Marshmello" },
    { title: "Señorita", artist: "Shawn Mendes" },
    { title: "Without Me", artist: "Halsey" },
    { title: "New Rules", artist: "Dua Lipa" },
    { title: "Chandelier", artist: "Sia" },
    { title: "One Kiss", artist: "Dua Lipa" },
    { title: "Lean On", artist: "Major Lazer" },
    { title: "Locked Out of Heaven", artist: "Bruno Mars" },
    { title: "24K Magic", artist: "Bruno Mars" }
  ],
  "Variété Française 🇫🇷": [
    { title: "Je te promets", artist: "Johnny Hallyday" },
    { title: "Que je t'aime", artist: "Johnny Hallyday" },
    { title: "La Bohème", artist: "Charles Aznavour" },
    { title: "Emmenez-moi", artist: "Charles Aznavour" },
    { title: "Formidable", artist: "Stromae" },
    { title: "Alors on danse", artist: "Stromae" },
    { title: "Les Champs-Élysées", artist: "Joe Dassin" },
    { title: "L'été indien", artist: "Joe Dassin" },
    { title: "La vie en rose", artist: "Édith Piaf" },
    { title: "L'hymne à l'amour", artist: "Édith Piaf" },
    { title: "Je l'aime à mourir", artist: "Francis Cabrel" },
    { title: "Petite Marie", artist: "Francis Cabrel" },
    { title: "Pour que tu m'aimes encore", artist: "Céline Dion" },
    { title: "Le sud", artist: "Nino Ferrer" },
    { title: "L'Aziza", artist: "Daniel Balavoine" },
    { title: "Le chanteur", artist: "Daniel Balavoine" },
    { title: "Ne me quitte pas", artist: "Jacques Brel" },
    { title: "Le plat pays", artist: "Jacques Brel" },
    { title: "Comme d'habitude", artist: "Claude François" },
    { title: "Alexandrie Alexandra", artist: "Claude François" },
    { title: "La Javanaise", artist: "Serge Gainsbourg" },
    { title: "La Maladie d'amour", artist: "Michel Sardou" },
    { title: "Les lacs du Connemara", artist: "Michel Sardou" },
    { title: "La montagne", artist: "Jean Ferrat" },
    { title: "Paroles paroles", artist: "Dalida" },
    { title: "Mistral gagnant", artist: "Renaud" },
    { title: "Comme toi", artist: "Jean-Jacques Goldman" },
    { title: "Et si tu n'existais pas", artist: "Joe Dassin" },
    { title: "Le gorille", artist: "Georges Brassens" },
    { title: "Les copains d'abord", artist: "Georges Brassens" },
    { title: "Le déserteur", artist: "Boris Vian" },
    { title: "Avec le temps", artist: "Léo Ferré" },
    { title: "Quand on n'a que l'amour", artist: "Jacques Brel" },
    { title: "Mon amant de Saint-Jean", artist: "Lucienne Delyle" },
    { title: "La groupie du pianiste", artist: "Michel Berger" },
    { title: "Quelque chose de Tennessee", artist: "Johnny Hallyday" },
    { title: "Et moi et moi et moi", artist: "Jacques Dutronc" },
    { title: "La plus belle pour aller danser", artist: "Sylvie Vartan" },
    { title: "Tous les garçons et les filles", artist: "Françoise Hardy" },
    { title: "Foule sentimentale", artist: "Alain Souchon" },
    { title: "En chantant", artist: "Michel Fugain" },
    { title: "Antisocial", artist: "Trust" },
    { title: "Le temps de l'amour", artist: "Françoise Hardy" },
    { title: "Et maintenant", artist: "Gilbert Bécaud" },
    { title: "Syracuse", artist: "Henri Salvador" },
    { title: "Ma plus belle histoire d'amour", artist: "Barbara" },
    { title: "Couleur café", artist: "Serge Gainsbourg" },
    { title: "Depuis que tu n'es plus là", artist: "Patrick Bruel" },
    { title: "Le coup de soleil", artist: "Richard Cocciante" },
    { title: "J'ai encore rêvé d'elle", artist: "Il était une fois" }
  ],
  "Années 80 France": [
    { title: "Les démons de minuit", artist: "Images" },
    { title: "Désenchantée", artist: "Mylène Farmer" },
    { title: "Ella, elle l'a", artist: "France Gall" },
    { title: "En rouge et noir", artist: "Jeanne Mas" },
    { title: "Voyage voyage", artist: "Desireless" },
    { title: "Marcia Baila", artist: "Les Rita Mitsouko" },
    { title: "Nuit de folie", artist: "Début de Soirée" },
    { title: "La groupie du pianiste", artist: "Michel Berger" },
    { title: "Quelque chose de Tennessee", artist: "Johnny Hallyday" },
    { title: "Sauver l'amour", artist: "Daniel Balavoine" },
    { title: "Ça plane pour moi", artist: "Plastic Bertrand" },
    { title: "Femme libérée", artist: "Cookie Dingler" },
    { title: "Évidemment", artist: "France Gall" },
    { title: "Tout pour la musique", artist: "France Gall" },
    { title: "Débranche", artist: "France Gall" },
    { title: "Pour le plaisir", artist: "Herbert Léonard" },
    { title: "Résiste", artist: "France Gall" },
    { title: "Cargo de nuit", artist: "Axel Bauer" },
    { title: "J'ai encore rêvé d'elle", artist: "Il était une fois" },
    { title: "On va s'aimer", artist: "Gilbert Montagné" },
    { title: "Babacar", artist: "France Gall" },
    { title: "L'aventurier", artist: "Indochine" },
    { title: "3ème sexe", artist: "Indochine" },
    { title: "Canary Bay", artist: "Indochine" },
    { title: "Les mots bleus", artist: "Christophe" },
    { title: "Quand la musique est bonne", artist: "Jean-Jacques Goldman" },
    { title: "Je te donne", artist: "Jean-Jacques Goldman" },
    { title: "Envole-moi", artist: "Jean-Jacques Goldman" },
    { title: "Au bout de mes rêves", artist: "Jean-Jacques Goldman" },
    { title: "Il suffira d'un signe", artist: "Jean-Jacques Goldman" },
    { title: "Encore un matin", artist: "Jean-Jacques Goldman" },
    { title: "Les bétises", artist: "Sabine Paturel" },
    { title: "Confidence pour confidence", artist: "Jean Schultheis" },
    { title: "Maman a tort", artist: "Mylène Farmer" },
    { title: "Libertine", artist: "Mylène Farmer" },
    { title: "Sans contrefaçon", artist: "Mylène Farmer" },
    { title: "Tristana", artist: "Mylène Farmer" },
    { title: "Ouragan", artist: "Stéphanie de Monaco" },
    { title: "La isla bonita", artist: "Dalida" },
    { title: "Dès que le vent soufflera", artist: "Renaud" },
    { title: "Morgane de toi", artist: "Renaud" },
    { title: "Miss Maggie", artist: "Renaud" },
    { title: "La ballade de Jim", artist: "Alain Souchon" },
    { title: "J'ai dix ans", artist: "Alain Souchon" },
    { title: "L'amour à la machine", artist: "Alain Souchon" },
    { title: "C'est comme ça", artist: "Les Rita Mitsouko" },
    { title: "Le coup de soleil", artist: "Richard Cocciante" },
    { title: "Saga Africa", artist: "Yannick Noah" },
    { title: "Les yeux revolver", artist: "Marc Lavoine" },
    { title: "Mon fils ma bataille", artist: "Daniel Balavoine" }
  ],
  "Années 90 France": [
    { title: "Tomber la chemise", artist: "Zebda" },
    { title: "Joe le taxi", artist: "Vanessa Paradis" },
    { title: "Belle-Île-en-Mer", artist: "Laurent Voulzy" },
    { title: "Là-bas", artist: "Jean-Jacques Goldman" },
    { title: "Puisque tu pars", artist: "Jean-Jacques Goldman" },
    { title: "Savoir aimer", artist: "Florent Pagny" },
    { title: "Ma liberté de penser", artist: "Florent Pagny" },
    { title: "L'envie d'aimer", artist: "Daniel Lévi" },
    { title: "Belle", artist: "Garou" },
    { title: "Je suis un homme", artist: "Zazie" },
    { title: "Foule sentimentale", artist: "Alain Souchon" },
    { title: "Vivre pour le meilleur", artist: "Johnny Hallyday" },
    { title: "Aïcha", artist: "Khaled" },
    { title: "La corrida", artist: "Francis Cabrel" },
    { title: "Je vais t'aimer", artist: "Michel Sardou" },
    { title: "Dur dur d'être bébé", artist: "Jordy" },
    { title: "Laissez-moi danser", artist: "Dalida" },
    { title: "L'amour est un soleil", artist: "Hélène Ségara" },
    { title: "Il changeait la vie", artist: "Jean-Jacques Goldman" },
    { title: "Regarde", artist: "Les Enfoirés" },
    { title: "Née en 17 à Leidenstadt", artist: "Jean-Jacques Goldman" },
    { title: "Bouge de là", artist: "MC Solaar" },
    { title: "Caroline", artist: "MC Solaar" },
    { title: "Je danse le Mia", artist: "IAM" },
    { title: "Petit frère", artist: "IAM" },
    { title: "C'est la ouate", artist: "Caroline Loeb" },
    { title: "Ça fait rire les oiseaux", artist: "La Compagnie Créole" },
    { title: "L'amour à la plage", artist: "Niagara" },
    { title: "Tu m'oublieras", artist: "Larusso" },
    { title: "Pas toi", artist: "Jean-Jacques Goldman" },
    { title: "Toute première fois", artist: "Jeanne Mas" },
    { title: "Sous le vent", artist: "Garou" },
    { title: "La tribu de Dana", artist: "Manau" },
    { title: "Fils de joie", artist: "Stromae" },
    { title: "Diego libre dans sa tête", artist: "France Gall" },
    { title: "Noir c'est noir", artist: "Johnny Hallyday" },
    { title: "Dieu m'a donné la foi", artist: "Ophélie Winter" },
    { title: "Parce qu'on vient de loin", artist: "Corneille" },
    { title: "Né quelque part", artist: "Maxime Le Forestier" },
    { title: "Ma philosophie", artist: "Amel Bent" },
    { title: "L'amour en solitaire", artist: "Juliette Armanet" },
    { title: "Mourir sur scène", artist: "Dalida" },
    { title: "Comme ils disent", artist: "Charles Aznavour" },
    { title: "Vivre ou survivre", artist: "Daniel Balavoine" },
    { title: "Mon mec à moi", artist: "Patricia Kaas" },
    { title: "Mademoiselle chante le blues", artist: "Patricia Kaas" },
    { title: "Et là-bas", artist: "Patricia Kaas" },
    { title: "L'aigle noir", artist: "Barbara" },
    { title: "Göttingen", artist: "Barbara" },
    { title: "Nantes", artist: "Barbara" }
  ],
  "Années 2000 France": [
    { title: "Quelqu'un m'a dit", artist: "Carla Bruni" },
    { title: "Toi + Moi", artist: "Grégoire" },
    { title: "Respire", artist: "Mickey 3D" },
    { title: "La lettre", artist: "Renan Luce" },
    { title: "Manhattan-Kaboul", artist: "Renaud" },
    { title: "Le dîner", artist: "Bénabar" },
    { title: "L'effet papillon", artist: "Bénabar" },
    { title: "En apesanteur", artist: "Calogero" },
    { title: "Face à la mer", artist: "Calogero" },
    { title: "Si seulement je pouvais lui manquer", artist: "Calogero" },
    { title: "Elle me dit", artist: "Mika" },
    { title: "Dernière danse", artist: "Kyo" },
    { title: "Le vent nous portera", artist: "Noir Désir" },
    { title: "L'hymne de nos campagnes", artist: "Tryo" },
    { title: "Je dis aime", artist: "M" },
    { title: "Papaoutai", artist: "Stromae" },
    { title: "Tous les mêmes", artist: "Stromae" },
    { title: "Ta fête", artist: "Stromae" },
    { title: "Ça m'énerve", artist: "Helmut Fritz" },
    { title: "Marly-Gomont", artist: "Kamini" },
    { title: "Dingue dingue dingue", artist: "Christophe Maé" },
    { title: "On s'attache", artist: "Christophe Maé" },
    { title: "Belle demoiselle", artist: "Christophe Maé" },
    { title: "Je veux", artist: "Zaz" },
    { title: "La pluie", artist: "Zaz" },
    { title: "Éblouie par la nuit", artist: "Zaz" },
    { title: "Pas là", artist: "Vianney" },
    { title: "Je m'en vais", artist: "Vianney" },
    { title: "Beau-papa", artist: "Vianney" },
    { title: "Le pouvoir des fleurs", artist: "Laurent Voulzy" },
    { title: "Déjeuner en paix", artist: "Stephan Eicher" },
    { title: "Jeune et con", artist: "Saez" },
    { title: "J'envoie valser", artist: "Zazie" },
    { title: "Speed", artist: "Zazie" },
    { title: "Je suis un homme", artist: "Zazie" },
    { title: "Tout le bonheur du monde", artist: "Sinsemilia" },
    { title: "La seine", artist: "Vanessa Paradis" },
    { title: "Des ricochets", artist: "Vanessa Paradis" },
    { title: "Divine idylle", artist: "Vanessa Paradis" },
    { title: "La même", artist: "Maître Gims" },
    { title: "Sapés comme jamais", artist: "Maître Gims" },
    { title: "Bella", artist: "Maître Gims" },
    { title: "Andalouse", artist: "Kendji Girac" },
    { title: "Les yeux de la Mama", artist: "Kendji Girac" },
    { title: "Color Gitano", artist: "Kendji Girac" },
    { title: "On écrit sur les murs", artist: "Kids United" },
    { title: "Dernière danse", artist: "Indila" },
    { title: "Tourner dans le vide", artist: "Indila" },
    { title: "Comme un boomerang", artist: "Serge Gainsbourg" },
    { title: "Destinée", artist: "Gims" }
  ],
  "Années 80 International": [
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
    { title: "Walking on Sunshine", artist: "Katrina and The Waves" },
    { title: "Karma Chameleon", artist: "Culture Club" },
    { title: "Total Eclipse of the Heart", artist: "Bonnie Tyler" },
    { title: "Money for Nothing", artist: "Dire Straits" },
    { title: "Eye of the Tiger", artist: "Survivor" },
    { title: "Jump", artist: "Van Halen" },
    { title: "Hungry Like the Wolf", artist: "Duran Duran" },
    { title: "Everybody Wants to Rule the World", artist: "Tears for Fears" },
    { title: "Born in the U.S.A.", artist: "Bruce Springsteen" },
    { title: "Dancing in the Dark", artist: "Bruce Springsteen" },
    { title: "Careless Whisper", artist: "George Michael" },
    { title: "Faith", artist: "George Michael" },
    { title: "With or Without You", artist: "U2" },
    { title: "Where the Streets Have No Name", artist: "U2" },
    { title: "Purple Rain", artist: "Prince" },
    { title: "When Doves Cry", artist: "Prince" },
    { title: "Relax", artist: "Frankie Goes to Hollywood" },
    { title: "The Final Countdown", artist: "Europe" },
    { title: "Pour Some Sugar on Me", artist: "Def Leppard" },
    { title: "Here I Go Again", artist: "Whitesnake" },
    { title: "Welcome to the Jungle", artist: "Guns N' Roses" },
    { title: "Sweet Child O' Mine", artist: "Guns N' Roses" },
    { title: "Paradise City", artist: "Guns N' Roses" },
    { title: "Enjoy the Silence", artist: "Depeche Mode" },
    { title: "Personal Jesus", artist: "Depeche Mode" },
    { title: "Never Gonna Give You Up", artist: "Rick Astley" },
    { title: "Eternal Flame", artist: "The Bangles" },
    { title: "Manic Monday", artist: "The Bangles" },
    { title: "In the Air Tonight", artist: "Phil Collins" },
    { title: "Against All Odds", artist: "Phil Collins" },
    { title: "Shout", artist: "Tears for Fears" },
    { title: "West End Girls", artist: "Pet Shop Boys" }
  ],
  "Années 2000 International": [
    { title: "Crazy in Love", artist: "Beyoncé" },
    { title: "Hey Ya!", artist: "Outkast" },
    { title: "Toxic", artist: "Britney Spears" },
    { title: "Mr. Brightside", artist: "The Killers" },
    { title: "Hips Don't Lie", artist: "Shakira" },
    { title: "Clocks", artist: "Coldplay" },
    { title: "Beautiful Day", artist: "U2" },
    { title: "Lose Yourself", artist: "Eminem" },
    { title: "Yeah!", artist: "Usher" },
    { title: "Complicated", artist: "Avril Lavigne" },
    { title: "Numb", artist: "Linkin Park" },
    { title: "Seven Nation Army", artist: "The White Stripes" },
    { title: "Hung Up", artist: "Madonna" },
    { title: "Viva La Vida", artist: "Coldplay" },
    { title: "I Gotta Feeling", artist: "Black Eyed Peas" },
    { title: "Rehab", artist: "Amy Winehouse" },
    { title: "Harder Better Faster Stronger", artist: "Daft Punk" },
    { title: "Feel Good Inc.", artist: "Gorillaz" },
    { title: "In the End", artist: "Linkin Park" },
    { title: "Boulevard of Broken Dreams", artist: "Green Day" },
    { title: "American Idiot", artist: "Green Day" },
    { title: "Chasing Cars", artist: "Snow Patrol" },
    { title: "Fix You", artist: "Coldplay" },
    { title: "The Scientist", artist: "Coldplay" },
    { title: "Umbrella", artist: "Rihanna" },
    { title: "Single Ladies", artist: "Beyoncé" },
    { title: "Poker Face", artist: "Lady Gaga" },
    { title: "Bad Romance", artist: "Lady Gaga" },
    { title: "Just Dance", artist: "Lady Gaga" },
    { title: "Boom Boom Pow", artist: "Black Eyed Peas" },
    { title: "Where Is the Love?", artist: "Black Eyed Peas" },
    { title: "Whenever Wherever", artist: "Shakira" },
    { title: "Beautiful", artist: "Christina Aguilera" },
    { title: "Dilemma", artist: "Nelly" },
    { title: "Ignition", artist: "R. Kelly" },
    { title: "Angels", artist: "Robbie Williams" },
    { title: "Rock DJ", artist: "Robbie Williams" },
    { title: "Clint Eastwood", artist: "Gorillaz" },
    { title: "Starlight", artist: "Muse" },
    { title: "Supermassive Black Hole", artist: "Muse" },
    { title: "Time Is Running Out", artist: "Muse" },
    { title: "Hysteria", artist: "Muse" },
    { title: "Use Somebody", artist: "Kings of Leon" },
    { title: "Sex on Fire", artist: "Kings of Leon" },
    { title: "Pump It", artist: "Black Eyed Peas" },
    { title: "When You Were Young", artist: "The Killers" },
    { title: "Take Me Out", artist: "Franz Ferdinand" },
    { title: "Dakota", artist: "Stereophonics" },
    { title: "One More Time", artist: "Daft Punk" },
    { title: "Around the World", artist: "Daft Punk" }
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
 * Mots-clés indiquant un remix/cover à exclure des résultats.
 */
const REMIX_KEYWORDS = /remix|techno|club mix|karaoke|karaoké|8[- ]?bit|nightcore|sped up|slowed|reverb|cover|metal|rock version|instrumental/i;

/**
 * Recherche un extrait de 30s sur Deezer à partir du titre et de l'artiste.
 * Stratégie multi-essais pour maximiser les chances de trouver un preview.
 */
async function fetchDeezerPreview(title, artist, forcefrench = false) {
  // Essai 1 : recherche avec artiste + titre
  let url = await tryDeezerSearch(`${artist} ${title}`, forcefrench);
  if (url) return url;

  // Essai 2 : recherche avec juste le titre (plus large)
  url = await tryDeezerSearch(title, forcefrench);
  if (url) return url;

  // Essai 3 : si on forçait le français, réessayer sans filtre langue
  if (forcefrench) {
    url = await tryDeezerSearch(`${artist} ${title}`, false);
    if (url) return url;
  }

  return null;
}

/**
 * Effectue une recherche Deezer et retourne l'URL du preview ou null.
 */
async function tryDeezerSearch(searchQuery, filterFrench) {
  try {
    const query = encodeURIComponent(searchQuery);
    const data = await jsonp(`https://api.deezer.com/search?q=${query}&limit=15`);

    if (!data || !data.data || data.data.length === 0) return null;

    // Filtrer les remixes
    let validTracks = data.data.filter((t) => {
      const fullTitle = (t.title || "").toLowerCase();
      const albumName = ((t.album && t.album.title) || "").toLowerCase();
      return t.preview && !REMIX_KEYWORDS.test(fullTitle) && !REMIX_KEYWORDS.test(albumName);
    });

    // Pour Disney FR : préférer les pistes dont le titre contient des caractères français
    // ou dont l'album contient "disney" en excluant ceux purement anglais
    if (filterFrench && validTracks.length > 1) {
      const frenchTracks = validTracks.filter((t) => {
        const title = (t.title || "").toLowerCase();
        // Exclure les pistes dont le titre est clairement en anglais
        const isEnglish = /^(let it go|under the sea|a whole new world|be prepared|circle of life|friend like me|part of your world|colors of the wind|reflection|when you wish|how far i'll go|into the unknown|surface pressure|we don't talk about bruno|evermore)\b/i.test(title);
        return !isEnglish;
      });
      if (frenchTracks.length > 0) {
        validTracks = frenchTracks;
      }
    }

    // Retourner le premier résultat valide
    if (validTracks.length > 0) return validTracks[0].preview;

    // Fallback : n'importe quel résultat avec preview
    const fallback = data.data.find((t) => t.preview);
    return fallback ? fallback.preview : null;
  } catch (err) {
    console.warn("Deezer search error:", err.message);
    return null;
  }
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
  // Forcer le français pour la catégorie Disney
  const forceFR = selectedCategory.toLowerCase().includes("disney");
  setLoading(true);
  const previewUrl = await fetchDeezerPreview(song.title, song.artist, forceFR);
  setLoading(false);

  if (previewUrl) {
    player.src = previewUrl;
    player.load();
    player.play().catch(() => {});
  } else {
    // Audio indisponible → on skip automatiquement cette chanson
    console.warn(`Skip: preview indisponible pour "${song.title}" - ${song.artist}`);
    gameState.currentIndex++;
    if (gameState.currentIndex >= gameState.totalRounds) {
      endGame();
      return;
    }
    renderCurrentSong();
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
