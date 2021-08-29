
let nombre:number;
// Typage Explicite
console.log("hello");
nombre = 5;
console.log("Nombre: " + nombre);

let error: boolean;
let obj: object;
let prenom: string;

let nom = "John";
let prenoms: string[];
console.log(prenoms);

let notes: number[] = [1,2,3,4,5,6,7];
console.log(notes);
// notes.push('Maude');

function multiplication(nombre1:number, nombre2:number): string {
    const resultat = `$(nombre1) + $(nombre2) = ${nombre1 + nombre2}`
    return resultat
}

const resultat = multiplication(5, 7);
console.log(resultat);

let variable:any;

enum Semaine {
    LUNDI,
    MARDI,
    MERCREDI,
    JEUDI,
    VENDREDI
}

enum Week {
    LUNDI="Lundi",
    MARDI="Mardi",
    MERCREDI="Mercredi",
    JEUDI="Jeudi",
    VENDREDI="Vendredi"
}

let jour = Week.LUNDI
console.log(jour);

// POO
class Voiture{
    // Declaration des variables/propriétés
    couleur:string;
    // Visibilité de propriétés
    public nbRoues:number = 4;
    private moteur = "Allemand"
    protected frein: string;
    static help = "Voici la notice de la voiture";

    constructor() {
        this.couleur = "Bleu";
    }

    getMoteur() {
        return this.moteur;
    }

    setMoteur(valeur: string, utilisateur: any) {
        if(utilisateur.key == '0xFASASS') {
            this.moteur = valeur;
        }
    }
}

console.log(Voiture.help)
// let obj: Voiture;
const voiture: Voiture = new Voiture();
console.log(voiture.nbRoues);
console.log(voiture.couleur);
// console.log(voiture.moteur); -< erreur, on ne doit pas
// accéder à cette variable en dehors de la classe
console.log(voiture.getMoteur());

/**
 * Une interface est un contrat
 * Si on implémente l'interface, on s'engage à respecter ce qui est 
 * définit dans l'interface.
 * ex: Une persone doit avoir un nom, un prénom et une description
 */
interface Personne {
    prenom: string;
    nom: string;
    // void: la fonction ne renvoie rien.
    description(): void;
}
// Une interface définit une personne que dois avoir ex un nom prénom
let p1: Personne = {
    nom: 'Doe',
    prenom: 'John',
    description: function() {
        console.log(`$(this.nom) $(this.prenom)`)
    }
}
p1.description();
