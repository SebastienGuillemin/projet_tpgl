import { ModelFormInterface } from './modelFormInterface';

export abstract class Materiel implements ModelFormInterface {
    constructor (               
        public nom?: string, 
        public etat?: string,
        public type?: string
    ) { }                                           //Il faut que les attributs soient publiques pour que JS puisse directement créer l'instance à partir de JSON (après lecture en BD).
    

    //Permet de retourner la liste des machines.
    getDonnees(): string {
      return "[" + this.type + "]" + this.nom + " : "  + this.etat;
    }

    //Execute une action. Comme chaque matériel fait une action différente, il faut que cette méthode soit implémenter par les classe filles.
    abstract executerOrdre(): void;

    //Retourne le label à mettre sur le bouton de l'action.
    abstract getActionLabel(): string;
    
    getFormFields(): string[] {
        return ["nom", "etat"];
    }
}
