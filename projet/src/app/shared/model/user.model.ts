import { ModelFormInterface } from './modelFormInterface';
import { UserRole } from 'src/app/shared/model/UserRole';

export class User implements ModelFormInterface {
    constructor(public username?: string, public password?: string,  public role?: UserRole) { }

    getFormFields(): Array<string> {
        return ["username", "password"];
    }
}