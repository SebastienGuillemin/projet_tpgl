import { Materiel } from "../materiel.model";

export class Silo extends Materiel {
    constructor(nom?: string, etat?: string) {
        super(nom, etat, "Silo");
    }

    action(): void {
        this.etat = "Vide";
    }

    getActionLabel(): string {
        return "Vider";
    }
}
