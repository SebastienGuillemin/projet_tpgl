import { ModelFormInterface } from './modelFormInterface';

export class User implements ModelFormInterface {
    constructor(public username?: string, public password?: string,  private _role?: string) { }

    getFormField(): Array<string> {
        return ["username", "password"];
    }
}