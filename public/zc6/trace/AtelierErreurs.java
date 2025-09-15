package desmanglesna;

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
