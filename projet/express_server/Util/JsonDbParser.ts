import fs = require('fs');

export class JsonDbParser {
    public static read<T>(path : string): T[] {
        let objects: Array<T> = JSON.parse(fs.readFileSync(path, 'utf8'));
        return objects;
    }
}