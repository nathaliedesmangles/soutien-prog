+++
title = "Trace d'exécution et messages d'erreurs"
weight = 1
+++

## Quand et où ?

* Mardi 16 septembre de 12:00 à 14:00
* **Local** : B-3317

## Rappels

* La trace est un outil de vérification universel, pas seulement pour l’examen ou pour java, mais aussi pour déboguer n'importe quel programme écrit avec n'importe quel langage.
* Faire la trace d'un programme consiste à utiliser la liste de vérification, un tableau dans lequel on :
   * numérote les lignes correspondantes aux lignes du code. 
   * inscrit **seulement les changements** dans les valeurs des variables après l’exécution de chaque ligne numérotée.
   * inclus la colonne Terminal/console pour indiquer les affichages dans le Terminal.

---

## Atelier interactif

### Objectifs pédagogiques

* Savoir construire un tableau de trace pas-à-pas.
* Identifier les valeurs des variables à chaque étape.
* Utiliser la trace comme outil de débogage.
* Corriger des erreurs simples (mauvaises affectations, erreurs de calcul).


### Matériel fourni

* Modèle vierge de tableau de trace (.csv).

---

### Algorithme 1: calcul du périmètre d’un rectangle

```text
ALGORITHME PerimetreRectangle
VARIABLES
longueur, largeur, perimetre TYPE NUMÉRIQUE
DÉBUT
1 AFFICHER("Entrez la longueur")
2 LIRE(longueur)
3 AFFICHER("Entrez la largeur")
4 LIRE(largeur)
5 perimetre ← (longueur + largeur) * 2
6 AFFICHER("Le périmètre est ", perimetre)
FIN
```

**Consignes :**

1. Compléter la trace.
2. Valeurs d’entrée : longueur = 8, largeur = 3.
3. Vérifier que le résultat affiché est bien *22*.

* **Pense-bête** : "Toujours inscrire les changements, toujours vérifier le Terminal/console".

**Discussion** : que se passe-t-il si on oublie les parenthèses à la ligne 5 ?

---

### Algorithme 2: calcul de la surface d’un rectangle (petite erreur à corriger)

```text
ALGORITHME SurfaceRectangle
VARIABLES
longueur, largeur, surface TYPE NUMÉRIQUE
DÉBUT
1 AFFICHER("Entrez la longueur")
2 LIRE(longueur)
3 AFFICHER("Entrez la largeur")
4 LIRE(largeur)
5 surface ← longueur + largeur   // erreur : devrait être multiplication
6 AFFICHER("La surface est ", surface)
FIN
```

**Tâches :**
1. Construisez la trace pour longueur = 5, largeur = 4.
2. Constatez le résultat affiché (*9*) au lieu de la valeur correcte (*20*).
3. En binôme, identifiez l’erreur et proposez la correction.
4. Refaire la trace avec l’algorithme corrigé.

* **Pense-bête** : "Toujours inscrire les changements, toujours vérifier le Terminal/console".

---

### Algorithme 3: calcul du coût total d’un achat

```text
ALGORITHME AchatSimple
VARIABLES
prix, quantite, total TYPE NUMÉRIQUE
DÉBUT
1 AFFICHER("Entrez le prix du produit")
2 LIRE(prix)
3 AFFICHER("Entrez la quantité")
4 LIRE(quantite)
5 total ← prix * quantite
6 AFFICHER("Le coût total est ", total)
FIN
```

**Consignes :**

1. Faire la trace individuellement pour prix = 12 et quantite = 3.
2. Vérifier le résultat attendu (*36*).
3. Puis refaire la trace avec prix = 7,50 et quantite = 5.

* **Pense-bête** : "Toujours inscrire les changements, toujours vérifier le Terminal/console".

---

### Mise en commun (5 min)

* Questions aux étudiants :

  * Quelles erreurs vous semblent les plus fréquentes (ordre des opérations, mauvaise formule, mauvaise lecture) ?
  * Comment la trace permet-elle de les repérer rapidement ?


<!--

* [Atelier Traces d'exécution](./atelier_trace.pdf)
	* [Fichier .csv pour l'exemple A](./trace_exemple_A.csv)
	* [Fichier .csv pour l'exemple B](./trace_exemple_B.csv)


* [Atelier Erreurs fréquentes](./atelier_erreurs.pdf)
-->