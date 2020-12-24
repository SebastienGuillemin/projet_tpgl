import { Materiel } from "../materiel.model";

export class Sonde extends Materiel {
    constructor(nom?: string, etat?: string) {
        super(nom, etat, "Sonde");
    }

    action(): void {
        alert("Sonde");
    }
    getActionLabel(): string {
        return "Sonder";
    }
}
