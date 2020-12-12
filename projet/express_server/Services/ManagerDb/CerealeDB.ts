import { Cereale } from "src/app/shared/model/cereale.model";
import fs = require('fs');

export class CerealeDB {
    private cereales_file_path: string = 'express_server/database/cereale.json';

    getLotsCereales(): Cereale[] {
        var cereales: Array<Cereale> = JSON.parse(fs.readFileSync(this.cereales_file_path, 'utf8'));
        return cereales;
    }
}