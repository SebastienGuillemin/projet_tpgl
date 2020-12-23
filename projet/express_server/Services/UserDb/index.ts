import * as express from 'express';
import { User, UserRole } from 'src/app/shared/model/user.model';

import fs = require('fs');

export class UserDb {
    private users_file_path: string = 'express_server/database/user.json';

    getUserRole(user: User): UserRole {
        // des node modules existe pour lire des gros fichier json de façon efficace, mais ici pas besoin
        var users: Array<User> = JSON.parse(fs.readFileSync(this.users_file_path, 'utf8'));

        return users.find(u => u.username == user.username)?.role;
    }
}