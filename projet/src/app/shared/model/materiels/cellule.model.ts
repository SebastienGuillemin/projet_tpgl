import { Materiel } from "../materiel.model";

export class Cellule  extends Materiel {
    executerOrdre(): void {
        throw new Error("Method not implemented.");
    }
    getActionLabel(): string {
        throw new Error("Method not implemented.");
    }
}
