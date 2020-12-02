import * as express from 'express';
import { Service } from '../Service';

export class UserConnexionService implements Service {
    register_callbacks(express_app: express.Application) {
        express_app.get('/api/a', function(req, res) {
            res.send("<h1> " + "wow" + "</h1>")
        });
    }
}