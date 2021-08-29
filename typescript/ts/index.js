var nombre;
// Typage Explicite
console.log("hello");
nombre = 5;
console.log("Nombre: " + nombre);
var error;
var obj;
var prenom;
var nom = "John";
var prenoms;
console.log(prenoms);
var notes = [1, 2, 3, 4, 5, 6, 7];
console.log(notes);
// notes.push('Maude');
function multiplication(nombre1, nombre2) {
    var resultat = "$(nombre1) + $(nombre2) = " + (nombre1 + nombre2);
    return resultat;
}
var resultat = multiplication(5, 7);
console.log(resultat);
var variable;
var Semaine;
(function (Semaine) {
    Semaine[Semaine["LUNDI"] = 0] = "LUNDI";
    Semaine[Semaine["MARDI"] = 1] = "MARDI";
    Semaine[Semaine["MERCREDI"] = 2] = "MERCREDI";
    Semaine[Semaine["JEUDI"] = 3] = "JEUDI";
    Semaine[Semaine["VENDREDI"] = 4] = "VENDREDI";
})(Semaine || (Semaine = {}));
var Week;
(function (Week) {
    Week["LUNDI"] = "Lundi";
    Week["MARDI"] = "Mardi";
    Week["MERCREDI"] = "Mercredi";
    Week["JEUDI"] = "Jeudi";
    Week["VENDREDI"] = "Vendredi";
})(Week || (Week = {}));
var jour = Week.LUNDI;
console.log(jour);
// POO
var Voiture = /** @class */ (function () {
    function Voiture() {
        // Visibilité de propriétés
        this.nbRoues = 4;
        this.moteur = "Allemand";
        this.couleur = "Bleu";
    }
    Voiture.prototype.getMoteur = function () {
        return this.moteur;
    };
    Voiture.prototype.setMoteur = function (valeur, utilisateur) {
        if (utilisateur.key == '0xFASASS') {
            this.moteur = valeur;
        }
    };
    Voiture.help = "Voici la notice de la voiture";
    return Voiture;
}());
console.log(Voiture.help);
// let obj: Voiture;
var voiture = new Voiture();
console.log(voiture.nbRoues);
console.log(voiture.couleur);
// console.log(voiture.moteur); -< erreur, on ne doit pas
// accéder à cette variable en dehors de la classe
console.log(voiture.getMoteur());
// Une interface définit une personne que dois avoir ex un nom prénom
var p1 = {
    nom: 'Doe',
    prenom: 'John',
    description: function () {
        console.log("$(this.nom) $(this.prenom)");
    }
};
p1.description();
