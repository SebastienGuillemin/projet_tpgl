import { Request, Response } from 'express';
import { Materiel } from 'src/app/shared/model/materiel.model';
import fs = require('fs');

export class MaterielDB {
    // tslint:disable-next-line:variable-name
    public materiel_file_path = 'express_server/database/materiel.json';

    getMateriels(): Materiel[] {
        const materiels: Array<Materiel> = JSON.parse(fs.readFileSync(this.materiel_file_path, 'utf8'));
        return materiels;
    }



    updateMateriels(req: Request, res: Response) {
        const data = req.body;
        console.log(req.body);
        let nom = data['nom'];
        const materiels = JSON.parse(fs.readFileSync(this.materiel_file_path, 'utf8'));
        const idx = materiels.findIndex(x => x.nom === nom);
        materiels[idx].etat = data['etat'];
        fs.writeFile(
            this.materiel_file_path,
            JSON.stringify(materiels, null, 4),
            function (err) {
                if (err) {
                    console.log('Erreur mise à jour Materiel', err);
                    res.status(500).send();
                }
                else {
                    console.log('ok');
                    res.status(200).send();
                }
            }
        );
    }

}
