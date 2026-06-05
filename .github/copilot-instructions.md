# Blind Test Famille — Instructions Copilot

- [x] Verify that the copilot-instructions.md file in the .github directory is created.
- [x] Clarify Project Requirements — Projet web statique HTML/CSS/JS, quiz musical familial.
- [x] Scaffold the Project — Fichiers créés manuellement (pas de framework).
- [x] Customize the Project — Quiz avec 4 catégories, choix du nombre de chansons, audio, écran de fin.
- [x] Install Required Extensions — Aucune extension requise (projet statique pur).
- [x] Compile the Project — Pas de compilation nécessaire (HTML/CSS/JS natif).
- [x] Create and Run Task — Tâche VS Code créée : `python3 -m http.server 8080`.
- [x] Launch the Project — Serveur local accessible sur `http://localhost:8080`.
- [x] Ensure Documentation is Complete — README.md et copilot-instructions.md à jour.

## Informations du projet

- **Type** : Site web statique (HTML / CSS / JavaScript)
- **Serveur local** : `python3 -m http.server 8080`
- **Port** : 8080
- **Données** : les chansons/catégories sont dans l'objet `quizData` de `script.js`
- **Audio** : placer les fichiers `.mp3` dans `assets/audio/`

## Règles de développement

- Pas de framework ni bundler
- Garder le code vanilla JS compatible navigateurs modernes
- Les fichiers audio ne sont pas versionnés (droits d'auteur)
- Pour ajouter une catégorie, ajouter une clé dans `quizData` de `script.js`
