+++
title = "Préparation de feuilles de notes pour un examen (Java)"
weight = 6
+++

## Objectifs pédagogiques

* Savoir identifier les **éléments essentiels** à mettre sur une feuille de notes.
* Comprendre comment organiser l’information pour qu’elle soit **utile rapidement** pendant l’examen.
* Pratiquer la **mise en forme** d’une feuille de notes claire et synthétique.


## Introduction: Rôle d'une feuille de note

* **Discussion rapide** : « Quand vous avez le droit à une feuille de notes, qu’est-ce qui est le plus important : écrire *tout* ou écrire *l’essentiel* ? »

  * Une feuille de notes n’est pas un manuel → c’est un **aide-mémoire**.
  * Elle doit être **lisible en moins de 10 secondes** pour trouver ce qu’on cherche.

## Identifier les éléments essentiels ?

* Il faut les identifier par sujet
* Il faut se questionner sur l'utilité, le rôle de chaque élément couvert, afin d'identifier son "'essentialité".

## Lister les sujets évalués dans l'examen 

* Incluant ceux évalués dans un examen antérieur
> En programmation, TOUT est LIÉ

### Questions à se poser pour chacun des sujets

##### **1. Variables, types, entrée/sorties et fonctions de base**

* Quels sont les **types de base** utilisés en Java (`int`, `double`, `boolean`, `String`) ?
* Comment **déclarer et initialiser** une variable ? (syntaxe exacte, point-virgule inclus)
* Quelle est la **différence entre affectation (`=`) et comparaison (`==`) ?
* Comment faire une **lecture clavier** (`Scanner` et `import java.util.Scanner;`) et un **affichage console** (`System.out.print()` ou `println()`) ?
* Quels sont les **symboles de calcul** à connaître : `+`, `-`, `*`, `/`, `%`
  * **division entière (attention à `int / int`!)**   
* Quelles **fonctions de base** pourraient être utiles (conversion, arrondi, etc.) ?
* Comment **convertir un texte en nombre** (`Integer.parseInt()`, `Double.parseDouble()`) ?
* Quels **pièges fréquents** dois-je noter (ex. oublier d’importer `Scanner`, mauvais type, point-virgule manquant) ?

```java
// Déclaration et initialisation
int age = 20;
double prix = 4.99;
boolean majeur = true;
String prenom = "Nathalie";

// Affichage console
System.out.println("Bonjour " + prenom + ", tu as " + age + " ans.");

// Lecture clavier
import java.util.Scanner;
Scanner clavier = new Scanner(System.in);
System.out.print("Entre ton âge : ");
int ageSaisi = clavier.nextInt();
```

##### **2. Trace d'exécution**

* à qoi sert de faire une trace d'exécution d'un algorithme ?
* En quoi consiste la trace d'exécution ?
   * Faire un tableau dans lequel on :
        * numérote les lignes correspondantes aux lignes du code entre DÉBUT et FIN de l’algorithme.
        * inscrit seulement les changements dans les **valeurs des variables après l’exécution** de chaque **ligne numérotée**.
        * inclus la colonne **Terminal/console** pour indiquer les affichages dans le **Terminal**.
**Pense-bête** : “Toujours inscrire les changements, toujours vérifier le Terminal/console”.

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
1. Faire la trace.
2. Valeurs d’entrée : longueur = 8, largeur = 3.
3. Écrire e code java et vérifier que le résultat affiché est bien 22.

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
1. Construisez la trace pour longueur = 5, largeur = 4.
2. Constatez le résultat affiché (9) au lieu de la valeur correcte (20).
3. identifiez l’erreur et proposez la correction.
4. Refaire la trace avec l’algorithme corrigé.
Trace:
```text

```

#### **3. Algorithmes simples et pseudo-code**

* Qu’est-ce qu’un **algorithme** ?
  → Une suite d’étapes logiques qui permettent de résoudre un problème de manière systématique.
  Exemple :
  > Calculer la moyenne de deux nombres :
  >
  > 1. Lire les deux nombres
  > 2. Calculer la moyenne
  > 3. Afficher le résultat

* Comment reconnaître la **structure d’un pseudo-code** :
  * **Entrées** → ce qu’on demande à l’utilisateur
  * **Traitements** → les calculs ou comparaisons
  * **Sorties** → ce qu’on affiche à l’écran

  Exemple :
  ```text
  DEBUT
      LIRE a, b
      somme ← a + b
      ECRIRE somme
  FIN
  ```

  En Java :
  ```java
  Scanner sc = new Scanner(System.in);
  int a = sc.nextInt();	//https://www.w3schools.com/java/ref_scanner_next.asp
  int b = sc.nextInt();
  int somme = a + b;
  System.out.println(somme);
  ```

