import { invalid } from '@angular/compiler/src/render3/view/util';
import * as express from 'express';

export class UserConnectionService {
    connection(req: express.Request) {
        var username = req.body.username;
        var password = req.body.password;

        //il faudra connecter à la bd et retourner un JSON contenant le rôle.
        if (username == "admin" && password == "admin")
            return "ok";
        else if (username == "user" && password == "user")
            return "ok";
        else
            return "invalid";
    };
}