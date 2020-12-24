import { Materiel } from "../materiel.model";

export class Alarme extends Materiel {
    constructor(nom?: string, etat?: string) {
        super(nom, etat, "Alarme");
    }

    executerOrdre(): void {
        alert('Alarme')
    }

    getActionLabel(): string {
        return ("Label");
    }
}
