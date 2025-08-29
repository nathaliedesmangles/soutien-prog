+++
title = "Atelier : Trace d’exécution"
weight = 2
draft = true
+++

## 🎯 Objectifs pédagogiques

* Comprendre le rôle de la trace d’exécution comme outil de vérification.
* Construire un tableau de trace à partir d’un algorithme.
* Développer de la rigueur dans l’exécution pas-à-pas d’un algorithme.
* Identifier et corriger des erreurs grâce à la trace.

---

## ⏱️ Déroulement (1h30)

### 1. Introduction & rappel (10 min)

* L’enseignant projette un algorithme simple et sa trace complétée (exemple du produit avec taxes).
* Discussion rapide :

  * Pourquoi une trace d’exécution aide-t-elle à comprendre un algorithme ?
  * Quelles sont les étapes clés pour la construire ?
* Présentation de la **liste de vérification** (numéroter les lignes, ajouter une colonne console, etc.).

---

### 2. Exercice guidé en groupe (20 min)

**Algorithme proposé : calcul de la moyenne de deux notes**

```text
ALGORITHME MoyenneDeuxNotes
VARIABLES
note1, note2, moyenne TYPE NUMÉRIQUE
DÉBUT
1 AFFICHER("Entrez la première note")
2 LIRE(note1)
3 AFFICHER("Entrez la deuxième note")
4 LIRE(note2)
5 moyenne ← (note1 + note2) / 2
6 AFFICHER("La moyenne est ", moyenne)
FIN
```

**Tâches :**

* Construire collectivement la table de trace (enseignant au tableau ou projecteur).
* Supposer que l’utilisateur entre 70 puis 90.
* Vérifier étape par étape où apparaissent les changements.

👉 Résultat attendu :

* note1 = 70, note2 = 90, moyenne = 80
* Console affiche : *La moyenne est 80*

---

### 3. Exercice en binôme (25 min)

**Algorithme proposé : trouver le maximum de deux nombres**

```text
ALGORITHME MaxDeuxNombres
VARIABLES
a, b, max TYPE NUMÉRIQUE
DÉBUT
1 AFFICHER("Entrez le premier nombre")
2 LIRE(a)
3 AFFICHER("Entrez le deuxième nombre")
4 LIRE(b)
5 SI a > b ALORS
6     max ← a
7 SINON
8     max ← b
9 FINSI
10 AFFICHER("Le maximum est ", max)
FIN
```

**Consignes :**

1. Complétez le tableau de trace (en binôme).
2. Faites-le avec deux jeux de valeurs :

   * Cas 1 : a = 12, b = 20
   * Cas 2 : a = 25, b = 10
3. Comparez vos résultats avec un autre binôme pour vérifier la cohérence.

---

### 4. Exercice autonome (25 min)

**Algorithme proposé : calcul de la factorielle d’un entier n**
*(version simplifiée avec boucle)*

```text
ALGORITHME Factorielle
VARIABLES
n, i, fact TYPE NUMÉRIQUE
DÉBUT
1 AFFICHER("Entrez un nombre entier positif")
2 LIRE(n)
3 fact ← 1
4 POUR i ← 1 À n FAIRE
5     fact ← fact * i
6 FINPOUR
7 AFFICHER("La factorielle de ", n, " est ", fact)
FIN
```

**Tâches individuelles :**

1. Complétez le tableau de trace pour le cas **n = 4**.
2. Vérifiez que le résultat final affiché correspond bien à 24.
3. Identifiez les lignes où les variables changent à chaque itération.

---

### 5. Mise en commun & discussion (10 min)

* L’enseignant demande à 2-3 étudiants de présenter leur trace (sur tableau ou caméra doc).
* Discussion :

  * Quelles erreurs sont revenues fréquemment ?
  * Qu’est-ce qui vous a aidés à rester rigoureux ?
* Rappel : la trace est un **outil de vérification universel** (pas seulement pour l’examen, mais aussi pour déboguer).

---

## 📦 Matériel remis aux étudiants

* Fiche aide-mémoire : *liste de vérification pour construire une trace d’exécution*.
* Grilles vierges de tableau de trace (format papier ou PDF à remplir).
* Lien vers la vidéo explicative.

---

👉 Avec cette structure, les étudiants passent progressivement de l’observation guidée à l’autonomie complète.

Veux-tu que je te prépare aussi un **modèle de tableau de trace vierge (en .docx ou .pdf)** pour que tes étudiants puissent le remplir pendant l’atelier ?
