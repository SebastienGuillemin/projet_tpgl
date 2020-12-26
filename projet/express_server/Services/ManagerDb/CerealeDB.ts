import  { Request, Response } from 'express';
import { Cereale } from "src/app/shared/model/cereale.model";
import fs = require('fs');
import { JsonDbParser } from '../../Util/JsonDbParser';

export class CerealeDB {
    private cereales_file_path: string = 'express_server/database/cereale.json';

    getLotsCereales(): Cereale[] {
        let cereales: Array<Cereale> = JsonDbParser.read<Cereale>(this.cereales_file_path);
        return cereales;
    }

    updateCereales(req : Request, res: Response) {
        let data = req.body;
        let cereales = JsonDbParser.read<any>(this.cereales_file_path);
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