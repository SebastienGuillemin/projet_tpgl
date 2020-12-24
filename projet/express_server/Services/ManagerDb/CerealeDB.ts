import  { Request, Response } from 'express';
import { Cereale } from "src/app/shared/model/cereale.model";
import fs = require('fs');

export class CerealeDB {
    private cereales_file_path: string = 'express_server/database/cereale.json';

    getLotsCereales(): Cereale[] {
        let cereales: Array<Cereale> = JSON.parse(fs.readFileSync(this.cereales_file_path, 'utf8'));
        return cereales;
    }

    updateCereales(req : Request, res: Response) {
        let data = req.body;
        console.log(data);
        let cereales = JSON.parse(fs.readFileSync(this.cereales_file_path, 'utf8'));
        cereales.push({
            "num"           : data["num"],
            "type"          : data["type"],
            "poids"         : data["poids"],
            "qualite"       : data["qualite"],
            "acheminement"  : data["acheminement"]});
        fs.writeFile(
            this.cereales_file_path,
            JSON.stringify(cereales, null, 4),
            function (err) {
                if (err)  {
                    console.log("Erreur mise à jour céréales", err);
                    res.status(500).send();
                }
                else {
                    res.status(200).send();
                }
            }
        );
    }
}