* Quels **mots-clés du pseudo-code** correspondent à Java :

  | Pseudo-code          | Java                   |
  | -------------------- | ---------------------- |
  | `DEBUT / FIN`        | `{ }`                  |
  | `ECRIRE`             | `System.out.println()` |
  | `LIRE`               | `Scanner`              |
  | `←`                  | `=`                    |
  | `SI...ALORS...SINON` | `if...else`            |

  ⚠️ **Piège fréquent** : oublier le point-virgule `;` à la fin d’une instruction Java, ou confondre `=` (affectation) et `==` (comparaison).


* Comment traduire les **opérations courantes** :
  * `a ← b DIV c` → `a = b / c;` (⚠️ division entière en Java si `b` et `c` sont des `int`)
  * `a ← b MOD c` → `a = b % c;`
  * `NON (x > 0)` → `!(x > 0)`


* Quels **petits algorithmes types**:

  * **Calcul de moyenne**
    ```java
    moyenne = (a + b + c) / 3.0;
    ```
  * **Conversion d’unités**
    ```java
    km = miles * 1.609;
    ```

##### **4. Structures conditionnelles**

* Quelle est la **structure complète d’un `if`** en Java (parenthèses, accolades, indentation) ?
 ```java
  if (condition) {
      // instructions
  } else if (autreCondition) {
      // instructions
  } else {
      // instructions
  }
  ```
* Comment traduire une **condition pseudo-code → Java** :
  * `SI condition ALORS` → `if (condition) { ... }`
  * `SINON` → `else { ... }`
  * `SINON SI` → `else if (...) { ... }`
* Quels sont les **opérateurs de comparaison** (en pseudo-code et Java) :
  * `=` ↔ `==`
  * `≠` ↔ `!=`
  * `<`, `>`, `<=`, `>=` → identiques
* Quels sont les **opérateurs logiques** `ET`↔ `&&`, `OU`↔ `||` et `NON`↔ `!` ?
* Comment écrire des **conditions combinées** :
  * `if (age >= 18 && citoyen == true)`
  * `if (note >= 60 || travailRemis == true)`
* Quelles **règles de logique** faut-il maîtriser :
  * `&&` → vrai si les deux conditions sont vraies
  * `||`→ vrai si au moins une est vraie
  * `!` → inverse le résultat logique

  Exemple :
  ```text
  SI (x > 0 ET x < 10) ALORS
      ECRIRE "compris entre 0 et 10"
  FIN SI
  ```

  En Java :

  ```java
  if (x > 0 && x < 10) {
      System.out.println("compris entre 0 et 10");
  }
  ```

* Quelle est la différence entre `if (x > 0 && x < 10)` et deux `if` séparés ?
`if (x > 0 && x < 10)` : Le code à l'intérieur du if s'exécutera seulement si les deux conditions (x > 0 et x < 10) sont vraies. Si la 1re est fausse, la 2e ne sera pas évaluée. Utiliser lorsque les deux conditions doivent remplies pour qu'une action soit exécutée.
`if (x > 0) et if (x < 10)` (comme `&`): les deux sont évaluées. Le code à l'intérieur du deuxième if sera exécuté indépendamment de si la condition du premier if est vraie ou fausse. 

  **Exemple1**:
  ```java
  int x = 5;
  
  if (x > 0 && x < 10) //true ET true ==> true

  if (x > 0) //true
  if (x < 10) // true
  ```
  **Exemple2**:
  ```java
  int x = -5;
  
  if (x > 0 && x < 10) //false ET ? ==> false

  if (x > 0) //false
  if (x < 10) // true
  ```
* Comment comparer une String ?
```java
        String chaine1 = "Ceci est une chaîne";
        String chaine2 = "Ceci est une chaîne";
        String chaine3 = "Ceci est une toute autre chaîne";
        String chaine4 = new String("Ceci est une chaîne");

   // .equals()
        System.out.println(chaine1.equals(chaine2));	//true
        System.out.println(chaine1.equals(chaine3));	//false

   // .compareTo() valeur Unicode
        System.out.println(chaine1.compareTo(chaine2));	//0
        System.out.println(chaine1.compareTo(chaine3));	//-n

  // == les réferences pas les valeurs
        System.out.println(chaine1 == chaine2);		//true
        System.out.println(chaine1 == chaine4);		//false

```
* Quels **pièges fréquents** dois-je noter :
  * confusion entre `=` et `==`
  * oubli des accolades `{ }`
  * mauvaise indentation
  * oublis de `;`
  * utiliser `&` ou `|` à la place de `&&` ou `||`

