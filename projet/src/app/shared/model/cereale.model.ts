import { ModelFormInterface } from './modelFormInterface';

export class Cereale implements ModelFormInterface {
    constructor(
        public num?: number,
        public type?: string,
        public poids?: number,
        public qualite?: string,
        public acheminement?: string
    ) { }                                           //Il faut que les attributs soient publiques pour que JS puisse directement créer l'instance à partir de JSON (après lecture en BD).


    //permet de retourner la liste des villes de l'acheminenemt.
    getAcheminementList(): string[] {
        if (this.acheminement == "")
            return [];
        let temp = this.acheminement.replace(' ', '');
        let tabAcheminement = temp.split(',');
        return tabAcheminement;
    }

    getFormFields(): string[] {
        return ["num", "type", "poids", "qualite", "acheminement"];
    }
}
