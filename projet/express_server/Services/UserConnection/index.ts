import * as express from 'express';
import { User } from 'src/app/shared/model/user.model';
import { ManagerDB } from '../ManagerDB';

export class UserConnectionService {
    //Regarde dans la BD si l'utilisateur à fournit le bon couple '"username"/"password".
    //Si l'utilisateur a fourni les bonnes informations, la réponse est le code 200 sinon le code est 401.
    connection(req: express.Request, res: express.Response) {
        let user = req.body as User;
        let managerDB = new ManagerDB();
        let role = managerDB.getUserRole(user); //Récupération du rôle.

        if (role == undefined) {        //Si le rôle est "undifned" => utilisateur non connecté.
            res.status(401).send();     //Envoi du status 401.
        }
        else {
            req.session["role"] = role;
            res.status(200).send();     //Envoi du status 200.
        }
    }
}