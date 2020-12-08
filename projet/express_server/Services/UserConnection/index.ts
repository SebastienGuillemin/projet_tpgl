import * as express from 'express';
import { UserRole } from 'src/app/shared/model/UserRole';
import { User } from 'src/app/shared/model/user.model';
import { ManagerDB } from '../ManagerDB';

export class UserConnectionService {
    connection(req: express.Request) {
        var user = req.body as User;
        return this.checkUser(user);
    }

    // on regarde si l'user existe dans la db, si oui, alors on retourne son role pour ensuite rediriger vers la bonne page
    checkUser(user: User): UserRole {
        var managerDB = new ManagerDB();
        return managerDB.getUserRole(user);
    }
}