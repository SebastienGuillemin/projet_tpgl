import { Materiel } from "../materiel.model";

export class ElevateurGodet extends Materiel {
    executerOrdre(): void {
        throw new Error("Method not implemented.");
    }
    getActionLabel(): string {
        throw new Error("Method not implemented.");
    }
}
