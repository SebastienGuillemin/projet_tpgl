import * as express from 'express';
import { User } from 'src/app/shared/model/user.model';
import { ManagerDB } from '../ManagerDb';

export class UserConnectionService {
    //Regarde dans la BD si l'utilisateur à fournit le bon couple '"username"/"password".
    //Si l'utilisateur a fourni les bonnes informations, la réponse est le code 200 sinon le code est 401.
    connection(req: express.Request, res: express.Response): void {
        let user = req.body as User;
        let managerDB = new ManagerDB();
        let user_db = managerDB.getUser(user);

        if (user_db?.role === undefined) {
            res.status(401).send();
        }
        else if (user['password'] === user_db.password) {
            req.session["user"] = user_db;
            res.status(200).send();
        }
        else {
            res.status(401).send();
        }

    }

    //Retourne l'utilisateur s'il est connecté, sinon retourne 401.
    getConnectedUser(req: express.Request, res: express.Response): void {
        if (!req.session["user"])
            res.status(401).send();
        else
            res.status(200).send(JSON.stringify(req.session["user"]));
    }

    logout(req: express.Request, res: express.Response): void {
      req.session.destroy(function(err) {

      });
      res.status(200).send();
    }
}
