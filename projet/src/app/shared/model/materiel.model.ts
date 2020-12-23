import { ModelFormInterface } from './modelFormInterface';

export class Materiel implements ModelFormInterface {
    constructor (               
        public nom?: string, 
        public etat?: string

    ) { }                                           //Il faut que les attributs soient publiques pour que JS puisse directement créer l'instance à partir de JSON (après lecture en BD).
    

    //permet de retourner la liste des machines
    getDonnees(): string {
      return this.nom + " : "  + this.etat;
    }

    //execute une action sur la machine sélectionné(e)
    executerOrdre(): void {

    }
    
    getFormFields(): string[] {
        return ["nom", "etat"];
    }
}
