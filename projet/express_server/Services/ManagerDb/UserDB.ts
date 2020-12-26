import { User, UserRole } from 'src/app/shared/model/user.model';
import { JsonDbParser } from '../../Util/JsonDbParser';

export class UserDB {
    private users_file_path: string = 'express_server/database/user.json';

    getUser(user: User): User {
        //des node modules existe pour lire des gros fichier json de façon efficace, mais ici pas besoin
        var users: Array<User> = JsonDbParser.read<User>(this.users_file_path);

        return users.find(u => u.username === user.username);
    }

    getUserRole(user: User): UserRole {
        return this.getUser(user)?.role;
    }
}
