import { Materiel } from "../materiel.model";

export class ElevateurGodet extends Materiel {
    constructor(nom?: string, etat?: string) {
        super(nom, etat, "ElevateurGodet");
    }

    action(): void {
        alert("Élévateur");
    }
    getActionLabel(): string {
        return "Élévateur";
    }
}
