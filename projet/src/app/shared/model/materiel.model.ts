import { ModelFormInterface } from './modelFormInterface';

export class Materiel implements ModelFormInterface {
    etats = ["", ""];   //COntient les états que peut prendre le matériel.
    labels = ["", ""];  //Contient les lables à afficher en fonction des états.

    constructor (               
        public nom?: string, 
        public etat?: string,
        public type?: string
    ) { }                                           //Il faut que les attributs soient publiques pour que JS puisse directement créer l'instance à partir de JSON (après lecture en BD).
    

    //Permet de retourner la liste des machines.
    getDonnees(): string {
      return "[" + this.type + "]" + this.nom + " : "  + this.etat;
    }

    //Permet de retourner l'index de l'état actuel dans la liste des états.
    getEtatIndex(): number {
        return this.etats.findIndex((element) => element == this.etat);
    }

    //Pour tous les matériels il n'y a que deux états. Ceci permet de faire passer d'un état à l'autre.
    action(): void {
        this.etat = this.etats[1 - this.getEtatIndex()];
    }

    getActionLabel(): string {
        return this.labels[this.getEtatIndex()];
    }

    getEtats(): string[] {
        return this.etats;
    }

    getFormFields(): string[] {
        return ["nom", "etat"];
    }

}