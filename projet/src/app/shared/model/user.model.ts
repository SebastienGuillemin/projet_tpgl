import { ModelFormInterface } from './modelFormInterface';

export enum UserRole {
    Admin = "admin",
    User = "user"
}

export class User implements ModelFormInterface {
    constructor(public username?: string, public password?: string,  public role?: UserRole) { }        //Il faut que les attributs soient publiques pour que JS puisse directement créer l'instance à partir de JSON (après lecture en BD).

    getFormFields(): Array<string> {
        return ["username", "password"];
    }
}