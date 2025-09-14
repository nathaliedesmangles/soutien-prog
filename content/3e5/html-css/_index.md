+++
title = "Chemins relatif vs absolu"
weight = 1
+++


## Quand et où ?

* Mardi 30 septembre de 12:00 à 14:00
* **Local** : B-3317


## Rappels

### Chemin absolu

* Contient **l’adresse complète** (depuis la racine du site ou une URL externe).
* Utilisé pour pointer vers un fichier **n’importe où sur le web**.
* **Exemples :**
  ```html
  <!-- Image -->
  <img src="https://exemple.com/images/logo.png">
  ```
* **Avantage** : toujours le même, peu importe la page.
* **Inconvénient** : moins flexible si tu déplaces ton projet.


### Chemin relatif

* Dépend de l’endroit où se trouve **le fichier actuel** (fichier où l'url est écrite).
* Utilisé à l’intérieur d’un projet.
* **Symboles utiles :**
  * `./` → le dossier courant (souvent implicite).
  * `../` → remonter d’un dossier.
  * `../../` → remonter de deux dossier, etc..
* **Exemples :**

  ```html
  <!-- Image dans le même dossier que le fichier actuel -->
  <img src="image.png">

  <!-- CSS dans un dossier voisin -->
  <link rel="stylesheet" href="../css/style.css">

  <!-- JS dans un sous-dossier -->
  <script src="./js/app.js"></script>

  <!-- image dans un sous-sous dossier -->
  <img src="../../images/galerie/photo.png" alt="Photo depuis sous-dossier">
  ```
* **Avantage** : portable, fonctionne si on déplace le projet.
* **Inconvénient** : peut devenir confus avec beaucoup de `../`.

## Exemples

### Schéma de dossiers

```
projet/
│── index.html
│── style.css
│── script.js
├── images/
│    └── photo.png
└── css/
     └── theme.css
```

### Chemins relatifs depuis index.html

```
<link rel="stylesheet" href="style.css">       <!-- même dossier -->
<script src="script.js"></script>              <!-- même dossier -->
<img src="images/photo.png">                   <!-- sous-dossier -->
<link rel="stylesheet" href="css/theme.css">   <!-- sous-dossier -->
```

### Chemins relatifs depuis css/theme.css

```
body {
  background-image: url("../images/photo.png"); /* remonter 1 dossier */
}
```

---

{{% notice style="accent" icon="stopwatch" title="À savoir"%}}
Les chemins **absolus** varient d'un système d'exploitation à l'autre, tandis que les chemins **relatifs** n'ont pas d'impact direct sur l'utilisation de chemins absolus. Par exemple:
* **Windows** utilise des lettres de lecteur et des barres obliques inversées (`\``), comme `C:\Dossier\Fichier.txt`, alors que 
* **les systèmes Unix (comme Linux ou macOS)** utilisent une barre oblique pour la racine et des barres obliques normales (`/`), par exemple `/dossier/fichier.txt`. 
{{% /notice %}}


---

## Atelier interactif

### Objectifs pédagogiques

1. Distinguer un chemin absolu d’un chemin relatif.
2. Utiliser correctement les chemins relatifs dans une structure de projet.
3. Repérer et corriger des erreurs fréquentes liées aux chemins.

---

### Fichier à télécharger

* **L'image** ![chat.png](./chat.png)	

### Fichiers à créer

* **Fichier `index.html`**
```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Atelier chemins</title>

  <!-- A compléter -->
  <link rel="stylesheet" href="???">

  <!-- A compléter -->
  <link rel="stylesheet" href="???">
</head>
<body>
  <h1>Atelier : chemins absolus vs relatifs</h1>

  <h2>Image locale (chemin relatif)</h2>
  <!-- A compléter -->
  <img src="???"> <!-- afficher chat.png -->

  <h2>Image externe (chemin absolu)</h2>
  <!-- A compléter -->
  <img src="???" alt="Image externe">

  <!-- A compléter -->
  <script src="???"></script>
</body>
</html>

```
* **Fichier `style.css`**

```css
/* À compléter */
body {
  font-family: Arial, sans-serif;
  margin: 20px;
  background-color: #eef;


}
```
* **Fichier `theme.css`**
```css
/* À compléter */
body {
  background-repeat: no-repeat;
  background-position: top right;
  background-size: 150px;


}
```

1. Créer un dossier `atelier_chemins/` avec la structure suivante :
   ```
   atelier_chemins/
   │── index.html
   │── style.css
   ├── images/
   │    └── chat.png
   └── css/
        └── theme.css
   ```

2. Dans `index.html`, complétez et tester :
   ```html
   <!-- A compléter -->
   <img src="???"> <!-- afficher chat.png -->
   ```

* Essayer avec un chemin relatif.
* Essayer avec un chemin absolu (vers une image en ligne, ex. `https://picsum.photos/200`).

3. Dans `index.html`, lier le fichier `style.css`.
4. Dans `style.css`, ajouter les règles suivantes pour le sélecteur `body` :
   ```css
   body {
     background-color: lightblue;
     background-image: url("images/chat.png"); /* volontairement faux */
   }
   ```
5. → Observer l’erreur !
6. Corriger avec le bon chemin relatif


**Discussion** : pourquoi l’erreur ?

7. Dans `css/theme.css`, ajouter :

   ```css
   body {
     background-image: url("./images/chat.png");
   }
   ```
8. Lier `theme.css` dans `index.html`.
9. Vérifier si l’image s’affiche.
10. Corriger avec le bon chemin relatif.

---

## Défi – Chemins relatifs et absolus

1. Créez un dossier de travail nommé **ArtGallerie**.
2. À l’intérieur, créez trois fichiers HTML :

   * `index.html`
   * `galerie.html`
   * `contact.html`
3. Vous devez organiser vos fichiers et utiliser **correctement les chemins relatifs et absolus** pour relier les pages et afficher les images.

---

## Page principale – `index.html`

* Doit contenir un **titre principal** (ex. : votre nom).
* Ajoutez deux **liens relatifs** vers :

  * la page `galerie.html`
  * la page `contact.html`
* Ajoutez aussi un **lien absolu** vers un site externe de votre choix (par exemple : `https://www.mbam.qc.ca/`).


## Page galerie – `galerie.html`

* Ajoutez un **titre “Galerie”**.
* Ajoutez au moins **3 images** :

  * 2 images avec un **chemin relatif** (par exemple, placez vos images dans un dossier `images/` et utilisez `src="images/..."`).
  * 1 image avec un **chemin absolu** (par exemple une image libre de droit en ligne).
* Ajoutez un **lien relatif** pour retourner vers `index.html`.


## Page contact – `contact.html`

* Ajoutez un **titre “Contact”**.
* Ajoutez une liste avec 2 éléments :

  * un lien absolu de type `mailto:` vers une fausse adresse courriel.
  * un lien absolu de type `tel:` vers un faux numéro de téléphone.
* Ajoutez un **lien relatif** pour retourner vers `index.html`.


---

## Conclusion

* Quand utiliser **chemin absolu** ? → ressources externes, URLs fixes.
* Quand utiliser **chemin relatif** ? → à l’intérieur du projet.
* Astuce : toujours vérifier **à partir du fichier actuel**.