* Quels **exemples types** puis-je inclure (test de signe, test d’intervalle, choix entre deux calculs) ?
  Exemple :
  ```text
  SI (a MOD 2 = 0) ALORS
      ECRIRE "pair"
  SINON
      ECRIRE "impair"
  FIN SI
  ```

  En Java :
  ```java
  if (a % 2 == 0) {
      System.out.println("pair");
  } else {
      System.out.println("impair");
  }
  ```
  * **Choix du plus grand de deux nombres**
    ```java
    if (a > b) max = a; else max = b;
    ```
  * **Vérification d’un seuil**
    ```java
    if (temp > 100) System.out.println("Ébullition !");
    ```


##### 5. Conditions multiples et choix

* Comment traduire un **choix multiple** en Java :
  * Plusieurs `else if`
  * ou un `switch`
* Quelle est la **structure d’un switch** :
  ```java
  switch (variable) {
      cas 1:
          // instructions
          break;
      cas 2:
          // instructions
          break;
      default:
          // instructions
  }
  ```
* Quel est le rôle de `break` ?
* Comment avoir les mêmes instructions pour plus d'un cas ?
  ```java
  switch (variable) {
      cas 1:
      cas 2:
          // instructions
          break;
      cas 3:
        ...
   ```
* Quels exemples de **cas typiques** inclure :
  * calcul selon catégorie (âge, note, tarif, etc.)
  * test de lettres (`char`) ou de chaînes (`equals()`)

```java
public static void main(String[] args)
{   
    String str = "deux";

    switch (str) {
        // Cas 1
        case "un":
            System.out.println("un");
            break;

        // Cas 2
        case "deux":
            System.out.println("deux");
            break;

        // Cas 3
        case "trois":
            System.out.println("trois");
            break;

        // Cas 4: cas par défaut
        default:
            System.out.println("Aucun cas ne correspond");
    }
}
```


##### 6. Sous-programmes (procédures et fonctions)

* Quelle est la **structure d’un sous programme** en Java :
  ```java
  static typeRetour nomMethode(paramètres) {
      // instructions
      return valeur;
  }
  ```
* Quelle est la **différence** entre :
  * un **sous programme qui renvoie une valeur** (`return`)
  * un **sous programme void** (qui ne renvoie rien)
* Comment **appeler une méthode** depuis `main()` ?
* Comment **passer des paramètres** à une méthode ?
* Comment traduire du pseudo-code vers une méthode Java :
    * pseudo :
    ```
    SOUS-PROGRAMME CalculerSomme(a, b)
        RETOURNER a + b
    FIN
    ```

    * Java :
    ```java
    static int calculerSomme(int a, int b) {
        return a + b;
    }

    // Appel
    int valeur1 = 10;
    int valeur2 = 20;
    int somme = calculerSomme(valeur1,valeur2);
    System.out.println(somme);
    ```
* Quelles **règles à rappeler** :
  * chaque méthode a un **type de retour**
  * les paramètres sont **typés**
  * les variables locales ne sont **pas visibles** à l’extérieur
* Quels **exemples utiles** inclure :
  * calcul d’aire, conversion d’unités, test de signe, fonction de moyenne.


---

## ❗ Points de vigilance et différences clés

* Les **mots-clés sont sensibles à la casse** (`If` ≠ `if`).
*  Chaque **instruction se termine par `;`**.
*  Les **blocs** sont entre `{ ... }`.  Pas d’indentation automatique obligatoire, mais essentielle pour la lisibilité.
* Java exige une **déclaration préalable des variables**.
* Le pseudo-code n’est **pas strictement exécuté**, il décrit la logique.
* Attention à la **division entière**  : `/` entre deux `int` donne un `int`.

---

## Activité de synthèse

* Parmi les éléments présents dans votre feuille, lesquels pourraient ne pas y être, car vous avez déjà bien assimilé le sujet ?
* Parmi les éléments présents dans votre feuille, lesquels pourraient bénéficier de plus de clarté ou d'organisation, afin d'être facilement trouvé et compris lors de l'examen ?
* Si je relis ma feuille dans trois jours, vais-je comprendre ce que j’ai noté ?
* Est-ce que mes exemples sont clairs et complets ?
* Ai-je résumé les différences entre pseudo-code et Java ?
* Ai-je noté les symboles mathématiques et logiques essentiels ?

