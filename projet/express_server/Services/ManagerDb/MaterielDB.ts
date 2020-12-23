import  { Request, Response } from 'express';
import { Materiel } from "src/app/shared/model/materiel.model";
import fs = require('fs');

export class MaterielDB {
    public materiel_file_path : string = 'express_server/database/materiel.json';

    getMateriels(): Materiel[] {
        let materiels: Array<Materiel> = JSON.parse(fs.readFileSync(this.materiel_file_path, 'utf8'));
        return materiels;
    }

}