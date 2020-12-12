export class Cereale {
    constructor (               
        public num: number, 
        public type?: String,
        public poids?: number,
        public qualite?: string,
        public acheminement?: string[]
    ) { }                                           //Il faut que les attributs soient publiques pour que JS puisse directement créer l'instance à partir de JSON (après lecture en BD).
    
    getNum() { return this.num; }
}