## Conclusion et recommandations

* Insister sur :
  * La feuille de notes = **mots-clés + exemples minimaux**.
  * L’important est de **savoir utiliser** la feuille, pas seulement de la recopier.
* Conseiller une mise en page **par blocs thématiques** :
* Utiliser :
  * **Couleurs ou surlignage** pour les mots-clés (`public`, `static`, `return`).
  * **Exemples courts** plutôt que longues explications.
* Astuce finale : « En préparant votre feuille de notes, vous révisez déjà une partie de l’examen ! »


<!--

## Pour le prof

```java
public static void main(String[] args)
    {
```
### La séance

* Aider les étudiants à créer une feuille de notes claire, synthétique et utile pour leur premier examen en Java. 
* Renforcer la compréhension des notions essentielles tout en développant l’autonomie des étudiants dans la sélection des informations pertinentes.

1. Expliquer/ Demander quel est le rôle d’une feuille de notes : 
	* ce n’est pas un document où l’on copie tout le cours, mais un outil d’aide à la réflexion. 
	* Une bonne feuille de notes doit permettre de retrouver rapidement une structure, une syntaxe ou un concept clé pendant l’examen. 
	* L’accent est mis sur la clarté, l’organisation et la personnalisation du contenu.

2. Plan de la séance s’articule autour de trois grands volets du cours : 
	i. les notions fondamentales de base.
	ii. les structures conditionnelles et choix multiples.
	iii. la logique algorithmique à travers le pseudo-code.

### 1. Variables, types, entrées/sorties et fonctions prédéfinies

Les étudiants commencent par passer en revue les éléments essentiels liés aux variables et aux types de données. L’enseignant invite chacun à se poser les bonnes questions.

Les étudiants sont encouragés à organiser ces rappels de manière visuelle : tableaux de comparaison, encadrés, ou sections bien délimitées. L’enseignant souligne que la précision est cruciale : une parenthèse ou une majuscule manquante peut faire échouer un programme.

### 2. Trace d'exécution


### 3. Structures conditionnelles et logique booléenne

On passe ensuite aux structures conditionnelles, cœur de la logique décisionnelle en programmation. Les étudiants révisent la syntaxe du `if`, du `if-else` et du `if-else if` et du `switch-case`. L'enseignant guide la réflexion sur la logique booléenne.

Cette partie met particulièrement l’accent sur les différences entre le langage naturel du pseudo-code et la rigueur syntaxique de Java. Les étudiants apprennent à reconnaître la structure du pseudo-code (« SI condition ALORS ») et à la traduire correctement en Java, avec parenthèses et accolades.
Quelques exemples sont proposés pour illustrer la correspondance entre pseudo-code et code Java, afin d’aider les étudiants à repérer les erreurs fréquentes.

Un court rappel est aussi fait sur les règles de logique booléenne et arithmétique — notamment la différence entre la division entière et la division réelle. Ces précisions doivent apparaître sur la feuille de notes, car elles sont souvent sources d’erreurs pendant l’examen.

### 4. Algorithmes simples et traduction du pseudo-code

Les étudiants révisent les algorithmes simples, présentés comme des recettes d’actions successives. L’objectif n’est pas de rédiger des ordinogrammes (puisqu’ils ne sont pas exigés dans Moodle), mais de savoir **lire et comprendre** la structure d’un pseudo-code.

L’enseignant rappelle les éléments de base à inclure sur la feuille : les mots-clés du pseudo-code (`SI`, `ALORS`, `SINON`, `LIRE`, `AFFICHER`) et leurs équivalents en Java (`if`, `else`, `System.out.println`, etc.).

On insiste sur la démarche logique : savoir lire un pseudo-code, identifier sa structure, puis le traduire en code Java bien formé. Les étudiants doivent être capables de reconnaître l’ordre des instructions et les blocs conditionnels.


## Activité finale et accompagnement

La séance se termine par une activité pratique où chaque étudiant construit ou révise sa propre feuille de notes. L’enseignant circule dans le local pour guider les choix, corriger les confusions et encourager la simplification.
Les étudiants sont invités à se poser une dernière série de questions :


L’objectif final est que chacun reparte avec une feuille personnalisée, concise et bien structurée — un outil d’aide véritable, et non une liste de rappels copiés sans compréhension.
-->


