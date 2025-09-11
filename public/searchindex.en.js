var relearn_searchindex = [
  {
    "breadcrumb": "Soutien en programmation \u003e \rSoutien pour le 3E5",
    "content": "Quand et où ? Mardi 30 septembre de 12:00 à 14:00 Local : B-3317 Fiches aide-mémoire Fiche 1 – Chemins absolus vs relatifs (HTML, CSS, JS) Chemin absolu Contient l’adresse complète (depuis la racine du site ou une URL externe).\nUtilisé pour pointer vers un fichier n’importe où sur le web.\nExemples :\n\u003c!-- Image --\u003e \u003cimg src=\"https://exemple.com/images/logo.png\"\u003e \u003c!-- Lien CSS --\u003e \u003clink rel=\"stylesheet\" href=\"/styles/global.css\"\u003e\rAvantage : toujours le même, peu importe la page.\nInconvénient : moins flexible si tu déplaces ton projet.\nChemin relatif Dépend de l’endroit où se trouve le fichier actuel.\nUtilisé à l’intérieur d’un projet.\nSymboles utiles :\n./ → le dossier courant (souvent implicite). ../ → remonter d’un dossier. Exemples :\n\u003c!-- Image dans le même dossier --\u003e \u003cimg src=\"image.png\"\u003e \u003c!-- CSS dans un dossier voisin --\u003e \u003clink rel=\"stylesheet\" href=\"../css/style.css\"\u003e \u003c!-- JS dans un sous-dossier --\u003e \u003cscript src=\"./js/app.js\"\u003e\u003c/script\u003e\rAvantage : portable, fonctionne si on déplace le projet.\nInconvénient : peut devenir confus avec beaucoup de ../.\nFiche 2 – HTML Inclure une image \u003c!-- Absolu --\u003e \u003cimg src=\"https://mon-site.com/images/photo.jpg\"\u003e \u003c!-- Relatif --\u003e \u003cimg src=\"images/photo.jpg\"\u003e \u003c!-- même dossier --\u003e \u003cimg src=\"../assets/photo.jpg\"\u003e \u003c!-- remonter --\u003e\rInclure un lien \u003ca href=\"https://exemple.com/page.html\"\u003eLien externe\u003c/a\u003e \u003ca href=\"page2.html\"\u003eLien interne relatif\u003c/a\u003e\rFiche 3 – CSS Inclure une feuille de style \u003c!-- Absolu --\u003e \u003clink rel=\"stylesheet\" href=\"https://cdn.exemple.com/style.css\"\u003e \u003c!-- Relatif --\u003e \u003clink rel=\"stylesheet\" href=\"css/style.css\"\u003e\rLien vers une image dans CSS /* Absolu */ body { background-image: url(\"https://mon-site.com/images/bg.png\"); } /* Relatif (par rapport au fichier CSS, pas HTML !) */ body { background-image: url(\"../images/bg.png\"); }\rFiche 4 – JavaScript Inclure un script \u003c!-- Absolu --\u003e \u003cscript src=\"https://cdn.jsdelivr.net/npm/library.js\"\u003e\u003c/script\u003e \u003c!-- Relatif --\u003e \u003cscript src=\"./js/app.js\"\u003e\u003c/script\u003e\rCharger une ressource via JS // Absolu fetch(\"https://api.exemple.com/data\") // Relatif (par rapport à la page HTML) fetch(\"./data/data.json\")\rRègle d’or :\nChemin absolu → pour ressources externes ou constantes. Chemin relatif → pour ton projet local et portable. Ateliers intéractifs Fichiers télécharger",
    "description": "Quand et où ? Mardi 30 septembre de 12:00 à 14:00 Local : B-3317 Fiches aide-mémoire Fiche 1 – Chemins absolus vs relatifs (HTML, CSS, JS) Chemin absolu Contient l’adresse complète (depuis la racine du site ou une URL externe).\nUtilisé pour pointer vers un fichier n’importe où sur le web.\nExemples :\n\u003c!-- Image --\u003e \u003cimg src=\"https://exemple.com/images/logo.png\"\u003e \u003c!-- Lien CSS --\u003e \u003clink rel=\"stylesheet\" href=\"/styles/global.css\"\u003e\rAvantage : toujours le même, peu importe la page.",
    "tags": [],
    "title": "Chemins relatif vs absolu",
    "uri": "/3e5/html-css/index.html"
  },
  {
    "breadcrumb": "",
    "content": "Objectifs Offrir un accompagnement régulier, personnalisé et ciblé aux étudiant·es ayant des difficultés ou ayant échoué un cours de programmation, afin d’augmenter leur compréhension des notions clés et leur réussite des cours de programmation (ZC6 et 3E5).\nFormat de l’activité Rencontres en petits groupes (8 à 15 étudiants·es maximum). Approche interactive basée sur les questions et lacunes des étudiant·es. Révision de concepts fondamentaux et exercices pratiques. Distribution de résumés de concepts. Possibilité d’avoir un plan d’intervention personnalisé. Où et Quand ? Quand : Mardi de 12:00 à 14:00 (environ aux 3 semaines) Les dates sont inscrites pour chacun des sujets ciblés (voir Plus de détails)\nLocal : B-3317 Soutien en Java (ZC6) Plus de détails\nSoutien en html, css et JavaScript (3E5) Plus de détails",
    "description": "Objectifs Offrir un accompagnement régulier, personnalisé et ciblé aux étudiant·es ayant des difficultés ou ayant échoué un cours de programmation, afin d’augmenter leur compréhension des notions clés et leur réussite des cours de programmation (ZC6 et 3E5).\nFormat de l’activité Rencontres en petits groupes (8 à 15 étudiants·es maximum). Approche interactive basée sur les questions et lacunes des étudiant·es. Révision de concepts fondamentaux et exercices pratiques. Distribution de résumés de concepts.",
    "tags": [],
    "title": "Soutien en programmation",
    "uri": "/index.html"
  },
  {
    "breadcrumb": "Soutien en programmation",
    "content": "Sujets ciblés Trace d’exécution et messages d’erreurs\nSemaine #4: Mardi 16 septembre\nSous-programme et structures conditionnelles\nSemaine #7: Mardi 14 octobre (à confirmer)\nBoucles et débogueur\nSemaine #11: Mardi 13 novembre (à confirmer)",
    "description": "Sujets ciblés Trace d’exécution et messages d’erreurs\nSemaine #4: Mardi 16 septembre\nSous-programme et structures conditionnelles\nSemaine #7: Mardi 14 octobre (à confirmer)\nBoucles et débogueur\nSemaine #11: Mardi 13 novembre (à confirmer)",
    "tags": [],
    "title": "Soutien pour le ZC6",
    "uri": "/zc6/index.html"
  },
  {
    "breadcrumb": "Soutien en programmation \u003e \rSoutien pour le ZC6",
    "content": "Quand et où ? Mardi 16 septembre de 12:00 à 14:00 Local : B-3317 Fiches aide-mémoire Fichiers à télécharger En construction\nAteliers intéractifs Fichiers télécharger",
    "description": "Quand et où ? Mardi 16 septembre de 12:00 à 14:00 Local : B-3317 Fiches aide-mémoire Fichiers à télécharger En construction\nAteliers intéractifs Fichiers télécharger",
    "tags": [],
    "title": "Trace d'exécution et messages d'erreurs",
    "uri": "/zc6/trace/index.html"
  },
  {
    "breadcrumb": "Soutien en programmation \u003e \rSoutien pour le 3E5",
    "content": "Sujets À Déterminer\nQuand et où ? Mardi 25 octobre de 12:00 à 14:00 Local : B-3317",
    "description": "Sujets À Déterminer\nQuand et où ? Mardi 25 octobre de 12:00 à 14:00 Local : B-3317",
    "tags": [],
    "title": "JavaScript",
    "uri": "/3e5/js/index.html"
  },
  {
    "breadcrumb": "Soutien en programmation \u003e \rSoutien pour le ZC6",
    "content": "Quand et où ? Mardi 7 ou 14 octobre de 12:00 à 14:00 (**à confirmer) Local : B-3317 Sous-programmes (procédures et fonctions)1 Structures conditionnelles Images proviennent du site WayToLearnX ↩︎",
    "description": "Quand et où ? Mardi 7 ou 14 octobre de 12:00 à 14:00 (**à confirmer) Local : B-3317 Sous-programmes (procédures et fonctions)1 Structures conditionnelles Images proviennent du site WayToLearnX ↩︎",
    "tags": [],
    "title": "Sous-programmes et structures conditionnelles",
    "uri": "/zc6/fonctions-if/index.html"
  },
  {
    "breadcrumb": "Soutien en programmation",
    "content": "Sujets ciblés Chemins relatif vs absolu\nSemaine #6: Mardi 30 septembre\nJavaScript\nSemaine #13: Mardi 25 octobre (sujets et date à confirmer)",
    "description": "Sujets ciblés Chemins relatif vs absolu\nSemaine #6: Mardi 30 septembre\nJavaScript\nSemaine #13: Mardi 25 octobre (sujets et date à confirmer)",
    "tags": [],
    "title": "Soutien pour le 3E5",
    "uri": "/3e5/index.html"
  },
  {
    "breadcrumb": "Soutien en programmation \u003e \rSoutien pour le ZC6",
    "content": "Quand et où ? Jeudi 13 novembre de 12:00 à 14:00 (horaire du mardi) Local : B-3317 Boucles1 (à venir) Boucle for Boucle while Boucle do while Débogueur Images proviennent du site WayToLearnX ↩︎",
    "description": "Quand et où ? Jeudi 13 novembre de 12:00 à 14:00 (horaire du mardi) Local : B-3317 Boucles1 (à venir) Boucle for Boucle while Boucle do while Débogueur Images proviennent du site WayToLearnX ↩︎",
    "tags": [],
    "title": "Boucles et débogueur",
    "uri": "/zc6/boucles-debug/index.html"
  },
  {
    "breadcrumb": "Soutien en programmation",
    "content": "Sujets ciblés Git et GitHub\nSemaine #?: Mardi ? de 12:00 à 13:30\nDépots local et distant Clone, push et pull",
    "description": "Sujets ciblés Git et GitHub\nSemaine #?: Mardi ? de 12:00 à 13:30\nDépots local et distant Clone, push et pull",
    "tags": [],
    "title": "Soutien pour le 3C3 (à confirmer)",
    "uri": "/zf5-h26/index.html"
  },
  {
    "breadcrumb": "Soutien en programmation \u003e \rSoutien pour le ZC6",
    "content": "Quand et où ? Mardi 2 décembre de 12:00 à 14:00 Local : B-3317",
    "description": "Quand et où ? Mardi 2 décembre de 12:00 à 14:00 Local : B-3317",
    "tags": [],
    "title": "Tableaux (à confirmer)",
    "uri": "/zc6/tableaux/index.html"
  },
  {
    "breadcrumb": "Soutien en programmation",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "breadcrumb": "Soutien en programmation",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tags",
    "uri": "/tags/index.html"
  }
]
