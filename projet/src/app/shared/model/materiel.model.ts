import { MaterielService } from '../services/materiel.service';
import { ModelFormInterface } from './modelFormInterface';

//Il faudrait que cette classe soit abstraite. Seulement, si ell eest abstraite, onne peut plus générer le formulaire dynamiquement ...
export class Materiel implements ModelFormInterface {

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
    action(): void {
        throw new Error("Impossible d'éxécuter un ordre pour un matériel générique.");
    }
    
    //Retourne le label à mettre sur le bouton de l'action.
    getActionLabel(): string{
        throw new Error("Label indisponible pour un matériel générique.");
    }
    
    getFormFields(): string[] {
        return ["nom", "etat"];
    }
}
