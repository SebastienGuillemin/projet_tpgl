import { ModelFormInterface } from './modelFormInterface';

export enum UserRole {
    Admin = "admin",
    User = "user"
}

export class User implements ModelFormInterface {
    constructor(public username?: string, public password?: string,  public role?: UserRole) { }

    getFormFields(): Array<string> {
        return ["username", "password"];
    }
}