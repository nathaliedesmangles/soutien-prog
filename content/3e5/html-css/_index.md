+++
title = "Chemins relatif vs absolu"
weight = 1
+++


## Quand et où ?

* Mardi 30 septembre de 12:00 à 14:00
* **Local** : B-3317


## Fiches aide-mémoire

### Fiche 1 – Chemins absolus vs relatifs (HTML, CSS, JS)

#### Chemin absolu

* Contient **l’adresse complète** (depuis la racine du site ou une URL externe).
* Utilisé pour pointer vers un fichier **n’importe où sur le web**.
* **Exemples :**

  ```html
  <!-- Image -->
  <img src="https://exemple.com/images/logo.png">

  <!-- Lien CSS -->
  <link rel="stylesheet" href="/styles/global.css">
  ```
* **Avantage** : toujours le même, peu importe la page.
* **Inconvénient** : moins flexible si tu déplaces ton projet.


#### Chemin relatif

* Dépend de l’endroit où se trouve **le fichier actuel**.
* Utilisé à l’intérieur d’un projet.
* **Symboles utiles :**

  * `./` → le dossier courant (souvent implicite).
  * `../` → remonter d’un dossier.
* **Exemples :**

  ```html
  <!-- Image dans le même dossier -->
  <img src="image.png">

  <!-- CSS dans un dossier voisin -->
  <link rel="stylesheet" href="../css/style.css">

  <!-- JS dans un sous-dossier -->
  <script src="./js/app.js"></script>
  ```
* **Avantage** : portable, fonctionne si on déplace le projet.
* **Inconvénient** : peut devenir confus avec beaucoup de `../`.


### Fiche 2 – HTML

#### Inclure une image

```html
<!-- Absolu -->
<img src="https://mon-site.com/images/photo.jpg">

<!-- Relatif -->
<img src="images/photo.jpg"> <!-- même dossier -->
<img src="../assets/photo.jpg"> <!-- remonter -->
```

#### Inclure un lien

```html
<a href="https://exemple.com/page.html">Lien externe</a>
<a href="page2.html">Lien interne relatif</a>
```


### Fiche 3 – CSS

#### Inclure une feuille de style

```html
<!-- Absolu -->
<link rel="stylesheet" href="https://cdn.exemple.com/style.css">

<!-- Relatif -->
<link rel="stylesheet" href="css/style.css">
```

#### Lien vers une image dans CSS

```css
/* Absolu */
body {
  background-image: url("https://mon-site.com/images/bg.png");
}

/* Relatif (par rapport au fichier CSS, pas HTML !) */
body {
  background-image: url("../images/bg.png");
}
```


### Fiche 4 – JavaScript

### Inclure un script

```html
<!-- Absolu -->
<script src="https://cdn.jsdelivr.net/npm/library.js"></script>

<!-- Relatif -->
<script src="./js/app.js"></script>
```

#### Charger une ressource via JS

```js
// Absolu
fetch("https://api.exemple.com/data")

// Relatif (par rapport à la page HTML)
fetch("./data/data.json")
```

---

**Règle d’or** :

* **Chemin absolu** → pour ressources externes ou constantes.
* **Chemin relatif** → pour ton projet local et portable.


## Ateliers intéractifs

### Fichiers télécharger



