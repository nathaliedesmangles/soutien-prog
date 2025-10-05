+++
title = "Préparation de feuilles de notes pour un examen (Java)"
weight = 6
+++

## Objectifs pédagogiques

* Savoir identifier les **éléments essentiels** à mettre sur une feuille de notes.
* Comprendre comment organiser l’information pour qu’elle soit **utile rapidement** pendant l’examen.
* Pratiquer la **mise en forme** d’une feuille de notes claire et synthétique.


## 1. Introduction

* **Discussion rapide** : « Quand vous avez le droit à une feuille de notes, qu’est-ce qui est le plus important : écrire *tout* ou écrire *l’essentiel* ? »


  * Une feuille de notes n’est pas un manuel → c’est un **aide-mémoire**.
  * Elle doit être **lisible en moins de 10 secondes** pour trouver ce qu’on cherche.


## 2. Contenu recommandé sur la feuille

### a) **Syntaxe de base**

* Structure minimale d’un programme Java :

```java
public class Main {
    public static void main(String[] args) {
        // code ici
    }
}
```

* Types primitifs : `int`, `double`, `boolean`, `char`…
* Déclaration d’une variable : `int x = 5;`
* Conditions : `if / else if / else`
* Boucles : `for`, `while`

### b) **Méthodes**

* Structure :

```java
public static retour nomMethode(type param) {
    // code
    return valeur;
}
```

* Exemple simple :

```java
public static int carre(int x) {
    return x * x;
}
```
<!--
### c) **Classes et objets (simplifié)**

* Déclaration d’une classe :

```java
public class Etudiant {
    String nom;
    int age;
}
```

* Création d’un objet :

```java
Etudiant e = new Etudiant();
e.nom = "Alex";
```

### d) **Tableaux**

```java
int[] notes = {12, 15, 18};
System.out.println(notes[0]); // affiche 12
```
-->


## 3. Organisation de la feuille

* Conseiller une mise en page **par blocs thématiques** :

  1. Syntaxe générale (structure du programme, types, boucles)
  2. Méthodes
  3. Astuces personnelles (ex. : erreurs fréquentes corrigées)

* Utiliser :

  * **Couleurs ou surlignage** pour les mots-clés (`public`, `static`, `return`).
  * **Exemples courts** plutôt que longues explications.


## 4. Atelier pratique

### Exercice guidé :

1. Distribuer une mini-banque de concepts Java (ex. syntaxe, boucle, tableau, méthode).
2. Demander aux étudiants de choisir **les 5 plus importants** qu’ils veulent mettre sur leur feuille.
3. Leur faire rédiger ces éléments **sous forme de mini-exemples**.
4. Faire partager en groupe : chaque étudiant montre un bout de sa feuille → discussion sur la clarté.

---

## 5. Conclusion

* Insister sur :

  * La feuille de notes = **mots-clés + exemples minimaux**.
  * L’important est de **savoir utiliser** la feuille, pas seulement de la recopier.
* Astuce finale : « En préparant votre feuille de notes, vous révisez déjà une partie de l’examen ! »

---

# Exemple de feuille

## Recto

### Structure de base d’un programme

```java
public class Main {
    public static void main(String[] args) {
        // code ici
    }
}
```

### Types primitifs

* `int` (entier), `double` (décimal), `boolean` (true/false), `char` (caractère)
* Exemple :

```java
int age = 20;
double pi = 3.14;
boolean ok = true;
char lettre = 'A';
```

### Opérateurs

* Arithmétiques : `+ - * / %`
* Comparaison : `== != > < >= <=`
* Logiques : `&&` (et), `||` (ou), `!` (non)

### Conditions

```java
if (x > 0) {
    System.out.println("Positif");
} else if (x == 0) {
    System.out.println("Nul");
} else {
    System.out.println("Négatif");
}
```

### Boucles

```java
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}

int j = 0;
while (j < 5) {
    System.out.println(j);
    j++;
}
```

---

## Verso

### Méthodes

Structure :

```java
public static retour nomMethode(type param) {
    // instructions
    return valeur;
}
```

Exemple :

```java
public static int carre(int x) {
    return x * x;
}
```

### Entrées / Sorties

```java
import java.util.Scanner;

Scanner sc = new Scanner(System.in);
System.out.print("Entrez un nombre: ");
int n = sc.nextInt();
System.out.println("Vous avez tapé: " + n);
```

### Astuces fréquentes

* **Index des tableaux** commence à **0**.
* `==` pour comparer les nombres, mais `equals()` pour comparer les chaînes :

```java
if (nom.equals("Alice")) { ... }
```

* Erreurs classiques :

  * Oublier `;` à la fin d’une ligne.
  * Confondre `=` (affectation) et `==` (comparaison).

