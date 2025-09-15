var relearn_searchindex = [
  {
    "breadcrumb": "Soutien en programmation \u003e \rSoutien pour le 3E5",
    "content": "Quand et où ? Mardi 30 septembre de 12:00 à 14:00 Local : B-3317 Rappels Chemin absolu Contient l’adresse complète (depuis la racine du site ou une URL externe). Utilisé pour pointer vers un fichier n’importe où sur le web. Exemples : \u003c!-- Image --\u003e \u003cimg src=\"https://exemple.com/images/logo.png\"\u003e\rAvantage : toujours le même, peu importe la page. Inconvénient : moins flexible si tu déplaces ton projet. Chemin relatif Dépend de l’endroit où se trouve le fichier actuel (fichier où l’url est écrite).\nUtilisé à l’intérieur d’un projet.\nSymboles utiles :\n./ → le dossier courant (souvent implicite). ../ → remonter d’un dossier. ../../ → remonter de deux dossier, etc.. Exemples :\n\u003c!-- Image dans le même dossier que le fichier actuel --\u003e \u003cimg src=\"image.png\"\u003e \u003c!-- CSS dans un dossier voisin --\u003e \u003clink rel=\"stylesheet\" href=\"../css/style.css\"\u003e \u003c!-- JS dans un sous-dossier --\u003e \u003cscript src=\"./js/app.js\"\u003e\u003c/script\u003e \u003c!-- image dans un sous-sous dossier --\u003e \u003cimg src=\"../../images/galerie/photo.png\" alt=\"Photo depuis sous-dossier\"\u003e\rAvantage : portable, fonctionne si on déplace le projet.\nInconvénient : peut devenir confus avec beaucoup de ../.\nExemples Schéma de dossiers projet/\r│── index.html\r│── style.css\r│── script.js\r├── images/\r│ └── photo.png\r└── css/\r└── theme.css\rChemins relatifs depuis index.html \u003clink rel=\"stylesheet\" href=\"style.css\"\u003e \u003c!-- même dossier --\u003e\r\u003cscript src=\"script.js\"\u003e\u003c/script\u003e \u003c!-- même dossier --\u003e\r\u003cimg src=\"images/photo.png\"\u003e \u003c!-- sous-dossier --\u003e\r\u003clink rel=\"stylesheet\" href=\"css/theme.css\"\u003e \u003c!-- sous-dossier --\u003e\rChemins relatifs depuis css/theme.css body {\rbackground-image: url(\"../images/photo.png\"); /* remonter 1 dossier */\r}\rÀ savoir\rLes chemins absolus varient d’un système d’exploitation à l’autre, tandis que les chemins relatifs n’ont pas d’impact direct sur l’utilisation de chemins absolus. Par exemple:\nWindows utilise des lettres de lecteur et des barres obliques inversées (\\``), comme C:\\Dossier\\Fichier.txt`, alors que les systèmes Unix (comme Linux ou macOS) utilisent une barre oblique pour la racine et des barres obliques normales (/), par exemple /dossier/fichier.txt. Atelier interactif Objectifs pédagogiques Distinguer un chemin absolu d’un chemin relatif. Utiliser correctement les chemins relatifs dans une structure de projet. Repérer et corriger des erreurs fréquentes liées aux chemins. Fichier à télécharger L’image Fichiers à créer Fichier index.html \u003c!DOCTYPE html\u003e \u003chtml lang=\"fr\"\u003e \u003chead\u003e \u003cmeta charset=\"UTF-8\"\u003e \u003ctitle\u003eAtelier chemins\u003c/title\u003e \u003c!-- A compléter --\u003e \u003clink rel=\"stylesheet\" href=\"???\"\u003e \u003c!-- A compléter --\u003e \u003clink rel=\"stylesheet\" href=\"???\"\u003e \u003c/head\u003e \u003cbody\u003e \u003ch1\u003eAtelier : chemins absolus vs relatifs\u003c/h1\u003e \u003ch2\u003eImage locale (chemin relatif)\u003c/h2\u003e \u003c!-- A compléter --\u003e \u003cimg src=\"???\"\u003e \u003c!-- afficher chat.png --\u003e \u003ch2\u003eImage externe (chemin absolu)\u003c/h2\u003e \u003c!-- A compléter --\u003e \u003cimg src=\"???\" alt=\"Image externe\"\u003e \u003c!-- A compléter --\u003e \u003cscript src=\"???\"\u003e\u003c/script\u003e \u003c/body\u003e \u003c/html\u003e\rFichier style.css /* À compléter */ body { font-family: Arial, sans-serif; margin: 20px; background-color: #eef; }\rFichier theme.css /* À compléter */ body { background-repeat: no-repeat; background-position: top right; background-size: 150px; }\rCréer un dossier atelier_chemins/ avec la structure suivante :\natelier_chemins/\r│── index.html\r│── style.css\r├── images/\r│ └── chat.png\r└── css/\r└── theme.css\rDans index.html, complétez et tester :\n\u003c!-- A compléter --\u003e \u003cimg src=\"???\"\u003e \u003c!-- afficher chat.png --\u003e\rEssayer avec un chemin relatif. Essayer avec un chemin absolu (vers une image en ligne, ex. https://picsum.photos/200). Dans index.html, lier le fichier style.css. Dans style.css, ajouter les règles suivantes pour le sélecteur body : body { background-color: lightblue; background-image: url(\"images/chat.png\"); /* volontairement faux */ }\r→ Observer l’erreur ! Corriger avec le bon chemin relatif Discussion : pourquoi l’erreur ?\nDans css/theme.css, ajouter :\nbody { background-image: url(\"./images/chat.png\"); }\rLier theme.css dans index.html.\nVérifier si l’image s’affiche.\nCorriger avec le bon chemin relatif.\nDéfi – Chemins relatifs et absolus Créez un dossier de travail nommé ArtGallerie.\nÀ l’intérieur, créez trois fichiers HTML :\nindex.html galerie.html contact.html Vous devez organiser vos fichiers et utiliser correctement les chemins relatifs et absolus pour relier les pages et afficher les images.\nPage principale – index.html Doit contenir un titre principal (ex. : votre nom).\nAjoutez deux liens relatifs vers :\nla page galerie.html la page contact.html Ajoutez aussi un lien absolu vers un site externe de votre choix (par exemple : https://www.mbam.qc.ca/).\nPage galerie – galerie.html Ajoutez un titre “Galerie”.\nAjoutez au moins 3 images :\n2 images avec un chemin relatif (par exemple, placez vos images dans un dossier images/ et utilisez src=\"images/...\"). 1 image avec un chemin absolu (par exemple une image libre de droit en ligne). Ajoutez un lien relatif pour retourner vers index.html.\nPage contact – contact.html Ajoutez un titre “Contact”.\nAjoutez une liste avec 2 éléments :\nun lien absolu de type mailto: vers une fausse adresse courriel. un lien absolu de type tel: vers un faux numéro de téléphone. Ajoutez un lien relatif pour retourner vers index.html.\nConclusion Quand utiliser chemin absolu ? → ressources externes, URLs fixes. Quand utiliser chemin relatif ? → à l’intérieur du projet. Astuce : toujours vérifier à partir du fichier actuel.",
    "description": "Quand et où ? Mardi 30 septembre de 12:00 à 14:00 Local : B-3317 Rappels Chemin absolu Contient l’adresse complète (depuis la racine du site ou une URL externe). Utilisé pour pointer vers un fichier n’importe où sur le web. Exemples : \u003c!-- Image --\u003e \u003cimg src=\"https://exemple.com/images/logo.png\"\u003e\rAvantage : toujours le même, peu importe la page. Inconvénient : moins flexible si tu déplaces ton projet. Chemin relatif Dépend de l’endroit où se trouve le fichier actuel (fichier où l’url est écrite).",
    "tags": [],
    "title": "Chemins relatif vs absolu",
    "uri": "/3e5/html-css/index.html"
  },
  {
    "breadcrumb": "",
    "content": "Objectifs Offrir un accompagnement régulier, personnalisé et ciblé aux étudiant·es ayant des difficultés ou ayant échoué un cours de programmation, afin d’augmenter leur compréhension des notions clés et leur réussite des cours de programmation (ZC6 et 3E5).\nFormat de l’activité Rencontres en petits groupes (8 à 15 étudiants·es maximum). Approche interactive basée sur les questions et lacunes des étudiant·es. Révision de concepts fondamentaux et exercices pratiques. Distribution de résumés de concepts. Possibilité d’avoir un plan d’intervention personnalisé. Où et Quand ? Quand : Mardi de 12:00 à 14:00 (environ aux 3 semaines) Les dates sont inscrites pour chacun des sujets ciblés (voir Plus de détails)\nLocal : B-3317 (8 à 15 étudiant.e.s) Soutien en Java (ZC6) Plus de détails\nSoutien en html, css et JavaScript (3E5) Plus de détails",
    "description": "Objectifs Offrir un accompagnement régulier, personnalisé et ciblé aux étudiant·es ayant des difficultés ou ayant échoué un cours de programmation, afin d’augmenter leur compréhension des notions clés et leur réussite des cours de programmation (ZC6 et 3E5).\nFormat de l’activité Rencontres en petits groupes (8 à 15 étudiants·es maximum). Approche interactive basée sur les questions et lacunes des étudiant·es. Révision de concepts fondamentaux et exercices pratiques. Distribution de résumés de concepts.",
    "tags": [],
    "title": "Soutien en programmation",
    "uri": "/index.html"
  },
  {
    "breadcrumb": "Soutien en programmation",
    "content": "Sujets ciblés Semaine #4: Mardi 16 septembre\nTrace d’exécution et messages d’erreurs\nSemaine #7: Mardi 14 octobre (à confirmer)\nSous-programme et structures conditionnelles\nSemaine #11: Mardi 13 novembre (à confirmer)\nBoucles et débogueur",
    "description": "Sujets ciblés Semaine #4: Mardi 16 septembre\nTrace d’exécution et messages d’erreurs\nSemaine #7: Mardi 14 octobre (à confirmer)\nSous-programme et structures conditionnelles\nSemaine #11: Mardi 13 novembre (à confirmer)\nBoucles et débogueur",
    "tags": [],
    "title": "Soutien pour le ZC6",
    "uri": "/zc6/index.html"
  },
  {
    "breadcrumb": "Soutien en programmation \u003e \rSoutien pour le ZC6",
    "content": "Quand et où ? Mardi 16 septembre de 12:00 à 14:00 Local : B-3317 Rappels La trace est un outil de vérification universel, pas seulement pour l’examen ou pour java, mais aussi pour déboguer n’importe quel programme écrit avec n’importe quel langage.\nFaire la trace d’un programme consiste à utiliser la liste de vérification, un tableau dans lequel on :\nnumérote les lignes correspondantes aux lignes du code entre DÉBUT et FIN de l’algorithme. inscrit seulement les changements dans les valeurs des variables après l’exécution de chaque ligne numérotée. inclus la colonne Terminal/console pour indiquer les affichages dans le Terminal. Pense-bête : “Toujours inscrire les changements, toujours vérifier le Terminal/console”.\nMise en commun Quelles erreurs vous semblent les plus fréquentes ? Comment la trace permet-elle de les repérer rapidement ? Atelier interactif Objectifs pédagogiques Savoir construire un tableau de trace pas-à-pas (tableau csv). Identifier les valeurs des variables à chaque étape. Utiliser la trace comme outil de débogage. Corriger des erreurs simples (mauvaises affectations, erreurs de calcul). Algorithme 1: calcul du périmètre d’un rectangle ALGORITHME PerimetreRectangle VARIABLES longueur, largeur, perimetre TYPE NUMÉRIQUE DÉBUT 1 AFFICHER(\"Entrez la longueur\") 2 LIRE(longueur) 3 AFFICHER(\"Entrez la largeur\") 4 LIRE(largeur) 5 perimetre ← (longueur + largeur) * 2 6 AFFICHER(\"Le périmètre est \", perimetre) FIN\rConsignes :\nCompléter la trace. Valeurs d’entrée : longueur = 8, largeur = 3. Écrire e code java et vérifier que le résultat affiché est bien 22. Discussion : que se passe-t-il si on oublie les parenthèses à la ligne 5 ?\nAlgorithme 2: calcul de la surface d’un rectangle (petite erreur à corriger) 1 import java.util.Scanner; 2 3 public class SurfaceRectangle { 4 public static void main(String[] args) { 5 Scanner sc = new Scanner(System.in); 6 7 int longueur, largeur, surface; 8 9 System.out.println(\"Entrez la longueur\"); 10 longueur = sc.nextInt(); 11 12 System.out.println(\"Entrez la largeur\"); 13 largeur = sc.nextInt(); 14 15 surface = longueur + largeur; 16 17 System.out.println(\"La surface est \" + surface); 18 19 sc.close(); 20 } 21}\rTâches :\nConstruisez la trace pour longueur = 5, largeur = 4. Constatez le résultat affiché (9) au lieu de la valeur correcte (20). En binôme, identifiez l’erreur et proposez la correction. Refaire la trace avec l’algorithme corrigé. Algorithme 3: calcul du coût total d’un achat 1 import java.util.Scanner; 2 3 public class AchatSimple { 4 public static void main(String[] args) { 5 Scanner sc = new Scanner(System.in); 6 7 double prix, total; 8 int quantite; 9 10 System.out.println(\"Entrez le prix du produit\"); 11 prix = sc.nextDouble(); 12 13 System.out.println(\"Entrez la quantité\"); 14 quantite = sc.nextInt(); 15 16 total = prix * quantite; 17 18 System.out.println(\"Le coût total est \" + total); 19 20 sc.close(); 21 } 22}\rConsignes :\nFaire la trace individuellement pour prix = 12 et quantite = 3. Vérifier le résultat attendu (36). Puis refaire la trace avec prix = 7,50 et quantite = 5.",
    "description": "Quand et où ? Mardi 16 septembre de 12:00 à 14:00 Local : B-3317 Rappels La trace est un outil de vérification universel, pas seulement pour l’examen ou pour java, mais aussi pour déboguer n’importe quel programme écrit avec n’importe quel langage.\nFaire la trace d’un programme consiste à utiliser la liste de vérification, un tableau dans lequel on :\nnumérote les lignes correspondantes aux lignes du code entre DÉBUT et FIN de l’algorithme.",
    "tags": [],
    "title": "Trace d'exécution et messages d'erreurs",
    "uri": "/zc6/trace/index.html"
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
    "content": "Sujets ciblés Semaine #6: Mardi 30 septembre\nChemins relatif vs absolu\nSemaine #13: Mardi 25 octobre (sujets et date à confirmer)\nJavaScript",
    "description": "Sujets ciblés Semaine #6: Mardi 30 septembre\nChemins relatif vs absolu\nSemaine #13: Mardi 25 octobre (sujets et date à confirmer)\nJavaScript",
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
