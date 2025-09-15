+++
title = "Trace d'exécution et messages d'erreurs"
weight = 1
+++

## Quand et où ?

* Mardi 16 septembre de 12:00 à 14:00
* **Local** : B-3317

# Trace d'exécution

## Rappels

* La trace est un outil de vérification universel, pas seulement pour l’examen ou pour java, mais aussi pour déboguer n'importe quel programme écrit avec n'importe quel langage.
* Faire la trace d'un programme consiste à utiliser la liste de vérification, un tableau dans lequel on :
   * numérote les lignes correspondantes aux lignes du code entre **DÉBUT** et **FIN** de l'algorithme. 
   * inscrit **seulement les changements** dans les valeurs des variables après l’exécution de chaque ligne numérotée.
   * inclus la colonne Terminal/console pour indiquer les affichages dans le Terminal.

* **Pense-bête** : "Toujours inscrire les changements, toujours vérifier le Terminal/console".


## Mise en commun

  * Quelles erreurs vous semblent les plus fréquentes ?
  * Comment la trace permet-elle de les repérer rapidement ?

---

## Atelier - Trace

### Objectifs pédagogiques

* Savoir construire un tableau de trace pas-à-pas (tableau csv).
* Identifier les valeurs des variables à chaque étape.
* Utiliser la trace comme outil de débogage.
* Corriger des erreurs simples (mauvaises affectations, erreurs de calcul).

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
3. Écrire e code java et vérifier que le résultat affiché est bien *22*.

**Discussion** : que se passe-t-il si on oublie les parenthèses à la ligne 5 ?


### Algorithme 2: calcul de la surface d’un rectangle (petite erreur à corriger)

```java
1 import java.util.Scanner;
2
3 public class SurfaceRectangle {
4    public static void main(String[] args) {
5        Scanner sc = new Scanner(System.in);
6
7        int longueur, largeur, surface;
8
9        System.out.println("Entrez la longueur");
10       longueur = sc.nextInt();
11
12       System.out.println("Entrez la largeur");
13       largeur = sc.nextInt();
14
15       surface = longueur + largeur;
16
17       System.out.println("La surface est " + surface);
18
19       sc.close();
20    }
21}
```

**Tâches :**
1. Construisez la trace pour longueur = 5, largeur = 4.
2. Constatez le résultat affiché (*9*) au lieu de la valeur correcte (*20*).
3. En binôme, identifiez l’erreur et proposez la correction.
4. Refaire la trace avec l’algorithme corrigé.


### Algorithme 3: calcul du coût total d’un achat

```java
1 import java.util.Scanner;
2
3 public class AchatSimple {
4    public static void main(String[] args) {
5        Scanner sc = new Scanner(System.in);
6
7        double prix, total;
8        int quantite;
9
10        System.out.println("Entrez le prix du produit");
11        prix = sc.nextDouble();
12
13        System.out.println("Entrez la quantité");
14        quantite = sc.nextInt();
15
16        total = prix * quantite;
17
18        System.out.println("Le coût total est " + total);
19
20        sc.close();
21    }
22}
```

**Consignes :**

1. Faire la trace individuellement pour prix = 12 et quantite = 3.
2. Vérifier le résultat attendu (*36*).
3. Puis refaire la trace avec prix = 7,50 et quantite = 5.

<!--
[Corrigé](./traces_corrigés.pdf)
-->

---

# Débogage et erreurs fréquentes en Java avec VS Code

## Rappels

* **Indentation automatique** : sélectionne ton code puis `Maj + Alt + Shift + F` (Windows/Linux).
* **Erreurs soulignées** :
  * 🔴 **Rouge** = Erreur bloquante (syntaxique ou compilation).
  * 🔵 **Bleu** = Avertissement de norme / style (non bloquant).
  * Survoler ou cliquer sur le soulignement → voir le message détaillé.

## Types d’erreurs en Java

### 1. Erreurs de syntaxe (rouge dans VS Code)

**Exemple** :

