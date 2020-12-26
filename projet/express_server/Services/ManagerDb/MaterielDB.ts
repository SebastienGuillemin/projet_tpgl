import { Request, Response } from 'express';
import { Materiel } from 'src/app/shared/model/materiel.model';
import fs = require('fs');
import { JsonDbParser } from '../../Util/JsonDbParser';

export class MaterielDB {
    public materiel_file_path = 'express_server/database/materiel.json';

    getMateriels(): Materiel[] {
        const materiels: Array<Materiel> = JsonDbParser.read<Materiel>(this.materiel_file_path);
        return materiels;
    }

    updateMateriels(req: Request, res: Response) {
        const data = req.body;
        let nom = data['nom'];
        const materiels = this.getMateriels();
        const idx = materiels.findIndex(x => x.nom === nom);
        materiels[idx].etat = data['etat'];
        fs.writeFile(
            this.materiel_file_path,
            JSON.stringify(materiels, null, 4),
            function (err) {
                if (err) {
                    res.status(500).send();
                    console.log('Erreur mise à jour Materiel', err);
                }
                else {
                    res.status(200).send();
                }
            }
        );
    }

}
