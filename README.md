# 🎵 Blind Test Famille

Petit jeu de quiz musical en **HTML / CSS / JavaScript** pour jouer en famille devant un écran.

## Fonctionnalités

- Sélection d'une catégorie : Disney, Pop, Variété Française, Années 80
- Choix du nombre de chansons à jouer
- Lecture audio intégrée (balise `<audio>`)
- Bouton « Révéler la réponse » puis passage à la chanson suivante
- Écran de fin de partie avec option « Rejouer »

## ⚠️ Fichiers audio

Les extraits audio ne sont **pas fournis** (droits d'auteur).
Ajoutez vos fichiers `.mp3` dans `assets/audio/` avec les noms attendus dans `script.js`.

Exemples de noms attendus :

```
assets/audio/disney-liberee-delivree.mp3
assets/audio/pop-blinding-lights.mp3
assets/audio/fr-formidable.mp3
assets/audio/80s-billie-jean.mp3
```

Vous pouvez aussi modifier les chemins et titres directement dans l'objet `quizData` du fichier `script.js`.

## Lancer le projet

**Option 1** — ouvrir `index.html` directement dans un navigateur.

**Option 2** — serveur local (recommandé pour l'audio) :

```bash
npm run start
```

Puis ouvrez `http://localhost:8080`.

## Personnalisation

Pour ajouter une catégorie ou des chansons, éditez l'objet `quizData` dans `script.js` :

```js
"Ma Catégorie": [
  { title: "Nom", artist: "Artiste", file: "assets/audio/mon-fichier.mp3" }
]
```