```java
int x = 5
System.out.println(x);
```

> Oubli du `;` → message d’erreur avec numéro de ligne.


### 2. Erreurs de normes (bleu dans VS Code)

**Exemple** :

```java
int MaVariable = 5;  // convention camelCase non respectée
```

> **Message bleu** : "Nom de variable non conforme aux conventions".


### 3. Erreurs de logique (programme s’exécute mais mauvais résultat)

> Utiliser **trace d’exécution** ou le **débogueur** (points d’arrêt, suivi ligne par ligne).

**Exemple** : calcul de périmètre :

```java
perimetre = longueur + largeur * 2;   // oubli des parenthèses
```

Résultat erroné. La **trace** montre l’évolution incorrecte des variables.


### 4. Erreurs d’exécution

Programme compile mais plante en cours d’exécution.  

**Exemple** (tableaux: notion vue plus tard cette session):

```java
int[] tab = new int[3];
System.out.println(tab[5]); 	// Index 5 hors limite
```

> Erreur dans le **Terminal** avec indication de la ligne.


## Erreurs fréquentes

* **Erreur d'entrées avec `Scanner`- Problème courant avec `nextInt()` et `nextLine()` :**

```java
Scanner sc = new Scanner(System.in);
int age = sc.nextInt();
String nom = sc.nextLine(); // ⚠️ saute la saisie
```

> **Solution** : ajouter un `nextLine()` **vide** après `nextInt()` pour consommer le retour chariot.

```java
int age = sc.nextInt();
sc.nextLine();  // vide le buffer
String nom = sc.nextLine();
```

* **Portée des variables** : variable déclarée dans une méthode n’est pas accessible ailleurs.
* **Nom des variables ≠ nom des paramètres** :

```java
public static void afficherMessage(String message) {
    String message = "Bonjour"; // redéclaration interdite
}
```

* **Oublier d’initialiser une variable** :

```java
String texte;
System.out.println(texte); // Variable peut ne pas avoir été initialisée
```

> **Initialiser** : `String texte = null;` ou `= ""`.


* **Affichage formaté** :

**Exemple correct** :

```java
int age = 20;
System.out.printf("J’ai %d ans\n", age);
```

**Mauvais usage avec type incompatible** :

```java
String nom = "Olivier";
System.out.printf("Nom : %d", nom); // type invalide
```

---

## Atelier - Erreurs

### Étape 1 — Corriger le code

Télécharger le fichier `AtelierErreurs.java` : [AtelierErreurs.java](./AtelierErreurs.java)

Le fichier contient le code suivant:

```java
import java.util.Scanner;

public class AtelierErreurs {
    public static void main(String[] args) {
        Scanner clavier = new Scanner(System.in);

        // 1. Oublier d'initialiser une variable
        int longueur, largeur, perimetre;

        System.out.println("Entrez la longueur : ");
        longueur = clavier.nextInt();

        System.out.println("Entrez la largeur : ");
        largeur = clavier.nextInt();

        // 2. Erreur de logique : manque de parenthèses
        perimetre = longueur + largeur * 2;

        // 3. Erreur de formatage
        System.out.printf("Le périmètre est : %s\n", perimetre);

        // 4. Erreur d’exécution : index hors borne
        int[] tableau = new int[2];
        System.out.println(tableau[5]);

        clavier.close();
    }
}
```

### Étape 2 — Travail demandé

1. **Compiler et exécuter** le programme.
2. **Capturer les erreurs** (copier/coller ou capture d’écran).
3. **Identifier le type d’erreur** (syntaxe, norme, logique, exécution).
4. **Corriger** le programme étape par étape.
5. **Vérifier le résultat final** (avec trace et exécution).


<!--

* [Atelier Traces d'exécution](./atelier_trace.pdf)
	* [Fichier .csv pour l'exemple A](./trace_exemple_A.csv)
	* [Fichier .csv pour l'exemple B](./trace_exemple_B.csv)


* [Atelier Erreurs fréquentes](./atelier_erreurs.pdf)
-->