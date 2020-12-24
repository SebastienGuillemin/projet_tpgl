import { Materiel } from "../materiel.model";

export class Alarme extends Materiel {
    executerOrdre(): void {
        alert('Alarme')
    }

    getActionLabel(): string {
        return ("Label");
    }
}
